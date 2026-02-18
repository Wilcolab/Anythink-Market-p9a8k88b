/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase, where the first word is lowercase and subsequent words
 * have their first letter capitalized with no separators.
 * 
 * Example:
 * convertToCamelCase("hello world") // Returns: "helloWorld"
 * convertToCamelCase("my-variable-name") // Returns: "myVariableName"
 * convertToCamelCase("some_long_string") // Returns: "someLongString"
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 */
function convertToCamelCase(str) {
    return str
        .split(/[\s\-_]+/) // Split by spaces, hyphens, or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // Keep first word lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize subsequent words
        })
        .join(""); // Join all words without separators
}