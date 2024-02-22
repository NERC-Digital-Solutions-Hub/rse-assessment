using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeometriesAssessment.Geometries {

  /// <summary>
  /// 
  /// </summary>
  internal class Polygon1 {

    /// <summary>
    /// 
    /// </summary>
    public List<Point1> Points {
      get; set;
    }

    /// <summary>
    /// 
    /// </summary>
    public Polygon1() {
      Points = [];
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="capacity"></param>
    public Polygon1(int capacity) {
      Points = new List<Point1>(capacity);
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="points"></param>
    public Polygon1(List<Point1> points) {
      Points = points;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="points"></param>
    public Polygon1(IEnumerable<Point1> points) {
      Points = points.ToList();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="points"></param>
    public Polygon1(IQueryable<Point1> points) {
      Points = [.. points];
    }

    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    /// <exception cref="InvalidOperationException"></exception>
    public Point1 GetCentroid() {
      if (Points == null || Points.Count == 0) {
        throw new InvalidOperationException("Cannot calculate centroid with no points.");
      }

      double sumX = 0;
      double sumY = 0;

      foreach (Point1 point in Points) {
        sumX += point.X;
        sumY += point.Y;
      }

      return new Point1(sumX / Points.Count, sumY / Points.Count);
    }

  }

}
