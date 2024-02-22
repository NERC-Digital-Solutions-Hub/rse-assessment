using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeometriesAssessment.Geometries {

  /// <summary>
  /// 
  /// </summary>
  internal class Point1 {

    /// <summary>
    /// 
    /// </summary>
    public double X {
      get; set;
    }

    /// <summary>
    /// 
    /// </summary>
    public double Y {
      get; set;
    }

    /// <summary>
    /// 
    /// </summary>
    public Point1() {
      X = 0;
      Y = 0;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="x"></param>
    /// <param name="y"></param>
    public Point1(double x, double y) {
      X = x;
      Y = y;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="point"></param>
    public Point1(Point1 point) {
      X = point.X;
      Y = point.Y;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="other"></param>
    /// <returns></returns>
    public double DistanceTo(Point1 other) {
      double dx = X - other.X;
      double dy = Y - other.Y;
      return Math.Sqrt(dx * dx + dy * dy);
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="x"></param>
    /// <param name="y"></param>
    /// <returns></returns>
    public double DistanceTo(double x, double y) {
      double dx = X - x;
      double dy = Y - y;
      return Math.Sqrt(dx * dx + dy * dy);
    }

    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public override string ToString() {
      return string.Format("({0}, {1})", X, Y);
    }

  }

}
