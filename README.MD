# String Calculator TDD Kata

**Tips**:
1. Start with the simplest test case of an empty string and move to one and two numbers.
2. Remember to solve problems in a simple manner so that you force yourself to write tests you did not think     about.
3. Remember to refactor after each passing test.

**Steps**:
1. Create a simple String calculator with a method signature like this:

# int add(string numbers)

Input: a string of comma-separated numbers
Output: an integer, sum of the numbers
Examples:

Input: “”, Output: 0
Input: “1”, Output: 1
Input: “1,5”, Output: 6

2. Allow the add method to handle any amount of numbers.

3. Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)

4. Support different delimiters:

5. To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.

6. Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>"
If there are multiple negative numbers, show all of them in the exception message, separated by commas.


# Steps to Run the Test in Terminal and Check the Results

1. **Navigate to the Project Directory**:
    Open your terminal and navigate to the root directory of your project where the test file is located.

    ```bash
    cd /path/to/your/project
    ```

2. **Ensure Dependencies Are Installed**:
    Make sure all required dependencies for the project are installed. 

    ```bash
    npm install
    ```

3. **Run the Test Command**:
    Execute the test file or test suite using the appropriate command for your testing framework or environment. Examples:
    - For Node.js with Jest:
      ```bash
      npm test
      ```


4. **Check the Test Results**:
    After running the test command, the terminal will display the test results. Look for the following:
    - **Passed Tests**: These are the tests that successfully met the expected conditions.
    - **Failed Tests**: These are the tests that did not meet the expected conditions. Review the error messages and stack traces provided to debug the issues.
