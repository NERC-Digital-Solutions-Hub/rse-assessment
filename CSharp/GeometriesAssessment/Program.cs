// See https://aka.ms/new-console-template for more information
using GeometriesAssessment;
using System.Diagnostics;
using System.Runtime.CompilerServices;

Console.WriteLine("========================================");
Console.WriteLine("Geometries Creator");
Console.WriteLine("----------------------------------------");
Console.WriteLine("Create Polygons1");

Stopwatch stopwatch = Stopwatch.StartNew();
GeometriesCreator.CreatePolygons1();
stopwatch.Stop();
Console.WriteLine($"`1. CreatePolygons1` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesCreator.CreatePolygons1();
stopwatch.Stop();
Console.WriteLine($"`2. CreatePolygons1` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesCreator.CreatePolygons1();
stopwatch.Stop();
Console.WriteLine($"`3. CreatePolygons1` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesCreator.CreatePolygons1();
stopwatch.Stop();
Console.WriteLine($"`4. CreatePolygons1` Execution Time: {stopwatch.ElapsedMilliseconds} ms");



Console.WriteLine("");
Console.WriteLine("========================================");
Console.WriteLine("Geometries Operator");
Console.WriteLine("----------------------------------------");
Console.WriteLine("Point1 Distances");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePoint1Distances();
stopwatch.Stop();
Console.WriteLine($"`1. CalculatePoint1Distances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePoint1Distances();
stopwatch.Stop();
Console.WriteLine($"`2. CalculatePoint1Distances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePoint1Distances();
stopwatch.Stop();
Console.WriteLine($"`3. CalculatePoint1Distances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePoint1Distances();
stopwatch.Stop();
Console.WriteLine($"`4. CalculatePoint1Distances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");


Console.WriteLine("");
Console.WriteLine("----------------------------------------");
Console.WriteLine("Polygon1 Centroid Distances");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePolygon1CentroidDistances();
stopwatch.Stop();
Console.WriteLine($"`1. CalculatePolygon1CentroidDistances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePolygon1CentroidDistances();
stopwatch.Stop();
Console.WriteLine($"`2. CalculatePolygon1CentroidDistances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePolygon1CentroidDistances();
stopwatch.Stop();
Console.WriteLine($"`3. CalculatePolygon1CentroidDistances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");

stopwatch = Stopwatch.StartNew();
GeometriesOperator.CalculatePolygon1CentroidDistances();
stopwatch.Stop();
Console.WriteLine($"`4. CalculatePolygon1CentroidDistances` Execution Time: {stopwatch.ElapsedMilliseconds} ms");


Console.ReadLine();
