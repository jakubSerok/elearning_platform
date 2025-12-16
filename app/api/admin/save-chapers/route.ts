import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { CourseChaptersTable } from "@/config/schema";

const PYTHON_DATA = [
  {
    id: 1,
    name: "Python Awakening",
    desc: "Write your first script and understand the syntax of this powerful language.",
    exercises: [
      {
        name: "Hello Python",
        slug: "hello-python",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Variable Vessel",
        slug: "variable-vessel",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Type Inspector",
        slug: "type-inspector",
        xp: 15,
        difficulty: "easy",
      },
      {
        name: "Input Receiver",
        slug: "input-receiver",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Comment Crafting",
        slug: "comment-crafting",
        xp: 10,
        difficulty: "easy",
      },
      {
        name: "String Concatenation",
        slug: "string-concatenation",
        xp: 25,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 2,
    name: "Control Flow",
    desc: "Teach your program to make decisions using logic and conditionals.",
    exercises: [
      {
        name: "The Boolean Gate",
        slug: "the-boolean-gate",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "If Else Fork",
        slug: "if-else-fork",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Elif Ladder",
        slug: "elif-ladder",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Logical Operators",
        slug: "logical-operators",
        xp: 25,
        difficulty: "medium",
      },
      {
        name: "Nested Decisions",
        slug: "nested-decisions",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Indentation Ruler",
        slug: "indentation-ruler",
        xp: 20,
        difficulty: "easy",
      },
    ],
  },
  {
    id: 3,
    name: "Loops & Cycles",
    desc: "Automate repetitive tasks with For and While loops.",
    exercises: [
      {
        name: "For Loop Traveller",
        slug: "for-loop-traveller",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "While Loop Counter",
        slug: "while-loop-counter",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Range Rover",
        slug: "range-rover",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Break the Chain",
        slug: "break-the-chain",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Continue Skipper",
        slug: "continue-skipper",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Nested Loop Matrix",
        slug: "nested-loop-matrix",
        xp: 45,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 4,
    name: "Lists & Tuples",
    desc: "Store sequences of data using mutable Lists and immutable Tuples.",
    exercises: [
      {
        name: "List Creator",
        slug: "list-creator",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Index Hunter",
        slug: "index-hunter",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Slicing Master",
        slug: "slicing-master",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Append & Pop",
        slug: "append-and-pop",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Tuple Vault",
        slug: "tuple-vault",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "List Sorting",
        slug: "list-sorting",
        xp: 30,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 5,
    name: "Dictionaries & Sets",
    desc: "Master key-value mappings and handle unique collections of data.",
    exercises: [
      {
        name: "Dictionary Lookup",
        slug: "dictionary-lookup",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Key Value Pair",
        slug: "key-value-pair",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Set Unique Filter",
        slug: "set-unique-filter",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Dict Methods",
        slug: "dict-methods",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Set Operations",
        slug: "set-operations",
        xp: 40,
        difficulty: "hard",
      },
      {
        name: "Nested Dictionaries",
        slug: "nested-dictionaries",
        xp: 45,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 6,
    name: "Functions",
    desc: "Create reusable blocks of code to organize and modularize your programs.",
    exercises: [
      {
        name: "Def Definition",
        slug: "def-definition",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Parameter Pass",
        slug: "parameter-pass",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Return Value",
        slug: "return-value",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Default Args",
        slug: "default-args",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Keyword Args",
        slug: "keyword-args",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Scope Watcher",
        slug: "scope-watcher",
        xp: 40,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 7,
    name: "Strings Advanced",
    desc: "Manipulate text like a pro using methods and f-strings.",
    exercises: [
      {
        name: "F-String Formatter",
        slug: "f-string-formatter",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Split & Join",
        slug: "split-and-join",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Case Converter",
        slug: "case-converter",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Strip Whitespace",
        slug: "strip-whitespace",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Find & Replace",
        slug: "find-and-replace",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Escape Characters",
        slug: "escape-characters",
        xp: 35,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 8,
    name: "File Handling",
    desc: "Read from and write to external files to persist data.",
    exercises: [
      {
        name: "Open The File",
        slug: "open-the-file",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Read Lines",
        slug: "read-lines",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Write Content",
        slug: "write-content",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Append Mode",
        slug: "append-mode",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Context Manager With",
        slug: "context-manager-with",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "File Not Found",
        slug: "file-not-found",
        xp: 25,
        difficulty: "easy",
      },
    ],
  },
  {
    id: 9,
    name: "Modules & Libraries",
    desc: "Extend Python's capabilities by importing built-in and external modules.",
    exercises: [
      {
        name: "Import Math",
        slug: "import-math",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Random Chance",
        slug: "random-chance",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "DateTime Keeper",
        slug: "datetime-keeper",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Alias As",
        slug: "alias-as",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "From Import Specific",
        slug: "from-import-specific",
        xp: 25,
        difficulty: "medium",
      },
      {
        name: "Pip Installer",
        slug: "pip-installer",
        xp: 15,
        difficulty: "easy",
      },
    ],
  },
  {
    id: 10,
    name: "Error Handling",
    desc: "Build robust programs that can handle crashes and exceptions gracefully.",
    exercises: [
      {
        name: "Try Except Shield",
        slug: "try-except-shield",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Catch Specific Error",
        slug: "catch-specific-error",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Finally Block",
        slug: "finally-block",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Raise Exception",
        slug: "raise-exception",
        xp: 40,
        difficulty: "hard",
      },
      {
        name: "Else Clause",
        slug: "else-clause",
        xp: 35,
        difficulty: "hard",
      },
      {
        name: "Debug Print",
        slug: "debug-print",
        xp: 20,
        difficulty: "easy",
      },
    ],
  },
  {
    id: 11,
    name: "OOP Basics",
    desc: "Introduction to Object-Oriented Programming: Classes and Objects.",
    exercises: [
      {
        name: "Class Blueprint",
        slug: "class-blueprint",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Object Instantiation",
        slug: "object-instantiation",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Init Constructor",
        slug: "init-constructor",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Self Reference",
        slug: "self-reference",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Instance Methods",
        slug: "instance-methods",
        xp: 40,
        difficulty: "hard",
      },
      {
        name: "Inheritance Tree",
        slug: "inheritance-tree",
        xp: 50,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 12,
    name: "Pythonic Features",
    desc: "Write code the 'Pythonic' way using list comprehensions and lambdas.",
    exercises: [
      {
        name: "List Comprehension",
        slug: "list-comprehension",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Lambda Functions",
        slug: "lambda-functions",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Map & Filter",
        slug: "map-and-filter",
        xp: 40,
        difficulty: "hard",
      },
      {
        name: "Zip Iterator",
        slug: "zip-iterator",
        xp: 30,
        difficulty: "medium",
      },
      {
        name: "Unpacking Operator",
        slug: "unpacking-operator",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Walrus Operator",
        slug: "walrus-operator",
        xp: 45,
        difficulty: "hard",
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  PYTHON_DATA.forEach(async (item) => {
    await db.insert(CourseChaptersTable).values({
      courseId: 4, //Change Course ID depends on course info,
      desc: item?.desc,
      exercises: item.exercises,
      name: item?.name,
      chapterId: item?.id,
    });
  });
  return NextResponse.json("Success");
}
