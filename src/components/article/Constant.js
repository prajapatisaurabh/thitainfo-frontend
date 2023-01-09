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
