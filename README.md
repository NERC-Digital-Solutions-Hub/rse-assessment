**NERC Digital Solutions Programme RSE Assessment**

The code files for your assessment can be found in:

https://github.com/NERC-Digital-Solutions-Hub/rse-assessment

Feel free to clone the repository or download a zip with the code from GitHub.

There are three assessments, one named ‘CSharp’ with a C# project, another named 'JavaScript' which contains two JavaScript code files to evaluate and a third one called ‘Python’. **You only need to complete TWO out of the three assessments which should correspond to your programming skills you identified in your CV**. For those who identified C# as one of the programming skills the C# assignment is **mandatory**. Then you should complete one other of the remaining tasks. 

Please read the requirements of the assessment carefully. The tasks were designed to be as simple as possible but at the same time to allow you to demonstrate as much as possible of your knowledge in software engineering. You do not need to complete the tasks, given the short preparation time. However, it would be good to attempt the assessment and feel free to return it to us even if it is incomplete. If you need any further clarification on the tasks you can contact vasileios.vlastaras@manchester.ac.uk

**The deadline for it is on Sunday 25/02/2024 - 18:00 GMT (London Time).**

You should upload your code and your written assessment in a file sharing service of your choice (like DropBox, Google Drive) to avoid the zipped code being blocked by our e-mail servers.

Please send an e-mail including the URL to the shared zip file to the following addresses:

richard.kingston@manchester.ac.uk

jennifer.mckillop@manchester.ac.uk

vasileios.vlastaras@manchester.ac.uk

If by any chance we do not receive your assessment, make sure you have it available to upload on the day of your interview.

**1. CSharp**

The Visual Studio Solution named 'RSE' encompasses a console project titled 'GeometriesAssessment'. This project comprises two foundational classes, 'Point1' and 'Polygon1', serving as templates for defining Points and Polygons, respectively. For the sake of simplification, 'Polygon1' is designated as a single outer shell polygon, circumventing the complexities associated with supporting polygonal holes or multiple shells.

Within 'program.cs', the console application's code resides. Executing this program unveils a series of messages detailing the duration required for the program to perform its operations, which include generating points and polygons, as well as computing distances. A total of 50 million calculations or generations are performed to allow assessing performance.

Your task involves a thorough examination of the program's code to identify and rectify any issues or shortcomings before attempting the **improvement of the program**. You are encouraged to leverage your proficiency in C# to enhance the implementation of the discovered operations. You are encouraged to showcase more than one approach to **reduce the execution time of the program**. It's understood that different approaches may present various advantages and drawbacks, and no singular method may optimize execution time universally. Please include all your approaches and describe the pros and cons. Should the creation of your own custom types be necessary, you may designate them as 'Point2', 'Point3', 'Polygon2', 'Polygon3', etc., to distinguish them from existing types.

You are granted complete freedom in your approach, including the creation of custom types, the employment of alternative collection types, or any other components from the .NET library that could improve execution time. However, the use of third-party libraries or GIS open-source libraries is strictly prohibited.

**2. JavaScript**

The TreeviewStore.js and retrieveTreeviewItems.js files are part of the larger codebase of a web Single Page Application (SPA) that features, among other components, a treeview to display map layers organized in a hierarchical structure. This treeview allows users to manage layers in a map through various tree items grouped within folder items.
Upon reviewing the refactoring process of the old codebase, these files were noted to have multiple issues. The goal is to understand the original developer's intentions, evaluate the code for its adherence to best practices, and suggest improvements.

**Assessment Criteria:**

Variable Naming Conventions: Assess whether the variable names are descriptive, consistent, and follow a standard convention that enhances readability and maintainability.
Code Clarity and Complexity: Evaluate the code for its simplicity, readability, and structure. High complexity and lack of clarity can significantly hinder future maintenance and scalability.

Object-Oriented Approaches: Identify the use of object-oriented programming principles such as encapsulation, inheritance, and polymorphism. These principles can help in organizing code more efficiently and making it more modular and reusable.
Good Code Practices: Look for the implementation of good coding practices, principles, along with proper error handling and comments/documentation where necessary.

**Specific Points of Interest:**

Function getTreeviewItemInfo in TreeviewStore: What do you think about this function?
Definition of Tree Item Types: Attempt to locate where the folder tree items and layer tree items are defined within the code. Understanding these definitions is crucial for assessing the overall structure and functionality of the treeview component.
Service for Retrieving Tree Item Definitions: Identify the service used to fetch the definitions of tree items. Is this service still used in the code?
Tree Items Architecture Based on JSON Information: Evaluate how the tree items are structured and instantiated based on the JSON data retrieved from the service endpoint. Do you think items could be architected in some other way?

**Improvement Suggestions:**

Upon evaluating these aspects, describe potential improvements to the code. These could involve refactoring for better clarity, adopting more effective object-oriented practices, simplifying complex functions, improving variable naming for better understanding, or optimizing the interaction with external services.
While actual code refactoring is not required, presenting a clear, structured critique and offering concrete suggestions for enhancements will be valuable. If inspired to propose specific code changes, highlighting how these changes could be implemented would further demonstrate an understanding of good software development practices and contribute to the application's overall improvement.

**3. Python Assignment: Design Pattern in GIS Data Processing**

Objective: Implement a Python console application that processes a set of spatial data (e.g., a list of geographic coordinates, a list of polygons - it can read from a shapefile or from a JSON file) and applies a design pattern (e.g., Factory Method) to create different types of spatial analyses (e.g., centroid calculation, bounding box creation).

**Requirements:**

- Allow the user to select the type of spatial analysis via command-line arguments or user input.

- Use the Factory Method pattern to instantiate the appropriate analysis class based on the user's selection.

- Demonstrate proper use of abstractions using the ABC module to define and implement spatial analysis operations.
