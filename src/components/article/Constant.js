export const productData = [
  {
    articleId: "id5",
    articleName: "Jshell - Java Shell tool",
    artcleMetadata: {
      user: "saurabh prajajati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description: "",
    hasListView: true,
    ListView: [
      {
        header: "JShell Basics",
        description: `JShell is a Java shell, a command-line interface for running Java code snippets. It was introduced in Java 9 as a way to interactively evaluate small pieces of Java code and get immediate feedback. JShell is a REPL (Read-Evaluate-Print-Loop) tool, which means that it reads a piece of code, evaluates it, prints the result, and then goes back to the read-evaluate step, until you tell it to stop.
        To start JShell, you can use the jshell command in a terminal window. Once JShell is running, you can enter Java code snippets, and they will be immediately evaluated and the results will be printed to the console. You can also use commands to control the execution of the code snippets, such as /list to list all the code snippets that have been entered, /edit to edit a code snippet, or /exit to exit the JShell session.
        JShell can be a useful tool for quickly testing out code ideas, or for learning Java by experimenting with small code snippets. It can also be used to run simple scripts, by entering a series of code snippets that depend on each other and then using the /run command to execute all of them at once.`,
        hasExample: true,
        Example: [
          {
            problem: `JShell is a command-line tool introduced in Java 9 that allows you to execute small snippets of Java code and see the results immediately. It is an interactive tool that can be useful for learning Java, testing code, and exploring APIs.
            To start JShell, you can simply open a terminal or command prompt and type "jshell". This will launch the JShell REPL (read-eval-print loop), where you can enter Java code and see the results.
            One of the benefits of JShell is that you can try out small pieces of code without having to create a full Java program. For example, you can enter a simple expression like "2 + 2" and see the result immediately:`,
            code: `jshell> 2 + 2
            $1 ==> 4`,
            language: "JavaScript",
            output: "Hello moto.",
            solution: "",
          },
          {
            problem: `JShell is a command-line tool introduced in Java 9 that allows you to execute small snippets of Java code and see the results immediately. It is an interactive tool that can be useful for learning Java, testing code, and exploring APIs.
            To start JShell, you can simply open a terminal or command prompt and type "jshell". This will launch the JShell REPL (read-eval-print loop), where you can enter Java code and see the results.
            One of the benefits of JShell is that you can try out small pieces of code without having to create a full Java program. For example, you can enter a simple expression like "2 + 2" and see the result immediately:`,
            code: `jshell> 2 + 2
            $1 ==> 4`,
            language: "JavaScript",
            output: "Hello moto.",
            solution: "",
          },
          {
            problem: `JShell is a command-line tool introduced in Java 9 that allows you to execute small snippets of Java code and see the results immediately. It is an interactive tool that can be useful for learning Java, testing code, and exploring APIs.
            To start JShell, you can simply open a terminal or command prompt and type "jshell". This will launch the JShell REPL (read-eval-print loop), where you can enter Java code and see the results.
            One of the benefits of JShell is that you can try out small pieces of code without having to create a full Java program. For example, you can enter a simple expression like "2 + 2" and see the result immediately:`,
            code: `jshell> 2 + 2
            $1 ==> 4`,
            language: "JavaScript",
            output: "Hello moto.",
            solution: "",
          },
        ],
      },
    ],
    hasList: false,
    List: [],
    conclustion: `JShell also includes a number of built-in commands that allow you to explore the APIs of the Java platform. For example, you can use the "/list" command to list all the methods and variables you have defined, or the "/imports" command to see which packages are currently imported.
      Overall, JShell is a useful tool for learning and exploring Java, and can save you time by allowing you to quickly test code snippets without having to create a full Java program.`,
  },
  {
    articleId: "id3",
    articleName: "Java-8 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Java 8 was a major release of the Java programming language that introduced several new features and improvements. Some of the notable features introduced in Java 8 are",
    hasListView: true,
    ListView: [
      {
        header: "Lambda expressions",
        description:
          "Lambda functions, also known as anonymous functions, are a powerful feature introduced in Java 8 that allows you to write concise and simple code. They enable you to treat functionality as a method argument, or code as data.",
        hasExample: false,
        Example: [
          {
            problem:
              "To create a lambda function in Java, you start by specifying the input parameters within parentheses, followed by the arrow symbol ->, and then the body of the lambda function. Here's a simple example:",
            code: `(int x, int y) -> x + y
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "This lambda function takes two integers as input and returns the sum of the two integers. You can then assign this lambda function to a variable and use it like any other function:",
            code: `BiFunction<Integer, Integer, Integer> add = (x, y) -> x + y;
            int result = add.apply(1, 2);
          `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "You can also use lambda functions to replace anonymous inner classes. For example, suppose you have an interface Runnable with a single run() method. You can implement this interface using an anonymous inner class like this:",
            code: `Runnable r = new Runnable() {
              public void run() {
                System.out.println("Hello, World!");
              }
            };
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "You can achieve the same result using a lambda function like this:",
            code: `Runnable r = () -> System.out.println("Hello, World!")
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem: `Lambda functions can be particularly useful when used in conjunction with functional interfaces, which are interfaces with a single abstract method. Some examples of functional interfaces in the Java standard library include java.util.function.Function, java.util.function.Supplier, and java.util.function.Consumer.
            Here's an example of using a java.util.function.Function interface to create a lambda function that takes a string and returns its length:`,
            code: `Function<String, Integer> getLength = s -> s.length();
            int length = getLength.apply("hello");
            `,
            language: "java",
            output: "",
            solution: "",
          },
        ],
        conclustion:
          "Lambda functions are a convenient and concise way to write functional code in Java. They can help you write code that is easy to read, understand, and maintain.",
      },
      {
        header: "Streams",
        description:
          "These allow you to process data in a declarative way, allowing you to write more concise and functional-style code",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Optional",
        description:
          "This is a container object used to represent the absence of a value. It helps to prevent null reference exceptions by explicitly representing the absence of a value",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Default methods",
        description:
          "These allow you to add new methods to interfaces without breaking existing implementations.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Functional interfaces",
        description:
          "These are interfaces that have a single abstract method and are intended to be used with lambda expressions.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Method references",
        description:
          "These allow you to refer to a method by its name, rather than invoking it directly.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "New java.time package",
        description:
          "This package provides a comprehensive set of classes for date and time manipulation, including support for the ISO-8601 calendar system.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Nashorn JavaScript Engine",
        description:
          "This is a new JavaScript engine that allows you to run JavaScript code from within a Java program.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Concurrent Accumulators",
        description:
          "These are atomic variables that support efficient accumulation of values across threads.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
      {
        header: "Concurrent Maps",
        description:
          "These are maps that support atomic updates and are useful for building scalable and concurrent applications.",
        hasExample: false,
        Example: [],
        conclustion: "",
      },
    ],
    hasList: false,
    List: [],
    conclustion: "",
  },
  {
    articleId: "id6",
    articleName: "PDB File Format Explained",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Java 8 was a major release of the Java programming language that introduced several new features and improvements. Some of the notable features introduced in Java 8 are",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 1,
        text: "A .PDB file, also known as a Program Database file, is a file format used in debugging for holding debugging information about a program or application. The .PDB file is created when a program is compiled with debugging information enabled and is used by debuggers and other tools to help with analyzing and understanding the program's behavior during runtime.",
      },
      {
        id: 2,
        text: ".PDB files contain a variety of information that can be useful for debugging, including the program's symbols, line numbers, and source file information. Symbols are the names of variables, functions, and other program elements that can be used by the debugger to understand the program's behavior. Line numbers provide the debugger with information about which lines of code correspond to a given part of the program's binary. Source file information provides the location of the original source code that was used to create the program.",
      },
      {
        id: 3,
        text: "When a program is executed, the debug information in the PDB file can be used to match the program's binary code with the original source code, which makes it possible for the debugger to provide detailed information about the program's state and the variables used in each line. The debugger can also use the information in the PDB file to produce a call stack and to display the values of variables during debugging.",
      },
      {
        id: 4,
        text: "The information in a .PDB file can also be used to profile the performance of a program, as the file contains information about the program's memory layout and usage, as well as information about how the program uses the CPU. This allows developers to identify performance bottlenecks and optimize their code.",
      },
      {
        id: 5,
        text: "It's important to note that PDB files are not necessary for the runtime execution of the program, they are used only for the debugging and optimization process. During the release version of a program, it's not recommend to distribute the PDB files along with the program, as it can expose sensitive information about the code.",
      },
    ],
    conclustion:
      "In summary, .PDB files are an important tool in the debugging process and play a critical role in helping developers understand, optimize and fix their code. The information they contain can provide valuable insights into the behavior of a program and help developers identify and resolve issues more quickly.",
  },
  {
    articleId: "id10",
    articleName: "Streams API",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Streams in Java are a way to process large amounts of data in a stream-like fashion, allowing for efficient and memory-friendly processing. They are a part of the Java 8 Streams API, which provides a functional and declarative approach to data processing.",
    hasListView: true,
    ListView: [
      {
        header: "Lambda expressions",
        description: "",
        hasExample: true,
        Example: [
          {
            problem:
              "Here is an example of using a Stream to filter and print out the names of all employees who have a salary greater than $50,000:",
            code: `List<Employee> employees = // ...
            employees.stream()
                .filter(e -> e.getSalary() > 50000)
                .map(Employee::getName)
                .forEach(System.out::println);
            `,
            language: "java",
            output: "",
            solution: `n this example, employees.stream() creates a Stream from the employees list. The filter method filters the stream to include only employees with a salary greater than $50,000. The map method then extracts the name of each employee, and the forEach method is used to print out the names of the filtered employees.`,
          },
          {
            problem:
              "It's also possible to use parallel streams that allow you to perform operations in parallel. This can be useful when working with large data sets to improve performance.",
            code: `List<Employee> employees = // ...
            employees.parallelStream()
                .filter(e -> e.getSalary() > 50000)
                .map(Employee::getName)
                .forEach(System.out::println);
            `,
            language: "java",
            output: "",
            solution:
              "It's important to note that parallel streams are not guaranteed to be executed in any particular order, and the order of the output may be different than the input order.",
          },
        ],
        conclustion:
          " Streams in Java provide a powerful and convenient way to work with large data sets, and can greatly simplify data processing tasks. With the use of functional operations like filter, map, and reduce, you can write concise and expressive code that is easy to understand and maintain.",
      },
    ],
    hasList: false,
    List: [],
    conclustion: "",
  },
  {
    articleId: "id11",
    articleName: "Optional",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "This is a container object used to represent the absence of a value. It helps to prevent null reference exceptions by explicitly representing the absence of a value" +
      "In Java, Optional is a container object used to represent the presence or absence of a value. It was introduced in Java 8 as a way to improve the handling of null values and to prevent common null pointer exceptions.",
    hasListView: true,
    ListView: [
      {
        header: "Lambda expressions",
        description: "",
        hasExample: true,
        Example: [
          {
            problem:
              "Optional is a generic class, and it's often used to wrap a value that may or may not be present. For example, the following code creates an Optional object that contains a value of type Integer:",
            code: `Optional<Integer> optional = Optional.of(5);
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "You can also create an empty Optional object that represents the absence of a value:",
            code: `Optional<Integer> emptyOptional = Optional.empty();
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem: "You can also create an optional from a nullable value",
            code: `Integer value = null;
            Optional<Integer> fromNullable = Optional.ofNullable(value);
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "You can use various methods to check if the Optional has a value or not such as :",
            code: `optional.isPresent();  // check if it has a value
            optional.get();  // get the value if it has
            optional.orElse(0); // get the value if it has else return 0
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "Here is an example of using Optional to handle a potentially null value:",
            code: `class Person {
              private String name;
              public String getName() { return name; }
          }
          
          Person p = new Person();
          
          Optional<String> name = Optional.ofNullable(p.getName());
          
          if (name.isPresent()) {
              System.out.println("Name: " + name.get());
          } else {
              System.out.println("Name not found");
          }
          `,
            language: "java",
            output: "",
            solution:
              "In this example, the getName method of the Person class may return a null value. By wrapping the result in an Optional object, we can use the isPresent method to check if a name is present, and the get method to retrieve the name if it is. This can help to prevent null pointer exceptions and make the code more readable.",
          },
        ],
        conclustion:
          "Overall, Optional is a useful tool for dealing with the presence or absence of values in a safe and readable way. It can help to improve the robustness and maintainability of your code by making it clear when a value may be absent, and by providing a convenient way to handle such cases.",
      },
    ],
    hasList: false,
    List: [],
    conclustion: "",
  },
  {
    articleId: "id12",
    articleName: "Default methods",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "These allow you to add new methods to interfaces without breaking existing implementations." +
      "In Java, default methods (also known as defender methods or virtual extension methods) are methods that are defined in an interface with a default implementation. They were introduced in Java 8 as a way to add new functionality to existing interfaces without breaking existing code that implements those interfaces.",
    hasListView: true,
    ListView: [
      {
        header: "Lambda expressions",
        description: "",
        hasExample: true,
        Example: [
          {
            problem:
              "A default method is defined in an interface with the default keyword, followed by the method signature and implementation. Here is an example of a default method called getDescription that is added to the Shape interface:",
            code: `interface Shape {
              double getArea();
              default String getDescription() {
                  return "This is a shape with an area of " + getArea();
              }
          }
          `,
            language: "java",
            output: "",
            solution:
              "Classes that implement the Shape interface can choose to override the default implementation of the getDescription method if they want to provide a different behavior.",
          },
          {
            problem:
              "Here is an example of a Rectangle class that implements the Shape interface and overrides the getDescription method:",
            code: `class Rectangle implements Shape {
              private double width;
              private double height;
          
              public Rectangle(double width, double height) {
                  this.width = width;
                  this.height = height;
              }
          
              @Override
              public double getArea() {
                  return width * height;
              }
          
              @Override
              public String getDescription() {
                  return "This is a rectangle with width " + width + " and height " + height;
              }
          }
          `,
            language: "java",
            output: "",
            solution:
              "In this example, the Rectangle class implements the Shape interface, and provides its own implementation of the getDescription method. The getArea method is inherited from the Shape interface, and its implementation is not overridden.",
          },
          {
            problem:
              "When you create an object of the Rectangle class and call the getDescription method, the overridden implementation from the Rectangle class is used.",
            code: `Rectangle rectangle = new Rectangle(5,10);
            System.out.println(rectangle.getDescription()); // Output : This is a rectangle with width 5 and height 10
            `,
            language: "java",
            output: "",
            solution: "",
          },
          {
            problem:
              "On the other hand, if you create an instance of an interface, you will have to use the default method of the interface",
            code: `Shape shape = new Rectangle(5,10);
            System.out.println(shape.getDescription()); // Output : This is a shape with an area of 50.0
            `,
            language: "java",
            output: "",
            solution: "",
          },
        ],
        conclustion:
          "In summary, default methods in Java allow interfaces to provide default implementations for methods. This allows developers to add new functionality to existing interfaces without breaking existing code. Classes that implement these interfaces can choose to override the default implementation if they want to provide a different behavior.",
      },
    ],
    hasList: false,
    List: [],
    conclustion: "",
  },
];

export const TreeviewData = [
  {
    id: 1,
    label: "Java 8 Feature ",
    children: [
      { id: 2, label: "Interface" },
      { id: 3, label: "Default Method" },
    ],
  },
  {
    id: 4,
    label: "Java 9 Feature",
    children: [
      {
        id: 5,
        label: "JShell - A Java Tool",
      },
      { id: 6, label: "Abstract Implementation" },
    ],
  },
];
