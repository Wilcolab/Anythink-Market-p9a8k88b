/**
 * String case conversion utility module
 * 
 * This module provides functions to convert strings into various case formats.
 * All functions validate input and throw errors for invalid inputs.
 * 
 * @module stringCaseConverter
 * @version 1.0.0
 */

/**
 * Converts a string to camelCase format.
 * 
 * Transforms the input string by:
 * - Removing leading/trailing whitespace
 * - Replacing non-alphanumeric characters (except spaces) with spaces
 * - Splitting into words and filtering empty strings
 * - Capitalizing the first letter of each word except the first
 * - Joining without separators
 * 
 * @function toCamelCase
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not of type string
 * @throws {Error} If input is empty or contains only whitespace
 * @throws {Error} If input contains no valid alphanumeric words after processing
 * 
 * @example
 * toCamelCase("hello world"); // Returns "helloWorld"
 * toCamelCase(" multiple words_here!"); // Returns "multipleWordsHere"
 * toCamelCase("Hello World"); // Returns "helloWorld"
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string by:
 * - Removing leading/trailing whitespace
 * - Replacing non-alphanumeric characters (except spaces) with spaces
 * - Splitting into words and filtering empty strings
 * - Converting all characters to lowercase
 * - Joining words with dot (.) separator
 * 
 * @function toDotCase
 * @param {string} str - The string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not of type string
 * @throws {Error} If input is empty or contains only whitespace
 * @throws {Error} If input contains no valid alphanumeric words after processing
 * 
 * @example
 * toDotCase("hello world"); // Returns "hello.world"
 * toDotCase(" multiple words_here!"); // Returns "multiple.words.here"
 * toDotCase("Hello World"); // Returns "hello.world"
 * toDotCase("  spaces  everywhere  "); // Returns "spaces.everywhere"
 * Converts a string to camelCase format
 * @param {string} str - The string to convert
 * @returns {string} - The camelCase version of the string
 * @throws {Error} - If input is invalid
 */
function toCamelCase(str) {
    // Input validation
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof str !== "string") {
        throw new Error(`Input must be a string, received ${typeof str}`);
    }

    if (str.trim().length === 0) {
        throw new Error("Input cannot be an empty or whitespace-only string");
    }

    // Remove leading/trailing whitespace
    let cleaned = str.trim();

    // Replace non-alphanumeric characters (except spaces) with spaces
    cleaned = cleaned.replace(/[^a-zA-Z0-9\s]/g, " ");

    // Split by whitespace and filter out empty strings
    const words = cleaned.split(/\s+/).filter((word) => word.length > 0);

    if (words.length === 0) {
        throw new Error("Input must contain at least one valid word");
    }

    // Convert to camelCase
    const camelCase = words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // Capitalize first letter of all words except the first
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join("");

    return camelCase;
}

// Example usage and tests
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase(" multiple words_here!")); // "multipleWordsHere"
console.log(toCamelCase("Hello World")); // "helloWorld"
console.log(toCamelCase("  spaces  everywhere  ")); // "spacesEverywhere"

// Error cases
try {
    toCamelCase(null);
} catch (e) {
    console.error(e.message);
}

try {
    toCamelCase("");
} catch (e) {
    console.error(e.message);
}

try {
    toCamelCase(123);
} catch (e) {
    console.error(e.message);
}

/**
 * Converts a string to dot.case format
 * @param {string} str - The string to convert
 * @returns {string} - The dot.case version of the string
 * @throws {Error} - If input is invalid
 */
function toDotCase(str) {
    // Input validation
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof str !== "string") {
        throw new Error(`Input must be a string, received ${typeof str}`);
    }

    if (str.trim().length === 0) {
        throw new Error("Input cannot be an empty or whitespace-only string");
    }

    // Remove leading/trailing whitespace
    let cleaned = str.trim();

    // Replace non-alphanumeric characters (except spaces) with spaces
    cleaned = cleaned.replace(/[^a-zA-Z0-9\s]/g, " ");

    // Split by whitespace and filter out empty strings
    const words = cleaned.split(/\s+/).filter((word) => word.length > 0);

    if (words.length === 0) {
        throw new Error("Input must contain at least one valid word");
    }

    // Convert to dot.case
    const dotCase = words
        .map((word) => word.toLowerCase())
        .join(".");

    return dotCase;
}

// Example usage and tests for toDotCase
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase(" multiple words_here!")); // "multiple.words.here"
console.log(toDotCase("Hello World")); // "hello.world"
console.log(toDotCase("  spaces  everywhere  ")); // "spaces.everywhere"

// Error cases
try {
    toDotCase(null);
} catch (e) {
    console.error(e.message);
}

try {
    toDotCase("");
} catch (e) {
    console.error(e.message);
}

try {
    toDotCase(123);
} catch (e) {
    console.error(e.message);
}
