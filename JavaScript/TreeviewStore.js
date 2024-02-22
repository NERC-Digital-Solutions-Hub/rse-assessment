/* - */

import { defineStore }      from 'pinia'
import { useMapStore }      from '@/stores/MapStore'
import { getTreeviewItems } from '@/utilities/retrieveTreeviewItems'
import Dexie                from 'dexie'
// import * as query           from '@arcgis/core/rest/query.js'
// import Query                from '@arcgis/core/rest/support/Query.js'
import ClassBreaksRenderer  from '@arcgis/core/renderers/ClassBreaksRenderer.js'
import { dbSchema }         from '@/utilities/IndexedDBSchema'

export const useTreeviewStore = () => {
  const innerStore = defineStore('treeviewStore', {
    state: () => ({
      activeItems: [],
      openedFolders: [],
      treeviewItems: [],
      searching: false,
      infoBtnIsClicked: false,
      name: 'treeviewStore!',
    }),

    getters: {
      isLoading() {
        return s.treeviewItems.length === 0 && !s.searching
      },

      /**
       * return an array of single selected folders, it has to be identical with the CJ_Tab_Name property of the TreeviewItems
       * it is adviced to use @ref @function getTreeviewItemInfo to obtain the property of the TreeviewItems
       * @returns {Array} array of single selected folders
       */
      singleSelectedFolders() {
        return ['Flood', 'Heat'] // TODO: WARNING !!! - Hardcode !!!
        // return ['Flood']
      },
    },

    actions: {
      /**
       * handle info button clicking event
       * @note it use a boolean `infoBtnIsClicked` to prevent the Treeview component adding the layer to activeItems when the info button is clicked
       * @note the handling of the info button clicking event is done in the `onActive` callback
       * @param {Object} item TreeviewItem Layer object
       * @returns {void}
       */
      onInfoBtnClick(item = null) {
        this.infoBtnIsClicked = true // must not be removed
      },

      /**
       * check if the Treeview item is a single selected item
       * @param {Object} tvItem, Treeview item
       * @returns {Boolean} true if the Treeview item is a single selected item
       */
      isSingleSelectedItem(tvItem) {
        return this.singleSelectedFolders.some((folder) => folder === this.getTreeviewItemInfo(tvItem, 'tab'))
      },

      /**
       * Treeview item selected callback
       * @param {Array} newSelectedItems, parameter is provided by the Vuetify Treeview component input event
       */
      onSelected(newSelectedItems) {
        console.info('onSelected', newSelectedItems)
      },

      /**
       * Treeview item activated callback
       * @param {Array} newActiveItems, parameter is provided by the Vuetify Treeview component update:active event
       */
      onActive(newActiveItems) {
        console.info('onActive')

        if (this.infoBtnIsClicked) {
          // handle info button clicking event
          const oldActiveItems = this.activeItems
          this.activeItems = [...oldActiveItems] // nothing changed, it is a must, otherwise the Treeview component will add the newActiveItem to the list.
          this.infoBtnIsClicked = false
          return
        }

        if (newActiveItems.length > this.activeItems.length) {
          //  item is added to the activeItems
          console.log('onADD')
          const newItem = newActiveItems.at(-1) // lets hope the last item is the new item.

          if (this.isSingleSelectedItem(newItem)) {
            console.log('[onAdd] single selected item')

            this.activeItems
              .filter((item) => this.isUnderSameDirectory(item, newItem) || !this.isSingleSelectedItem(item))
              .forEach((item) => this.removeLayer(item))

            this.addLayer(newItem)
          } else {
            console.log('[onAdd] multiple selected item')
            // multiple selected items
            // remove all single selected items, only keep the multiple selected items
            this.activeItems.filter((item) => this.isSingleSelectedItem(item)).forEach((item) => this.removeLayer(item))

            this.addLayer(newItem)
          }
        } else {
          // item is removed from the activeItems
          console.log('[onREMOVE]')
          console.log('this.activeItems', this.activeItems)

          const removedItems = this.activeItems.filter((item) => !newActiveItems.includes(item))
          console.log(removedItems)
          removedItems.forEach((item) => this.removeLayer(item))
          // this.activeItems = newActiveItems

          if (removedItems.length === 1 && newActiveItems.length === 1) {
            console.log('!!!!!!!!!!')
            // to prevent vuetify treeview default behavior when switching between single-selected items
            // if (this.isSingleSelectedItem(removedItems.at(0))) {
            //   this.addLayer(newActiveItems.at(0))
            // }
          }
        }
      },

      /**
       * Open folder callback
       * @param {Array} newOpenedFolders, parameter is provided by the Vuetify Treeview component update:open event
       */
      onOpen(newOpenedFolders) {
        if (this.infoBtnIsClicked) return
        // console.info('onOpen', newOpenedFolders)
      },

      /**
       * Add layer to the map using tvItem
       * @param {Object} tvItem, TreeviewItem object
       */
      addLayer(tvItem) {
        console.assert(tvItem != null, 'tvItem is null')
        try {
          {
            // this block has to be before mapStore.addLayer inorder to show the pop up
            this.setIsActive(tvItem, true)
            this.activeItems.push(tvItem)
          }
          const mapStore = useMapStore()
          const gdb = this.getTreeviewItemInfo(tvItem, 'gdb')
          const field = this.getTreeviewItemInfo(tvItem, 'field')
          const featureServiceUrl = mapStore.featureServiceUrls[gdb]
          mapStore.getRendererJson(gdb, field).then((rJson) => {
            const renderer = ClassBreaksRenderer.fromJSON(rJson)
            mapStore.addLayer(featureServiceUrl, renderer)
          })
        } catch (error) {
          this.removeLayer(tvItem)
          alert('[ERR] TreeviewStore.addLayer: ' + error.message)
        }
      },

      /**
       * check if @param tvItem1 and @param tvItem2 are under the same directory
       * @param {Object} tvItem1, treeviewItem expcted to be layer.
       * @param {Object} tvItem2, treeviewItem expcted to be layer.
       * @returns @boolean true if tvItem1 and tvItem2 are under the same directory
       */
      isUnderSameDirectory(tvItem1, tvItem2) {
        const dir1 = this.getTreeviewItemInfo(tvItem1, 'tab')
        const dir2 = this.getTreeviewItemInfo(tvItem2, 'tab')
        return dir1 === dir2
      },

      /**
       * remove layer from the map using tvItem
       * @param {Object} tvItem, TreeviewItem object
       */
      removeLayer(tvItem) {
        const mapStore = useMapStore()
        mapStore.removeLayer(this.getTreeviewItemInfo(tvItem, 'field'))
        this.setIsActive(tvItem, false)
        this.activeItems = this.activeItems.filter((item) => item != tvItem)
        console.log(this.activeItems)
      },

      /**
       * Set the isActive property of the TreeviewItem, directly from the tree.
       * @param {Object} tvItem
       * @param {bool} isActive
       * @returns {void}
       */
      setIsActive(tvItem, isActive = true) {
        tvItem.isActive = isActive
        for (let root of this.treeviewItems) {
          let result = this.findTvItem(root, tvItem)
          if (result) {
            result.isActive = isActive
            break
          }
        }
      },

      /**
       * Find an end node in the tree by its id.
       * It is essential for setting the TreeviewItem.isActive property.
       * the frontend renderer according to the direct tree's endnode. NOT the activeItems.
       * @param {Object} root a tree object, expected to be one of the elements in this.treeviewItems
       * @param {Object} tvItem a leaf object, expected to be one of the elements in root.children
       * @returns {Object} tvItem, the tvItem found in the tree, it is a reference, not a copy.
       */
      findTvItem(root, tvItem) {
        if (root == null || tvItem == null) {
          return null
        }
        if (root.id === tvItem.id) {
          return root
        }
        if (root.children != null) {
          for (const child of root.children) {
            const result = this.findTvItem(child, tvItem)
            if (result != null) {
              return result
            }
          }
        }
        return null
      },

      /**
       * Retrieve Treeview item's attribute value
       * Note that Treeview item pertains a 'attributes' property which is an Object that contains all the info obtained from the [Treeview API]{@link https://services1.arcgis.com/SfF67lOzKAmtSACX/ArcGIS/rest/services/CJ_Layers_01/FeatureServer/0}
       * @param {Object} tvItem
       * @param {String} info, one of the following: 'layerId', 'tab', 'path', 'label', 'gdb', 'field', 'sldField', 'fid'
       * @returns {String} value of the info,
       */
      getTreeviewItemInfo(tvItem, info) {
        if (tvItem == null || info == null) {
          return null
        }

        if (tvItem.attributes == null) {
          throw new Error(
            `[ERR] tvItem.attributes == null. tvItem must have attributes which pertains all the info obtained from the API`
          )
        }

        switch (info) {
          case 'layerId':
            return tvItem.attributes.LayerId
          case 'tab':
            return tvItem.attributes.CJ_Tab_Name
          case 'path':
            return tvItem.attributes.CJ_Path
          case 'label':
            return tvItem.attributes.CJ_Layer_Label
          case 'gdb':
            return tvItem.attributes.GDB_FC
          case 'field':
            return tvItem.attributes.Field
          case 'sldField':
            return tvItem.attributes.SLD_Field
          case 'fid':
            return tvItem.attributes.FID
          default:
            throw new Error(`[ERR] unknown info: ${info}`)
        }
      },

      async asyncTreeviewItems() {

        const ClimateJustDB = new Dexie('ClimateJust')
        ClimateJustDB.version(1).stores(dbSchema)
        await ClimateJustDB.open()
        const results = await ClimateJustDB.Layers.toArray()
        this.treeviewItems = getTreeviewItems(results)
        
        // const queryUrl = import.meta.env.VITE_API_ENDPOINT_TREE_VIEW

        // const myQuery = new Query({
        //   outFields: ['*'],
        //   where: 'FID >= 0', // get all. //TODO: note there is exceededTransferLimit, see https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html
        //   // TODO: [CJP-397] What about the exceededTransferLimit ??? Perhaps page the query: e.g. FID >= 0 AND FID < 100
        // })
        // const results = await query.executeQueryJSON(queryUrl, myQuery)
        // console.log(results.features)
        // this.treeviewItems = getTreeviewItems(results.features)
      },
    },
  })
  const s = innerStore() // TODO: innerStore see https://github.com/vuejs/pinia/discussions/1176
  if (s.treeviewItems.length === 0) {
    s.asyncTreeviewItems()
  }
  return s
}
