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
  internal static class GeometriesCreator {

    private static readonly int total = 50_000_000;

    /// <summary>
    /// 
    /// </summary>
    internal static void CreatePolygons1() {

      for (int i = 0; i < total; i++) {
        List<Point1> points = new(total) {
          new Point1(383_997d, 398_258d),
          new Point1(384_097d, 398_258d),
          new Point1(384_097d, 398_158d),
          new Point1(383_997d, 398_158d),
          new Point1(383_997d, 398_258d)
        };

        Polygon1 polygon = new(points);
      }

    }

  }

}
