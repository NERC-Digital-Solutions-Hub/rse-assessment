**NERC Digital Solutions Programme RSE Assessment**

The assessment consists of **three assignments**. Please read the information below carefully so that you can determine which assignments to complete.

1. **CSharp Assignment**: A C# project included in this repository is provided for this task. Returning this assignment is **obligatory if you have listed C# expertise on your CV**.
2. **JavaScript Assignment**: This assignment involves the critical evaluation of two JavaScript code files. It is **compulsory to submit this assignment if JavaScript is mentioned in your CV**.
3. **Python Assignment**: This assignment is intended for candidates who have exclusively listed Python in their CV and lack either C# and/or JavaScript skills. Those who have submitted both C# and JavaScript assignments may also choose to submit the Python assignment voluntarily; however, it is not mandatory.

You can clone the repository or download a zip with the code from GitHub.

Please review the assessment requirements carefully. The tasks have been intentionally designed to be straightforward while still providing ample opportunity for you to showcase your software engineering knowledge. To proceed to the interview stage, you should submit the completed tasks. However, if meeting the deadline proves challenging, please contact us via email to discuss possible solutions. If you believe your submission is incomplete, feel free to submit it with a note explaining what remains unfinished and how you would approach completing these elements given more time.

**The deadline for it is on Sunday, 9th March 2025, at 23:00 GMT (London Time).**

You should upload your code and your written assessment to a file-sharing service of your choice (like DropBox or Google Drive) to avoid the zipped code being blocked by our e-mail servers.
Please send an e-mail including the URL to the shared zip file to **ALL the following addresses:**

richard.kingston@manchester.ac.uk

hala.jundi@manchester.ac.uk

vasileios.vlastaras@manchester.ac.uk

You will receive a confirmation email acknowledging the receipt of your code assessment. Should we encounter any issues accessing or downloading your submission, we will contact you to resolve the matter. Therefore, please check your email regularly until you receive our confirmation.

If by any chance we do not receive your assessment, make sure you have it available to upload on the day of your interview. 

**1. CSharp Assignment: Execution time optimisation**

The Visual Studio Solution named **'RSE'** encompasses a console project titled **'GeometriesAssessment'**. This project comprises two foundational classes, **'Point1'** and **'Polygon1'**, serving as templates for defining Points and Polygons, respectively. For simplification, **'Polygon1'** is designated as a **convex** polygon, circumventing the complexities associated with supporting polygonal holes or multiple shells.

The console application's code resides within **'Program.cs'**. Executing this program unveils a series of messages detailing the duration required for the program to perform its operations, which include generating points and polygons, as well as computing distances. To assess the program's performance, a total of 10 million calculations and a total of 50 million instance creations are performed.

Your task is to **identify and implement ways to enhance the program's execution time**. To accomplish this, you are expected to:

1. Initially, conduct a comprehensive review of the program's code to **pinpoint any potential issues or deficiencies**. Should any be found, **promptly address and rectify them**. Make sure you explain what you corrected in the code and present your interventions in a short document which will complement the code assessment.
2. The program currently lacks comments. Please carefully review the code and provide **XML docstrings to clearly explain the purpose of each method, class,** etc. The comments should be added after you make any corrections or modifications to the code.
3. Utilize your expertise in C# to refine the execution of identified operations, aiming for **improved efficiency**.
4. Demonstrate **multiple strategies** to decrease the program's execution time, leveraging your knowledge and skills.
5. Recognize that each strategy may offer its own set of benefits and limitations, and there might not be a one-size-fits-all solution to optimize execution time. Please provide insights into your chosen approaches, outlining their advantages and disadvantages.
6. C# offers multiple options for defining types. Please create **your custom types** to represent points and polygons, aiming to enhance execution time. Name these new types distinctly, such as 'Point2', 'Point3', 'Polygon2', 'Polygon3', etc., to differentiate them from existing ones.
7. C# features various techniques for **efficient memory management**. You are encouraged to explore and apply as many of these techniques as deemed appropriate in your enhancements.
8. C# includes several methods to **accelerate execution time and computation efficiency**. Could you demonstrate techniques to reduce the program’s execution time?
9. The principles of Object-Oriented Programming (OOP) in C# offer avenues for code development. Consider whether OOP can aid in reducing execution time or if it potentially complicates and slows down the process. Please either implement OOP strategies or consciously choose not to, providing your rationale for either decision.
10. For each improvement you attempt, discuss the **positive and negative aspects**. This discussion will help us understand the trade-offs involved in optimizing execution time.

You are granted complete freedom in your approach, including creating custom types, employing alternative collection types, or any other objects from the .NET library that could improve execution time. However, **using third-party libraries or GIS open-source libraries is strictly prohibited.**

**2. JavaScript Assignment: Critically evaluate code files**

The **TreeviewStore.js** and **retrieveTreeviewItems.js** files are part of the larger codebase of a web Single Page Application (SPA) that features, among other components, a treeview to display map layers organized in a hierarchical structure. This treeview allows users to manage layers in a map through various tree items grouped within folder items.
Upon reviewing the refactoring process of the old codebase, multiple issues were noted in these files. The goal is to understand the original developer's intentions, evaluate the code for its adherence to best practices, and suggest improvements.

**Assessment Criteria:**

- **Variable Naming Conventions:** Assess whether the variable names are descriptive, consistent, and follow a standard convention that enhances readability and maintainability.
- **Code Clarity and Complexity:** Evaluate the code for its simplicity, readability, and structure. High complexity and lack of clarity can significantly hinder future maintenance and scalability.
- **Object-Oriented Approaches:** Identify the use of object-oriented programming principles such as encapsulation, inheritance, and polymorphism. These principles can help organize code more efficiently and make it more modular and reusable.
- **Good Code Practices:** Look for the implementation of good coding practices and principles, along with proper error handling and comments/documentation where necessary.

**Specific Points of Interest:**

- **Function 'getTreeviewItemInfo' in TreeviewStore:** Please assess this function and write your thoughts about it.
- **Definition of Tree Item Types:** Attempt to locate where the folder tree items and layer tree items are defined within the code. Understanding these definitions is crucial for assessing the overall structure and functionality of the treeview component. What do you think about the way they are defined?
- **Service for Retrieving Tree Item Definitions:** Identify the service used to fetch the definitions of tree items. Is this service still used in the code, and if not, what is its replacement?
- **Tree Items Architecture Based on JSON Information:** Evaluate how the tree items are structured and instantiated based on the JSON data retrieved from the service endpoint. Do you think items could be architected in some other way?

**Improvement Suggestions:**

Upon evaluating these aspects, describe potential improvements to the code. These could involve refactoring for better clarity, adopting more effective object-oriented practices, simplifying complex functions, improving variable naming for better understanding, or optimizing the interaction with external services.
While actual code refactoring is not required, presenting a clear, structured critique and offering concrete suggestions for enhancements will be valuable. If inspired to propose specific code changes, highlighting how these changes could be implemented would further demonstrate an understanding of good software development practices and contribute to the application's overall improvement.

**3. Python Assignment: Design Pattern in GIS Data Processing**

**Objective:** Implement a Python console application that processes a set of spatial data (e.g., a list of geographic coordinates, a list of polygons - it can read from a shapefile or from a JSON file) and applies a design pattern (e.g., Factory Method) to create different types of spatial analyses (e.g., centroid calculation, bounding box creation).

**Requirements:**

- Allow the user to select the type of spatial analysis via command-line arguments or user input.
- Use the Factory Method pattern to instantiate the appropriate analysis class based on the user's selection.
- Demonstrate proper use of abstractions using the ABC module to define and implement spatial analysis operations.
