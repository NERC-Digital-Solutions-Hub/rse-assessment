import { v4 as uuidv4 } from 'uuid'

/**
 * create a node in the tree, it is either a folder or a layer structure
 * these two structure are made to fit for vuetify2 TreeviewComponent, @see {@link https://v2.vuetifyjs.com/en/components/treeview/}
 * @param {String} name_ name of the item
 * @param {Boolean} isFolder_ true if the item is a folder, false if it is a layer
 * @param {Int} [id_ = uuidv4()] id of the item, required by vuetify2 TreeviewComponent. Default to be a uuidv4()
 * @returns {Object} a Dir structure or a Layer structure
 */
function createItem({name, isFolder = false, id = uuidv4(), infoId = null}) {
  if (isFolder) {
    // folder structure
    const newFolder = {
      id,
      name,
      isFolder,
      children: [],
      infoId
    }
    return newFolder
  } else {
    //layer structure
    const newLayer = {
      id,
      name,
      isFolder,
      attributes: null,
      isActive: false,
      infoId
    }
    return newLayer
  }
}

/**
 * find the index of the subDirName in the subDirArr
 * @param {Array} subDirArr an Array of String, each element is a subDirName
 * @param {String} subDirName the subDirName to be found in the subDirArr
 * @returns {Int} index of the subDirName in the subDirArr, return -1 if not found
 */
function subDirIndex(subDirArr, subDirName) {
  return subDirArr.findIndex((subDir) => subDir.name === subDirName)
}

/**
 * create a subDir under the parentDir
 * @param {Object | null} parentDir a structure contain an array of children, expected to be an Dir structure produced by @see {@link createItem}
 * @param {String} dirName_ name of the subDir
 * @param {Int} id_ id of the subDir, required by vuetify2 TreeviewComponent
 * @returns {Object} Dir structure
 */
function createDir({parentDir, name, infoId, id = uuidv4()}) {
  if (parentDir == null) {
    return createItem({name, isFolder: true, id, infoId})
  }

  // null check
  console.assert(parentDir.children != null)
  console.assert(id != null)

  const subDir = createItem({name, isFolder: true, id, infoId})
  parentDir.children.push(subDir)
}

/**
 * create a layer under the parentDir
 * @param {Object} parentDir
 * @param {Object} feature
 */
function createLayer(parentDir, attr) {
  // null check
  console.assert(parentDir != null, '[createLayer] parentDir == null')
  console.assert(attr != null, '[createLayer] attr == null')

  const layerName = attr['CJ_Layer_Label']
  const layer = createItem({name: layerName, isFolder: false, id: attr['LayerId'], infoId: attr['CJ_Layer_InfoId']})

  // stores the feature original data
  layer['attributes'] = attr
  parentDir.children.push(layer)

  // reorder; layer 1st, folder after
  parentDir.children = parentDir.children
    .filter((e) => !e.isFolder)
    .concat(parentDir.children.filter((e) => e.isFolder))
}

/**
 * Reformat Treeview data to fit with vuetify2
 * Obtain data from ArcGIS REST Services: https://services1.arcgis.com/SfF67lOzKAmtSACX/ArcGIS/rest/services/CJ_Layers_01/FeatureServer/0
 * @return {Array | null}  of Treeview data that fits vuetify2 TreeviewComponent, see https://v2.vuetifyjs.com/en/components/treeview/
 * @param {Array} features_ an array of FeatureSet obtained from the ArcGIS RestApi call, see ref below
 * 1. https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-query.html#executeForIds
 * 2. https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html
 */
/*
function getTreeviewItems(features_) {
  // rootDirs of the Treeview
  let rootDirs = []

  for (let feat of features_) {
    // null check
    console.assert(feat.attributes != null)
    console.assert(feat.attributes.CJ_Tab_Name != null)

    // get the layer's root name
    const rootName_ = feat['attributes']['CJ_Tab_Name']

    // check if the rootName_ is already in the rootDirs, if not, create one
    let rIdx = subDirIndex(rootDirs, rootName_)

    if (rIdx < 0) {
      // rootName_ not found, create a root dir structure
      const r = createDir(null, rootName_)
      rootDirs.push(r)
      rIdx = subDirIndex(rootDirs, rootName_)
    }

    // update the current dir, note that currDir is a structure contain an array of children
    let currDir = rootDirs[rIdx]

    // check if the layer has a CJ_Path, if not, create a layer under the root dir
    if (feat['attributes']['CJ_Path'] == null) {
      createLayer(currDir, feat)
      continue
    }

    // get split the CJ_PATH in to subDirNames
    // note that CJ_Path is a string of subDirNames separated by '|'
    // e.g. Heat exposure (2011)  |  Mean summer maximum temperature 2050s  |  Low emissions scenario
    // layer lives in the last subDirName
    let subDirNames = feat['attributes']['CJ_Path'].split('|').map((n) => n.trim())

    for (const subDirName of subDirNames) {
      // check if the subDirName is already in the currDir, if not, create one
      let idx = subDirIndex(currDir.children, subDirName)

      if (idx < 0) {
        createDir(currDir, subDirName)
        idx = subDirIndex(currDir.children, subDirName)
      }

      // update the currDir as the subDir
      currDir = currDir.children[idx]

      if (subDirName === subDirNames[subDirNames.length - 1]) {
        // create a layer under the last SubDir
        createLayer(currDir, feat)
      }
    }
  }

  // return the rootDirs
  return rootDirs
}
*/


function getTreeviewItems(attributes) {
  // rootDirs of the Treeview
  let rootDirs = []

  for (let attr of attributes) {
    // null check
    console.assert(attr != null)
    console.assert(attr.CJ_Tab_Name != null)

    // get the layer's root name
    const rootName_ = attr['CJ_Tab_Name']

    // check if the rootName_ is already in the rootDirs, if not, create one
    let rIdx = subDirIndex(rootDirs, rootName_)

    if (rIdx < 0) {
      // rootName_ not found, create a root dir structure
      const r = createDir({parentDir:null, name:rootName_, infoId:null})
      rootDirs.push(r)
      rIdx = subDirIndex(rootDirs, rootName_)
    }

    // update the current dir, note that currDir is a structure contain an array of children
    let currDir = rootDirs[rIdx]

    // check if the layer has a CJ_Path, if not, create a layer under the root dir
    if (typeof attr['CJ_Path'] != 'string') attr['CJ_Path'] = null
    if (attr['CJ_Path'] == null) {
      createLayer(currDir, attr)
      continue
    }

    // get split the CJ_PATH in to subDirNames
    // note that CJ_Path is a string of subDirNames separated by '|'
    // e.g. Heat exposure (2011)  |  Mean summer maximum temperature 2050s  |  Low emissions scenario
    // layer lives in the last subDirName

    let subDirNames = attr['CJ_Path'].split('|').map((n) => n.trim())
    let pathInfoIds = attr['CJ_Path_InfoId'].toString().split(',').map(s => s.trim())

    for (var i=0; i<subDirNames.length; i++) {
    // for (const subDirName of subDirNames) {
      // check if the subDirName is already in the currDir, if not, create one
      let idx = subDirIndex(currDir.children, subDirNames[i])
      // let idx = subDirIndex(currDir.children, subDirName)

      if (idx < 0) {
        let infoId = null
        try {
          infoId = parseInt(pathInfoIds[i])
          if (infoId == NaN || infoId < 0) infoId = null
        } catch (e){
          console.log(e.message)
        }

        createDir({parentDir: currDir, name: subDirNames[i], infoId})
        idx = subDirIndex(currDir.children, subDirNames[i])
      }

      // update the currDir as the subDir
      currDir = currDir.children[idx]

      if (subDirNames[i] === subDirNames[subDirNames.length - 1]) {
        // create a layer under the last SubDir
        createLayer(currDir, attr)
      }
    }

  }

  // return the rootDirs
  return rootDirs
}

export { getTreeviewItems }
