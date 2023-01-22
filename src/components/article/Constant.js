export const productData = [
  {
    articleId: "id5",
    articleName: "Jshell - Java Shell tool",
    artcleMetadata: {
      user: "saurabh prajajati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description: `JShell is a Java shell, a command-line interface for running Java code snippets. It was introduced in Java 9 as a way to interactively evaluate small pieces of Java code and get immediate feedback. JShell is a REPL (Read-Evaluate-Print-Loop) tool, which means that it reads a piece of code, evaluates it, prints the result, and then goes back to the read-evaluate step, until you tell it to stop.
    To start JShell, you can use the jshell command in a terminal window. Once JShell is running, you can enter Java code snippets, and they will be immediately evaluated and the results will be printed to the console. You can also use commands to control the execution of the code snippets, such as /list to list all the code snippets that have been entered, /edit to edit a code snippet, or /exit to exit the JShell session.
    JShell can be a useful tool for quickly testing out code ideas, or for learning Java by experimenting with small code snippets. It can also be used to run simple scripts, by entering a series of code snippets that depend on each other and then using the /run command to execute all of them at once.`,
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 18,
        text: `JShell is a command-line tool introduced in Java 9 that allows you to execute small snippets of Java code and see the results immediately. It is an interactive tool that can be useful for learning Java, testing code, and exploring APIs.
        To start JShell, you can simply open a terminal or command prompt and type "jshell". This will launch the JShell REPL (read-eval-print loop), where you can enter Java code and see the results.
        One of the benefits of JShell is that you can try out small pieces of code without having to create a full Java program. For example, you can enter a simple expression like "2 + 2" and see the result immediately:`,
        hasExample: true,
        example: {
          code: `jshell> 2 + 2
        $1 ==> 4`,
          language: "JavaScript",
          output: "Hello moto.",
        },
      },
      {
        id: 19,
        text: `JShell is a command-line tool introduced in Java 9 that allows you to execute small snippets of Java code and see the results immediately. It is an interactive tool that can be useful for learning Java, testing code, and exploring APIs.
        To start JShell, you can simply open a terminal or command prompt and type "jshell". This will launch the JShell REPL (read-eval-print loop), where you can enter Java code and see the results.
        One of the benefits of JShell is that you can try out small pieces of code without having to create a full Java program. For example, you can enter a simple expression like "2 + 2" and see the result immediately:`,
        hasExample: true,
        example: {
          code: `jshell> 2 + 2
        $1 ==> 4`,
          language: "JavaScript",
          output: "Hello moto.",
        },
      },
      {
        id: 20,
        text: `JShell is a command-line tool introduced in Java 9 that allows you to execute small snippets of Java code and see the results immediately. It is an interactive tool that can be useful for learning Java, testing code, and exploring APIs.
        To start JShell, you can simply open a terminal or command prompt and type "jshell". This will launch the JShell REPL (read-eval-print loop), where you can enter Java code and see the results.
        One of the benefits of JShell is that you can try out small pieces of code without having to create a full Java program. For example, you can enter a simple expression like "2 + 2" and see the result immediately:`,
        hasExample: true,
        example: {
          code: `jshell> 2 + 2
        $1 ==> 4`,
          language: "JavaScript",
          output: "Hello moto.",
        },
      },
    ],
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
      },
      {
        header: "Streams",
        description:
          "These allow you to process data in a declarative way, allowing you to write more concise and functional-style code",
      },
      {
        header: "Optional",
        description:
          "This is a container object used to represent the absence of a value. It helps to prevent null reference exceptions by explicitly representing the absence of a value",
      },
      {
        header: "Default methods",
        description:
          "These allow you to add new methods to interfaces without breaking existing implementations.",
      },
      {
        header: "Functional interfaces",
        description:
          "These are interfaces that have a single abstract method and are intended to be used with lambda expressions.",
      },
      {
        header: "Method references",
        description:
          "These allow you to refer to a method by its name, rather than invoking it directly.",
      },
      {
        header: "New java.time package",
        description:
          "This package provides a comprehensive set of classes for date and time manipulation, including support for the ISO-8601 calendar system.",
      },
      {
        header: "Nashorn JavaScript Engine",
        description:
          "This is a new JavaScript engine that allows you to run JavaScript code from within a Java program.",
      },
      {
        header: "Concurrent Accumulators",
        description:
          "These are atomic variables that support efficient accumulation of values across threads.",
      },
      {
        header: "Concurrent Maps",
        description:
          "These are maps that support atomic updates and are useful for building scalable and concurrent applications.",
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
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 10,
        text: "Here is an example of using a Stream to filter and print out the names of all employees who have a salary greater than $50,000:",
        hasExample: true,
        example: {
          code: `List<Employee> employees = // ...
        employees.stream()
            .filter(e -> e.getSalary() > 50000)
            .map(Employee::getName)
            .forEach(System.out::println);
        `,
          language: "java",
          output: `n this example, employees.stream() creates a Stream from the employees list. The filter method filters the stream to include only employees with a salary greater than $50,000. The map method then extracts the name of each employee, and the forEach method is used to print out the names of the filtered employees.`,
        },
      },
      {
        id: 11,
        text: "It's also possible to use parallel streams that allow you to perform operations in parallel. This can be useful when working with large data sets to improve performance.",
        hasExample: true,
        example: {
          code: `List<Employee> employees = // ...
        employees.parallelStream()
            .filter(e -> e.getSalary() > 50000)
            .map(Employee::getName)
            .forEach(System.out::println);
        `,
          language: "java",
          output:
            "It's important to note that parallel streams are not guaranteed to be executed in any particular order, and the order of the output may be different than the input order.",
        },
      },
    ],
    conclustion:
      "Streams in Java provide a powerful and convenient way to work with large data sets, and can greatly simplify data processing tasks. With the use of functional operations like filter, map, and reduce, you can write concise and expressive code that is easy to understand and maintain.",
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
      "This is a container object used to represent the absence of a value. It helps to prevent null reference exceptions by explicitly representing the absence of a value",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 12,
        text: "In Java, Optional is a container object used to represent the presence or absence of a value. It was introduced in Java 8 as a way to improve the handling of null values and to prevent common null pointer exceptions.",
        hasExample: false,
        example: {},
      },
      {
        id: 13,
        text: "Optional is a generic class, and it's often used to wrap a value that may or may not be present. For example, the following code creates an Optional object that contains a value of type Integer:",
        hasExample: true,
        example: {
          code: `Optional<Integer> optional = Optional.of(5);
        `,
          language: "java",
          output: "",
        },
      },
      {
        id: 14,
        text: "You can also create an empty Optional object that represents the absence of a value:",
        hasExample: true,
        example: {
          code: `Optional<Integer> emptyOptional = Optional.empty();
        `,
          language: "java",
          output: "",
        },
      },
      {
        id: 15,
        text: "You can also create an optional from a nullable value",
        hasExample: true,
        example: {
          code: `Integer value = null;
        Optional<Integer> fromNullable = Optional.ofNullable(value);
        `,
          language: "java",
          output: "",
        },
      },
      {
        id: 16,
        text: "You can use various methods to check if the Optional has a value or not such as :",
        hasExample: true,
        example: {
          code: `optional.isPresent();  // check if it has a value
        optional.get();  // get the value if it has
        optional.orElse(0); // get the value if it has else return 0
        `,
          language: "java",
          output: "",
        },
      },
      {
        id: 17,
        text: "Here is an example of using Optional to handle a potentially null value:",
        hasExample: true,
        example: {
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
          output:
            "In this example, the getName method of the Person class may return a null value. By wrapping the result in an Optional object, we can use the isPresent method to check if a name is present, and the get method to retrieve the name if it is. This can help to prevent null pointer exceptions and make the code more readable.",
        },
      },
    ],
    conclustion:
      "Overall, Optional is a useful tool for dealing with the presence or absence of values in a safe and readable way. It can help to improve the robustness and maintainability of your code by making it clear when a value may be absent, and by providing a convenient way to handle such cases.",
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
      "These allow you to add new methods to interfaces without breaking existing implementations.",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 16,
        text: "In Java, default methods (also known as defender methods or virtual extension methods) are methods that are defined in an interface with a default implementation. They were introduced in Java 8 as a way to add new functionality to existing interfaces without breaking existing code that implements those interfaces.",
        hasExample: false,
        example: {},
      },
      {
        id: 17,
        text: "A default method is defined in an interface with the default keyword, followed by the method signature and implementation. Here is an example of a default method called getDescription that is added to the Shape interface:",
        hasExample: true,
        example: {
          code: `interface Shape {
          double getArea();
          default String getDescription() {
              return "This is a shape with an area of " + getArea();
          }
      }
      `,
          language: "java",
          output:
            "Classes that implement the Shape interface can choose to override the default implementation of the getDescription method if they want to provide a different behavior.",
        },
      },
      {
        id: 18,
        text: "Here is an example of a Rectangle class that implements the Shape interface and overrides the getDescription method:",
        hasExample: true,
        example: {
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
          output:
            "In this example, the Rectangle class implements the Shape interface, and provides its own implementation of the getDescription method. The getArea method is inherited from the Shape interface, and its implementation is not overridden.",
        },
      },
      {
        id: 19,
        text: "When you create an object of the Rectangle class and call the getDescription method, the overridden implementation from the Rectangle class is used.",
        hasExample: true,
        example: {
          code: `Rectangle rectangle = new Rectangle(5,10);
        System.out.println(rectangle.getDescription()); // Output : This is a rectangle with width 5 and height 10
        `,
          language: "java",
          output: "",
        },
      },
      {
        id: 20,
        text: "On the other hand, if you create an instance of an interface, you will have to use the default method of the interface",
        hasExample: true,
        example: {
          code: `Shape shape = new Rectangle(5,10);
        System.out.println(shape.getDescription()); // Output : This is a shape with an area of 50.0
        `,
          language: "java",
          output: "",
        },
      },
    ],
    conclustion:
      "In summary, default methods in Java allow interfaces to provide default implementations for methods. This allows developers to add new functionality to existing interfaces without breaking existing code. Classes that implement these interfaces can choose to override the default implementation if they want to provide a different behavior.",
  },
  {
    articleId: "id13",
    articleName: "Functional interfaces",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "These are interfaces that have a single abstract method and are intended to be used with lambda expressions",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 9,
        text: "Functional interfaces are interfaces in Java that have a single abstract method. They are used as the basis for functional programming in Java 8 and later versions.",
      },
      {
        id: 10,
        text: "An example of a functional interface is the java.util.function.Function interface, which represents a function that takes an argument and returns a result. The Function interface has a single abstract method, apply(T t), which takes an argument of type T and returns a result of type R.",
      },
      {
        id: 11,
        text: "Here is an example of how to use the Function interface to create a function that takes a string and returns its length:",
        hasExample: true,
        example: {
          code: `import java.util.function.Function;

        public class Main {
          public static void main(String[] args) {
            Function<String, Integer> stringLengthFunction = s -> s.length();
            System.out.println(stringLengthFunction.apply("Hello, World!"));  // output: 13
          }
        }
        `,
          language: "java",
          output: `In this example, the stringLengthFunction variable is assigned a lambda expression that takes a string s and returns its length. The apply method is then called on the stringLengthFunction variable, passing in the string "Hello, World!", and the output is the length of the string 13.`,
        },
      },
    ],
    conclustion: "",
  },
  {
    articleId: "id14",
    articleName: "Method references",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "These allow you to refer to a method by its name, rather than invoking it directly",
    hasListView: true,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 7,
        text: "Method references in Java are a concise way to refer to a method without actually invoking it. They are used in conjunction with functional interfaces and lambda expressions to make code more readable and maintainable. Method references are similar to lambda expressions, but they are more specific in that they refer to an existing method rather than creating a new one",
      },
      {
        id: 8,
        text: "Here is an example of how to use a method reference to a static method:",
        hasExample: true,
        example: {
          problem: "",
          code: `import java.util.function.Function;

        public class Main {
          public static void main(String[] args) {
            Function<Integer, Integer> squareFunction = Main::square;
            System.out.println(squareFunction.apply(5));  // output: 25
          }
        
          public static int square(int x) {
            return x * x;
          }
        }
        `,
          language: "java",
          output: `In this example, the squareFunction variable is assigned a method reference to the square method. The apply method is then called on the squareFunction variable, passing in the integer 5, and the output is the square of 5, 25.`,
        },
      },
      {
        id: 9,
        text: "Another example is using a method reference to an instance method of a particular object:",
        hasExample: true,
        example: {
          code: `import java.util.Arrays;

        public class Main {
          public static void main(String[] args) {
            String[] names = {"Alice", "Bob", "Charlie"};
            Arrays.sort(names, String::compareToIgnoreCase);
            System.out.println(Arrays.toString(names));  // output: [Alice, Bob, Charlie]
          }
        }
        `,
          language: "java",
          output: `In this example, the sort method is called on the names array and passed a method reference to the compareToIgnoreCase method of the String class. This causes the sort method to sort the names array in alphabetical order, ignoring the case of the strings.`,
        },
      },
      {
        id: 10,
        text: "Reference to a static method: ClassName::methodName",
      },
      {
        id: 11,
        text: "Reference to a static method: ClassName::methodName",
      },
      {
        id: 12,
        text: "Reference to an instance method of a particular object: objectName::methodName",
      },
      {
        id: 13,
        text:
          "Reference to an instance method of an arbitrary object of a particular type: " +
          "ClassName::methodName",
      },
      {
        id: 14,
        text: "Reference to a constructor: ClassName::new",
      },
    ],
    conclustion:
      "Method references in Java can be a powerful tool for making code more readable and maintainable. They allow developers to refer to existing methods without having to create new ones, and they can help to make code more concise and expressive.",
  },
  {
    articleId: "id15",
    articleName: "New java.time package",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "This package provides a comprehensive set of classes for date and time manipulation, including support for the ISO-8601 calendar system.",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 9,
        text: "The java.time package is a new set of classes introduced in Java 8 for working with dates and times. It replaces the old java.util.Date and java.util.Calendar classes, which had many design flaws and were difficult to use.",
      },
      {
        id: 10,
        text: "The java.time package contains several classes that provide a wide range of functionality for working with date and time values. Some of the main classes include:",
      },
      {
        id: 11,
        text: "LocalDate: Represents a date (year, month, and day) without a time or time zone.",
      },
      {
        id: 12,
        text: "LocalTime: Represents a time (hours, minutes, seconds, and nanoseconds) without a date or time zone.",
      },
      {
        id: 13,
        text: "LocalDateTime: Represents a date and time (year, month, day, hours, minutes, seconds, and nanoseconds) without a time zone.",
      },
      {
        id: 14,
        text: "Instant: Represents a point in time (seconds and nanoseconds since the Unix epoch) with a time zone.",
      },
      {
        id: 15,
        text: "ZonedDateTime: Represents a date and time (year, month, day, hours, minutes, seconds, and nanoseconds) with a time zone.",
      },
      {
        id: 16,
        text: "Duration: Represents a duration of time (seconds and nanoseconds).",
      },
      {
        id: 17,
        text: "Period: Represents a period of time (years, months, and days).",
      },
    ],
    conclustion:
      "All of the above classes have a wide range of methods which can be used to perform operations like addition, subtraction, formatting, parsing, and more." +
      "The java.time package also provides a Clock class, which can be used to obtain the current time, and a ZoneId class, which can be used to obtain the current time zone." +
      "In addition to these classes, the java.time package also provides a number of utility classes for working with dates and times, such as DateTimeFormatter for formatting and parsing date and time values, and TemporalAdjuster for adjusting date and time values." +
      "Overall, the java.time package provides a much more powerful and user-friendly API for working with dates and times in Java 8 and later.",
  },
  {
    articleId: "id16",
    articleName: "Nashorn JavaScript Engine",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "This is a new JavaScript engine that allows you to run JavaScript code from within a Java program." +
      "Nashorn is a JavaScript engine that is included in the Java Development Kit (JDK) starting with version 8. It is designed to run on the Java Virtual Machine (JVM) and provides a way to execute JavaScript code within a Java application.",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 11,
        text: "One of the main advantages of Nashorn is that it allows for seamless integration between JavaScript and Java. This means that developers can use JavaScript for specific tasks within their Java application, and also have the ability to call Java code from JavaScript. This can be useful for a variety of tasks such as scripting and automation, as well as for providing a dynamic and interactive user interface.",
      },
      {
        id: 12,
        text: "Nashorn is built on top of the open-source JavaScript engine Rhino, and is compliant with the ECMAScript 5.1 standard. It also includes a number of additional features, such as support for new ECMAScript 6 features, improved performance, and better support for Java 8 features such as lambda expressions and the Stream API.",
      },
      {
        id: 13,
        text: "To use Nashorn, developers can use the javax.script package, which provides a standard API for executing JavaScript code in Java. This package includes a ScriptEngineManager class, which can be used to create and manage a Nashorn script engine. Once a script engine is created, developers can use it to execute JavaScript code by calling the eval() method and passing in a string containing the JavaScript code.",
      },
      {
        id: 14,
        text: `For example, the following code creates a Nashorn script engine and uses it to execute some JavaScript code that prints "Hello, World!" to the console:`,
        hasExample: true,
        example: {
          code: `ScriptEngineManager manager = new ScriptEngineManager();
          ScriptEngine engine = manager.getEngineByName("JavaScript");
          engine.eval("print('Hello, World!')");
          `,
        },
      },
      {
        id: 15,
        text: "In addition to the javax.script package, Nashorn also provides a number of Java-specific APIs, such as the jdk.nashorn.api.scripting package, which provides additional classes and methods for working with Nashorn.",
      },
      {
        id: 16,
        text: "One of the main use cases for Nashorn is for client-side scripting in JavaFX. When used in this context, the JavaScript code can be used to create and manipulate the user interface, and also respond to user input. This allows developers to create more dynamic and interactive applications that can run on the JVM.",
      },
    ],
    conclustion:
      "Overall, Nashorn is a powerful JavaScript engine that provides an easy way for Java developers to incorporate JavaScript into their applications. With its wide range of features and seamless integration with Java, it can be a valuable tool for a variety of use cases, including scripting, automation, and client-side scripting.",
  },
  {
    articleId: "id17",
    articleName: "Concurrent Accumulators",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "These are atomic variables that support efficient accumulation of values across threads.",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 11,
        text: "Concurrent accumulators are a type of concurrent data structure that provide a way to perform atomic updates to a shared value in a multi-threaded environment. They are commonly used in parallel and concurrent programming to perform tasks such as counting, summing, and averaging.",
      },
      {
        id: 12,
        text: "The most common type of concurrent accumulator is the atomic accumulator, which uses atomic operations to update the shared value. Atomic operations are low-level operations that are guaranteed to be executed atomically, meaning that they cannot be interrupted by other threads. This ensures that the shared value is updated correctly, even in the presence of multiple threads.",
      },
      {
        id: 13,
        text: "Java provides several classes for implementing atomic accumulators, such as AtomicInteger, AtomicLong, and AtomicDouble. These classes provide a simple and efficient way to perform atomic updates to integer, long and double values respectively.s",
      },
      {
        id: 14,
        text: "For example, the following code uses an AtomicInteger to maintain a shared counter that can be incremented by multiple threads:",
        hasExample: true,
        example: {
          code: `AtomicInteger counter = new AtomicInteger();

          // Thread 1
          counter.incrementAndGet();
          
          // Thread 2
          counter.incrementAndGet();
          `,
          output:
            "In this example, both threads can safely increment the counter without the risk of conflicts or race conditions, thanks to the atomic nature of the incrementAndGet() method.",
        },
      },
      {
        id: 15,
        text: `Another type of concurrent accumulator is the LongAdder. This is another class provided by the Java concurrency package, and is similar to an AtomicLong, but it provides a higher level of performance by reducing contention between threads. LongAdder uses a technique called "cellular decomposition" to split the shared value into multiple independent counters, each of which can be updated by a single thread at a time. This can significantly reduce contention, making LongAdder more efficient than AtomicLong in situations where many threads are updating the shared value concurrently.`,
      },
      {
        id: 16,
        text: "In addition to the above classes, Java provides several other concurrent accumulator classes that can be used for different types of tasks such as DoubleAdder, LongAccumulator, and DoubleAccumulator.",
      },
      {
        id: 17,
        text: "It is worth noting that concurrent accumulators can be used in various types of parallel computing such as parallel streams, parallel array operations, and fork-join framework. All of them are designed to make it easier to perform operations in parallel and can provide significant performance benefits when used correctly.",
      },
    ],
    conclustion:
      "In conclusion, concurrent accumulators are a powerful tool for performing atomic updates to shared values in a multi-threaded environment. They provide a simple and efficient way to perform common tasks such as counting, summing, and averaging, and can be used in various parallel computing contexts.",
  },
  {
    articleId: "id18",
    articleName: "Concurrent Maps",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "These are maps that support atomic updates and are useful for building scalable and concurrent applications",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 11,
        text: "Concurrent maps are a type of concurrent data structure that provide a way to perform updates and reads to a shared map in a multi-threaded environment. They are commonly used in parallel and concurrent programming to store and retrieve data in a thread-safe manner.",
      },
      {
        id: 12,
        text: "ava provides several classes for implementing concurrent maps, such as ConcurrentHashMap, ConcurrentSkipListMap, and ConcurrentSkipListSet. These classes provide a simple and efficient way to perform updates and reads on a map in a multi-threaded environment.",
      },
      {
        id: 13,
        text: `ConcurrentHashMap is a widely used class that allows multiple threads to read and write to the map simultaneously, without the need for explicit locking. It uses a technique called "segmentation" to divide the map into smaller, independent parts, called segments. This allows multiple threads to access different segments of the map at the same time, without the risk of conflicts or race conditions.`,
      },
      {
        id: 14,
        text: "For example, the following code uses a ConcurrentHashMap to store and retrieve data in a multi-threaded environment:",
        hasExample: true,
        example: {
          code: `ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

          // Thread 1
          map.put("A", 1);
          
          // Thread 2
          map.put("B", 2);
          
          // Thread 3
          int value = map.get("A");
          `,
          output:
            "In this example, all three threads can safely access the map simultaneously, without the risk of conflicts or race conditions, thanks to the concurrent nature of the ConcurrentHashMap class.",
        },
      },
      {
        id: 15,
        text: "Another class provided by Java for implementing concurrent maps is ConcurrentSkipListMap. It is a concurrent version of the TreeMap class, which uses a skip list data structure to provide efficient access and updates. ConcurrentSkipListMap provides expected average O(log n) time cost for the containsKey, get, put and remove operations and their variants.",
      },
      {
        id: 16,
        text: "ConcurrentSkipListSet is similar to ConcurrentSkipListMap but it stores only keys and it's used for set operations.",
      },
      {
        id: 17,
        text: "It is worth noting that, in addition to these classes, Java provides several other concurrent data structures such as ConcurrentLinkedQueue, ConcurrentLinkedDeque, CopyOnWriteArrayList and CopyOnWriteArraySet that can be used for different types of tasks such as queue and set operations.",
      },
    ],
    conclustion:
      "In conclusion, concurrent maps are a powerful tool for performing updates and reads on a shared map in a multi-threaded environment. They provide a simple and efficient way to store and retrieve data in a thread-safe manner. Java provides several classes for implementing concurrent maps, such as ConcurrentHashMap, ConcurrentSkipListMap, and ConcurrentSkipListSet that can be used depending on the specific use case and the expected performance.",
  },
  {
    articleId: "id19",
    articleName: "Lambda expressions",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Lambda expressions are a new feature introduced in Java 8 that provide a more concise and expressive way to write code. They allow developers to write small, anonymous functions, known as lambda expressions, that can be passed as arguments to other methods or used to define functional interfaces.",
    hasListView: false,
    ListView: [],
    hasList: true,
    List: [
      {
        id: 11,
        text: "A lambda expression is a simple, anonymous function that can be used to encapsulate a single piece of behavior. It has the following syntax:",
        hasExample: true,
        example: {
          code: `(parameters) -> {function body}
          `,
          output: "",
        },
      },
      {
        id: 12,
        text: "For example, the following code defines a lambda expression that takes two integers as input and returns the sum of the two integers:",
        example: `(int x, int y) -> x + y
        `,
      },
      {
        id: 13,
        text: "Lambda expressions can be used to simplify the code by eliminating the need for writing anonymous inner classes. For example, the following code defines an interface for a simple comparator and a class that uses the comparator to sort an array:",
        hasExample: true,
        example: {
          code: `interface Comparator {
            int compare(int a, int b);
          }
          
          class Sorter {
            void sort(int[] array, Comparator comparator) {
              //sort logic
            }
          }
          
          Sorter sorter = new Sorter();
          sorter.sort(array, new Comparator() {
            @Override
            public int compare(int a, int b) {
              return a - b;
            }
          });
          `,
          output: "",
        },
      },
      {
        id: 14,
        text: "It is worth noting that, Lambda expressions can also be used in combination with functional interfaces, which are interfaces that have a single abstract method. The Comparator interface is an example of a functional interface. The Runnable and Callable interfaces are also examples of functional interfaces that can be used with lambda expressions.",
      },
      {
        id: 15,
        text: "In addition, Lambda expressions can be used to simplify the use of the new functional interfaces of the java.util.function package such as Consumer, Predicate and Function which are widely used in functional programming and in the new Stream API of Java 8.",
      },
    ],
    conclustion:
      "In conclusion, lambda expressions are a new feature introduced in Java 8 that provide a more concise and expressive way to write code. They allow developers to write small, anonymous functions that can be passed as arguments to other methods or used to define functional interfaces. This can simplify the code and make it more readable, making Java 8 a more functional programming oriented.",
  },
  {
    articleId: "id20",
    articleName: "Java-9 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Java SE 9 was made available on September 21, 2017, due to controversial acceptance of the current implementation of Project Jigsaw by Java Executive Committee, which led Oracle to fix some open issues and concerns, and to refine some critical technical questions. In the last days of June 2017, Java Community Process expressed nearly unanimous consensus on the proposed Module System scheme.",
    hasListView: true,
    ListView: [
      {
        header: "Modularization of the JDK under Project Jigsaw",
        description:
          "The Java Platform Module System specifies a distribution format for collections of Java code and associated resources. It also specifies a repository for storing these collections, or modules, and identifies how they can be discovered, loaded and checked for integrity. It includes features such as namespaces with the aim of fixing some of the shortcomings in the existing JAR format, especially the JAR Hell, which can lead to issues such as classpath and class loading problems. ",
      },
      {
        header: "JavaDB was removed from JDK",
        description: `Apache Derby (previously distributed as IBM Cloudscape) is a relational database management system (RDBMS) developed by the Apache Software Foundation that can be embedded in Java programs and used for online transaction processing. It has a 3.5 MB disk-space footprint.

        Apache Derby is developed as an open source project under the Apache 2.0 license. For a time, Oracle distributed the same binaries under the name Java DB.[In June 2015 they announced that for JDK 9 they would no longer be doing so`,
      },
      {
        header: "Variable Handles",
        description:
          "Define a standard means to invoke the equivalents of various java.util.concurrent.atomic and sun.misc.Unsafe operations upon object fields and array elements, a standard set of fence operations for fine-grained control of memory ordering, and a standard reachability-fence operation to ensure that a referenced object remains strongly reachable.",
      },
      {
        header: "Milling Project Coin",
        description: `allow @SafeVarargs on private instance methods; Allow effectively-final variables to be used as resources in the try-with-resources statement; Allow diamond with anonymous classes if the argument type of the inferred type is denotable; Complete the removal, begun in Java SE 8, of underscore from the set of legal identifier names; Support for private methods in interfaces\n\nThe small language changes included in Project Coin / JSR 334 as part of JDK 7 / Java SE 7 have been easy to use and have worked well in practice. However, a few amendments could address the rough edges of those changes. In addition, using underscore ("_") as an identifier, which generates a warning as of Java SE 8, should be turned into an error in Java SE 9. It is also proposed that interfaces be allowed to have private methods.`,
      },
      {
        header: "Jshell: The Java Shell (Read-Eval-Print Loop)",
        description:
          "Provide an interactive tool to evaluate declarations, statements, and expressions of the Java programming language, together with an API so that other applications can leverage this functionality.",
      },
      {
        header: "Compact Strings",
        description:
          "Adopt a more space-efficient internal representation for strings",
      },
      {
        header: "HiDPI Graphics on Windows and Linux",
        description: "Implement HiDPI graphics on Windows and Linux.",
      },
      {
        header: "More Concurrency Updates",
        description:
          "An interoperable publish-subscribe framework, enhancements to the CompletableFuture API, and various other improvements.",
      },
      {
        header: "XML Catalogs",
        description:
          "Develop a standard XML Catalog API that supports the OASIS XML Catalogs standard, v1.1. The API will define catalog and catalog-resolver abstractions which can be used with the JAXP processors that accept resolvers.",
      },
      {
        header: "jlink: The Java Linker",
        description:
          "Create a tool that can assemble and optimize a set of modules and their dependencies into a custom run-time image as defined in JEP 220.\n\ncreate a tool that can assemble and optimize a set of modules and their dependencies into a custom run-time image. It effectively allows to produce a fully usable executable including the JVM to run it",
      },
      {
        header: "Ahead-of-Time Compilation",
        description:
          "Compile Java classes to native code prior to launching the virtual machine.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "The first Java 9 release candidate was released on August 9, 2017. The first stable release of Java 9 was on September 21, 2017.\n\nPlease note that these are the main features of Java 9, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id21",
    articleName: "Java-10 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "OpenJDK 10 was released on March 20, 2018, with twelve new features confirmed. Among these features were:",
    hasListView: true,
    ListView: [
      {
        header: "Local Variable Type Inference",
        description:
          "Enhance the Java Language to extend type inference to declarations of local variables with initializers.",
      },
      {
        header: "Consolidate the JDK Forest into a Single Repository",
        description:
          "Combine the numerous repositories of the JDK forest into a single repository in order to simplify and streamline development.",
      },
      {
        header: "Garbage-Collector Interface",
        description:
          "Improve the source code isolation of different garbage collectors by introducing a clean garbage collector (GC) interface.",
      },
      {
        header: "Parallel Full GC for G1",
        description:
          "Improve G1 worst-case latencies by making the full GC parallel.",
      },
      {
        header: "Application Class-Data Sharing",
        description: `To improve startup and footprint, extend the existing Class-Data Sharing ("CDS") feature to allow application classes to be placed in the shared archive.`,
      },
      {
        header: "Thread-Local Handshakes",
        description:
          "Introduce a way to execute a callback on threads without performing a global VM safepoint. Make it both possible and cheap to stop individual threads and not just all threads or none.",
      },
      {
        header: "Remove the Native-Header Generation Tool (javah)",
        description: "Remove the javah tool from the JDK.",
      },
      {
        header: "Additional Unicode Language-Tag Extensions",
        description:
          "Enhance java.util.Locale and related APIs to implement additional Unicode extensions of BCP 47 language tags.",
      },
      {
        header: "Heap Allocation on Alternative Memory Devices",
        description:
          "Enable the HotSpot VM to allocate the Java object heap on an alternative memory device, such as an NV-DIMM, specified by the user.",
      },
      {
        header: "Experimental Java-Based JIT Compiler",
        description:
          "Enable the Java-based JIT compiler, Graal, to be used as an experimental JIT compiler on the Linux/x64 platform.",
      },
      {
        header: "Root Certificates",
        description:
          "Provide a default set of root Certification Authority (CA) certificates in the JDK.",
      },
      {
        header: "Time-Based Release Versioning",
        description:
          "Revise the version-string scheme of the Java SE Platform and the JDK, and related versioning information, for present and future time-based release models.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 10, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id22",
    articleName: "Java-11 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "JDK 11 was released on September 25, 2018 and the version is currently open for bug fixes. It offers LTS, or Long-Term Support. Among others, Java 11 includes a number of new features, such as:",
    hasListView: true,
    ListView: [
      {
        header: "Dynamic Class-File Constants",
        description:
          "Extend the Java class-file format to support a new constant-pool form, CONSTANT_Dynamic. Loading a CONSTANT_Dynamic will delegate creation to a bootstrap method, just as linking an invokedynamic call site delegates linkage to a bootstrap method.",
      },
      {
        header: "Improve Aarch64 Intrinsics",
        description:
          "Improve the existing string and array intrinsics, and implement new intrinsics for the java.lang.Math sin, cos and log functions, on AArch64 processors",
      },
      {
        header: "Epsilon: A No-Op Garbage Collector (Experimental)",
        description:
          "Develop a GC that handles memory allocation but does not implement any actual memory reclamation mechanism. Once the available Java heap is exhausted, the JVM will shut down.",
      },
      {
        header: "Remove the Java EE and CORBA Modules",
        description:
          "Remove the Java EE and CORBA modules from the Java SE Platform and the JDK. These modules were deprecated in Java SE 9 with the declared intent to remove them in a future release.",
      },
      {
        header: "HTTP Client",
        description:
          "Standardize the incubated HTTP Client API introduced in JDK 9, via JEP 110, and updated in JDK 10.",
      },
      {
        header: "Local-Variable Syntax for Lambda Parameters",
        description:
          "Allow var to be used when declaring the formal parameters of implicitly typed lambda expressions.",
      },
      {
        header: "Key Agreement with Curve25519 and Curve448",
        description:
          "Implement key agreement using Curve25519 and Curve448 as described in RFC 7748.",
      },
      {
        header: "Unicode 10",
        description:
          "Upgrade existing platform APIs to support version 10.0 of the Unicode Standard.",
      },
      {
        header: "Flight Recorder",
        description:
          "Provide a low-overhead data collection framework for troubleshooting Java applications and the HotSpot JVM.",
      },
      {
        header: "ChaCha20 and Poly1305 Cryptographic Algorithms",
        description:
          "Implement the ChaCha20 and ChaCha20-Poly1305 ciphers as specified in RFC 7539. ChaCha20 is a relatively new stream cipher that can replace the older, insecure RC4 stream cipher.",
      },
      {
        header: "Launch Single-File Source-Code Programs",
        description: `Enhance the java launcher to run a program supplied as a single file of Java source code, including usage from within a script by means of "shebang" files and related techniques.`,
      },
      {
        header: "Low-Overhead Heap Profiling",
        description:
          "Provide a low-overhead way of sampling Java heap allocations, accessible via JVMTI.",
      },
      {
        header: "Transport Layer Security (TLS) 1.3",
        description:
          "Implement version 1.3 of the Transport Layer Security (TLS) Protocol RFC 8446.",
      },
      {
        header: "ZGC: A Scalable Low-Latency Garbage Collector (Experimental)",
        description:
          "The Z Garbage Collector, also known as ZGC, is a scalable low-latency garbage collector.",
      },
      {
        header: "Deprecate the Nashorn JavaScript Engine",
        description:
          "Deprecate the Nashorn JavaScript script engine and APIs, and the jjs tool, with the intent to remove them in a future release.",
      },
      {
        header: "Deprecate the Pack200 Tools and API",
        description:
          "Deprecate the pack200 and unpack200 tools, and the Pack200 API in java.util.jar.",
      },
      {
        header: "Nest-Based Access Control",
        description:
          "Introduce nests, an access-control context that aligns with the existing notion of nested types in the Java programming language. Nests allow classes that are logically part of the same code entity, but which are compiled to distinct class files, to access each other's private members without the need for compilers to insert accessibility-broadening bridge methods.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "A number of features from previous releases were dropped; in particular, Java applets and Java Web Start are no longer available. JavaFX, Java EE and CORBA modules have been removed from JDK. Please note that these are the main features of Java 11, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id23",
    articleName: "Java-12 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "JDK 12 was released on March 19, 2019. Among others, Java 12 includes a number of new features, such as:",
    hasListView: true,
    ListView: [
      {
        header: "Microbenchmark Suite",
        description:
          "Add a basic suite of microbenchmarks to the JDK source code, and make it easy for developers to run existing microbenchmarks and create new ones.",
      },
      {
        header: "Switch Expressions (Preview)",
        description: `Extend the switch statement so that it can be used as either a statement or an expression, and that both forms can use either a "traditional" or "simplified" scoping and control flow behavior. These changes will simplify everyday coding, and also prepare the way for the use of pattern matching (JEP 305) in switch. This is a preview language feature in JDK 12.`,
      },
      {
        header: "JVM Constants API",
        description:
          "Introduce an API to model nominal descriptions of key class-file and run-time artifacts, in particular constants that are loadable from the constant pool.",
      },
      {
        header: "One AArch64 Port, Not Two",
        description:
          "Remove all of the sources related to the arm64 port while retaining the 32-bit ARM port and the 64-bit aarch64 port.",
      },
      {
        header: "Default CDS Archives",
        description:
          "Enhance the JDK build process to generate a class data-sharing (CDS) archive, using the default class list, on 64-bit platforms.",
      },
      {
        header: "Abortable Mixed Collections for G1",
        description:
          "Make G1 mixed collections abortable if they might exceed the pause target.",
      },
      {
        header: "Promptly Return Unused Committed Memory from G1",
        description:
          "Enhance the G1 garbage collector to automatically return Java heap memory to the operating system when idle.",
      },
      {
        header: "Shenandoah: A Low-Pause-Time Garbage Collector (Experimental)",
        description:
          "Add a new garbage collection (GC) algorithm named Shenandoah which reduces GC pause times by doing evacuation work concurrently with the running Java threads. Pause times with Shenandoah are independent of heap size, meaning you will have the same consistent pause times whether your heap is 200 MB or 200 GB.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 12, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id24",
    articleName: "Java-13 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "JDK 13 was released on September 17, 2019. Java 13 includes the following new features, as well as",
    hasListView: true,
    ListView: [
      {
        header: "Text Blocks (Preview)",
        description:
          "Add text blocks to the Java language. A text block is a multi-line string literal that avoids the need for most escape sequences, automatically formats the string in a predictable way, and gives the developer control over format when desired. This is a preview language feature in JDK 13.",
      },
      {
        header: "Switch Expressions (Second Preview)",
        description:
          "Extend switch so it can be used as either a statement or an expression, and so that both forms can use either traditional case ... : labels (with fall through) or new case ... -> labels (with no fall through), with a further new statement for yielding a value from a switch expression. These changes will simplify everyday coding, and prepare the way for the use of pattern matching (JEP 305) in switch. This is a preview language feature in JDK 13",
      },
      {
        header: "Uncommit Unused Memory (Experimental)",
        description:
          "Enhance ZGC to return unused heap memory to the operating system.",
      },
      {
        header: "Dynamic CDS Archives",
        description:
          "Extend application class-data sharing to allow the dynamic archiving of classes at the end of Java application execution. The archived classes will include all loaded application classes and library classes that are not present in the default, base-layer CDS archive",
      },
      {
        header: "Reimplement the Legacy Socket API",
        description:
          "Replace the underlying implementation used by the java.net.Socket and java.net.ServerSocket APIs with a simpler and more modern implementation that is easy to maintain and debug. The new implementation will be easy to adapt to work with user-mode threads, a.k.a. fibers, currently being explored in Project Loom.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 13, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id25",
    articleName: "Java-14 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "JDK 14 was released on March 17, 2020. Java 14 includes the following new features",
    hasListView: true,
    ListView: [
      {
        header: "Packaging Tool (Incubator)",
        description:
          "Create a tool for packaging self-contained Java applications.",
      },
      {
        header: "NUMA-Aware Memory Allocation for G1",
        description:
          "Improve G1 performance on large machines by implementing NUMA-aware memory allocation",
      },
      {
        header: "JFR Event Streaming",
        description:
          "Expose JDK Flight Recorder data for continuous monitoring.",
      },
      {
        header: "Non-Volatile Mapped Byte Buffers",
        description:
          "Add new JDK-specific file mapping modes so that the FileChannel API can be used to create MappedByteBuffer instances that refer to non-volatile memory.",
      },
      {
        header: "Helpful NullPointerExceptions",
        description:
          "Improve the usability of NullPointerExceptions generated by the JVM by describing precisely which variable was null.",
      },
      {
        header: "Switch Expressions",
        description:
          "Extend switch so it can be used as either a statement or an expression, and so that both forms can use either traditional case ... : labels (with fall through) or new case ... -> labels (with no fall through), with a further new statement for yielding a value from a switch expression. These changes will simplify everyday coding, and prepare the way for the use of pattern matching in switch. This was a preview language feature in JDK 12 and JDK 13.",
      },
      {
        header: "Deprecate the Solaris and SPARC Ports",
        description:
          "Deprecate the Solaris/SPARC, Solaris/x64, and Linux/SPARC ports, with the intent to remove them in a future release.",
      },
      {
        header: "Remove the Concurrent Mark Sweep (CMS) Garbage Collector",
        description:
          "Remove the Concurrent Mark Sweep (CMS) garbage collector.",
      },
      {
        header: "ZGC on macOS (Experimental)",
        description: "Port the ZGC garbage collector to macOS.",
      },
      {
        header: "ZGC on Windows (Experimental)",
        description: "Port the ZGC garbage collector to Windows.",
      },
      {
        header: "Deprecate the ParallelScavenge + SerialOld GC Combination",
        description:
          "Deprecate the combination of the Parallel Scavenge and Serial Old garbage collection algorithms.",
      },
      {
        header: "Remove the Pack200 Tools and API",
        description:
          "Remove the pack200 and unpack200 tools, and the Pack200 API in the java.util.jar package. These tools and API were deprecated for removal in Java SE 11 with the express intent to remove them in a future release.",
      },
      {
        header: "Text Blocks (Second Preview)",
        description:
          "Add text blocks to the Java language. A text block is a multi-line string literal that avoids the need for most escape sequences, automatically formats the string in a predictable way, and gives the developer control over the format when desired. This is a preview language feature in JDK 14.",
      },
      {
        header: "Foreign-Memory Access API (Incubator)",
        description:
          "ntroduce an API to allow Java programs to safely and efficiently access foreign memory outside of the Java heap.",
      },
      {
        header: "Pattern Matching for instanceof (Preview)",
        description:
          "Enhance the Java programming language with pattern matching for the instanceof operator. Pattern matching allows common logic in a program, namely the conditional extraction of components from objects, to be expressed more concisely and safely. This is a preview language feature in JDK 14.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 14, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id26",
    articleName: "Java-15 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "JDK 15 was released on September 15, 2020. Java 15 adds e.g. support for multi-line string literals (aka Text Blocks). The Shenandoah and Z garbage collectors (latter sometimes abbreviated ZGC) are now ready for use in production (i.e. no longer marked experimental). Support for Oracle's Solaris operating system (and SPARC CPUs) is dropped (while still available in e.g. Java 11). The Nashorn JavaScript Engine is removed. Also removed some root CA certificates. ",
    hasListView: true,
    ListView: [
      {
        header: "Edwards-Curve Digital Signature Algorithm (EdDSA)",
        description:
          "Implement cryptographic signatures using the Edwards-Curve Digital Signature Algorithm (EdDSA) as described by RFC 8032.",
      },
      {
        header: "Sealed Classes (Preview)",
        description:
          "Enhance the Java programming language with sealed classes and interfaces. Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them. This is a preview language feature in JDK 15.",
      },
      {
        header: "Hidden Classes",
        description:
          "Introduce hidden classes, which are classes that cannot be used directly by the bytecode of other classes. Hidden classes are intended for use by frameworks that generate classes at run time and use them indirectly, via reflection. A hidden class may be defined as a member of an access control nest, and may be unloaded independently of other classes.",
      },
      {
        header: "Deprecate and Disable Biased Locking",
        description:
          "Disable biased locking by default, and deprecate all related command-line options.",
      },
      {
        header: "Removed Nashorn JavaScript Engine",
        description:
          "Remove the Nashorn JavaScript script engine and APIs, and the jjs tool. The engine, the APIs, and the tool were deprecated for removal in Java 11 with the express intent to remove them in a future release.",
      },
      {
        header: "Reimplement the Legacy DatagramSocket API",
        description:
          "Replace the underlying implementations of the java.net.DatagramSocket and java.net.MulticastSocket APIs with simpler and more modern implementations that are easy to maintain and debug. The new implementations will be easy to adapt to work with virtual threads, currently being explored in Project Loom. This is a follow-on to JEP 353, which already reimplemented the legacy Socket API.",
      },
      {
        header: "Pattern Matching for instanceof (Second Preview)",
        description:
          "Enhance the Java programming language with pattern matching for the instanceof operator. Pattern matching allows common logic in a program, namely the conditional extraction of components from objects, to be expressed more concisely and safely. This is a preview language feature in JDK 15.",
      },
      {
        header: "A Scalable Low-Latency Garbage Collector (Production)",
        description:
          "Change the Z Garbage Collector from an experimental feature into a product feature.",
      },
      {
        header: "Text Blocks",
        description:
          "Add text blocks to the Java language. A text block is a multi-line string literal that avoids the need for most escape sequences, automatically formats the string in a predictable way, and gives the developer control over the format when desired.",
      },
      {
        header: "Shenandoah: A Low-Pause-Time Garbage Collector (Production)",
        description:
          "Change the Shenandoah garbage collector from an experimental feature into a product feature.",
      },
      {
        header: "Foreign-Memory Access API (Second Incubator)",
        description:
          "Introduce an API to allow Java programs to safely and efficiently access foreign memory outside of the Java heap.",
      },
      {
        header: "Records (Second Preview)",
        description:
          "Enhance the Java programming language with records, which are classes that act as transparent carriers for immutable data. Records can be thought of as nominal tuples. This is a preview language feature in JDK 15.",
      },
      {
        header: "Remove the Solaris and SPARC Ports",
        description:
          "Remove the source code and build support for the Solaris/SPARC, Solaris/x64, and Linux/SPARC ports. These ports were deprecated for removal in JDK 14 with the express intent to remove them in a future release.",
      },
      {
        header: "Deprecate RMI Activation for Removal",
        description:
          "Deprecate the RMI Activation mechanism for future removal. RMI Activation is an obsolete part of RMI that has been optional since Java 8. No other part of RMI will be deprecated.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 15, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id27",
    articleName: "Java-16 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Java 16, also known as Java SE 16, was officially released on March 16, 2021. Some of the main features included in Java 16 are:",
    hasListView: true,
    ListView: [
      {
        header: "Pattern Matching for instanceof",
        description:
          "a new feature that allows developers to match an object against a pattern and perform an action based on the match.",
      },
      {
        header: "Foreign-Memory Access API",
        description:
          "a new feature that allows developers to safely and efficiently access foreign memory from Java programs.",
      },
      {
        header: "Deprecate the Solaris and SPARC Ports",
        description:
          "The Solaris/SPARC ports have been deprecated and will be removed in a future release.",
      },
      {
        header: "MacOS/AArch64 Port",
        description: "Java 16 includes a new port for macOS on Apple M1 chip.",
      },
      {
        header: "Remove the Concurrent Mark Sweep (CMS) Garbage Collector",
        description:
          "The Concurrent Mark Sweep (CMS) garbage collector has been removed from Java 16.",
      },
      {
        header: "Foreign Linker API",
        description:
          "A new feature that allows developers to create and call native code from Java programs more safely and efficiently.",
      },
      {
        header: "Windows/AArch64 Port",
        description:
          "Java 16 includes a new port for Windows on ARM64 architecture.",
      },
      {
        header: "Deprecate RMI Activation for Removal",
        description:
          "The RMI activation feature has been deprecated and will be removed in a future release.",
      },
      {
        header: "Records",
        description:
          " A new feature that allows developers to define lightweight classes that are used to store data.",
      },
      {
        header: "Remove the Pack200 Tools and API",
        description:
          "The Pack200 tools and API have been removed from Java 16.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 16, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id28",
    articleName: "Java-17 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Java 17, also known as Java SE 17, was officially released on September 14, 2021. Some of the main features included in Java 17 are:",
    hasListView: true,
    ListView: [
      {
        header: "Records",
        description:
          "A new feature that allows developers to define lightweight classes that are used to store data.",
      },
      {
        header: "Pattern Matching for instanceof",
        description:
          "A new feature that allows developers to match an object against a pattern and perform an action based on the match.",
      },
      {
        header: "Sealed Classes",
        description:
          "A new feature that allows developers to restrict the subclasses of a class.",
      },
      {
        header: "Text Blocks",
        description:
          "A new feature that allows developers to write multi-line string literals more easily and with fewer escape sequences.",
      },
      {
        header: "Concurrent Accumulators",
        description:
          "A new feature that allows developers to perform atomic operations on shared variables.",
      },
      {
        header: "Vector API",
        description:
          "A new feature that allows developers to perform vector operations on arrays of data.",
      },
      {
        header: "Improved Garbage Collection",
        description:
          "Changes to the G1 garbage collector that improves the performance and reduces the pause times.",
      },
      {
        header: "Foreign-Memory Access API",
        description:
          "A new feature that allows developers to safely and efficiently access foreign memory from Java programs.",
      },
      {
        header: "Improved support for macOS and Apple Silicon",
        description:
          "ava 17 provides better support for macOS and Apple Silicon, including improved performance and support for Apple's new M1 chip.",
      },
      {
        header: "Deprecation of the Nashorn JavaScript Engine",
        description:
          "The Nashorn JavaScript engine has been deprecated and will be removed in a future release.",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these are the main features of Java 17, but there may be other minor features, improvements, or bug fixes included in the release as well.",
  },
  {
    articleId: "id29",
    articleName: "Java-18 Feature",
    artcleMetadata: {
      user: "saurabh prajapati",
      date: "14 Jan 2023",
      level: "Easy",
    },
    description:
      "Java 18, also known as Java 18.3, is not yet officially released as of January 22, 2023. However, based on the features that have been proposed and are under development, some of the expected features in Java 18 include:",
    hasListView: true,
    ListView: [
      {
        header: "Better support for pattern matching",
        description: "",
      },
      {
        header: "Improved support for records",
        description: "",
      },
      {
        header: "New standard libraries such as text blocks and sealed classes",
        description: "",
      },
      {
        header: "Improved type inference",
        description: "",
      },
      {
        header: "Enhanced support for switch expressions",
        description: "",
      },
      {
        header: "Additional improvements to the Garbage Collector",
        description: "",
      },
      {
        header: "Better support for concurrent programming",
        description: "",
      },
    ],
    hasList: false,
    List: [],
    conclustion:
      "Please note that these features are not final and could change before the official release of Java 18.",
  },
];

export const TreeviewData = [
  {
    id: 1,
    label: "Java 8 Feature ",
    children: [
      { id: "id10", label: "Streams API" },
      { id: "id11", label: "Optional" },
      { id: "id12", label: "Default methods" },
      { id: "id13", label: "Functional interfaces" },
      { id: "id14", label: "Method references" },
      { id: "id15", label: "New java.time package" },
      { id: "id16", label: "Nashorn JavaScript Engine" },
      { id: "id17", label: "Concurrent Accumulators" },
      { id: "id18", label: "Concurrent Maps" },
      { id: "id19", label: "Lambda expressions" },
    ],
  },
  {
    id: 2,
    label: "Java 9 Feature",
    children: [{ id: "id5", label: "Jshell - Java Shell tool" }],
  },
  {
    id: 3,
    label: "C Sharp",
    children: [
      {
        id: "id6",
        label: "PDB File Format Explained",
      },
    ],
  },
  {
    id: 4,
    label: "Java Feature",
    children: [
      {
        id: "id3",
        label: "Java-8 Feature",
      },
      {
        id: "id4",
        label: "Java-9 Feature",
      },
      {
        id: "id5",
        label: "Java-10 Feature",
      },
      {
        id: "id6",
        label: "Java-11 Feature",
      },
      {
        id: "id7",
        label: "Java-12 Feature",
      },
      {
        id: "id10",
        label: "Java-13 Feature",
      },
      {
        id: "id11",
        label: "Java-14 Feature",
      },
      {
        id: "id12",
        label: "Java-15 Feature",
      },
      {
        id: "id13",
        label: "Java-16 Feature",
      },
      {
        id: "id14",
        label: "Java-17 Feature",
      },
      {
        id: "id8",
        label: "Java-18 Feature",
      },
    ],
  },
];
