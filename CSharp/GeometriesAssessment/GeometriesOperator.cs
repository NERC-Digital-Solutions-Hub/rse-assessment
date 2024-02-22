using GeometriesAssessment.Geometries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeometriesAssessment {

  /// <summary>
  /// 
  /// </summary>
  internal class GeometriesOperator {

    private static readonly int total = 10_000_000;

    /// <summary>
    /// 
    /// </summary>
    public static void CalculatePoint1Distances() {

      Point1 point = new(383_997d, 398_258d);
      Point1 targetPoint = new (530_029d, 180_380d);

      for (int i = 0; i < total; i++) {
        double distance = point.DistanceTo(targetPoint);
      }

    }

    /// <summary>
    /// 
    /// </summary>
    public static void CalculatePolygon1CentroidDistances() {

      Polygon1 polygon = new([
        new(383_997d, 398_258d),
        new(384_097d, 398_258d),
        new(384_097d, 398_158d),
        new(383_997d, 398_158d),
        new(383_997d, 398_258d)
      ]);

      Polygon1 targetPolygon = new([
        new(530_029d, 180_380d),
        new(530_129d, 180_380d),
        new(530_129d, 180_280d),
        new(530_029d, 180_280d),
        new(530_029d, 180_380d) 
      ]);

      for (int i = 0; i < total; i++) {
        double distance = polygon.GetCentroid().DistanceTo(targetPolygon.GetCentroid());
      }

    }
    
  }

}
