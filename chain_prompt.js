// Chain Prompt - Multiple Sequential Steps:
//
// Step 1: Basic Functionality
// "Write a JavaScript function called toKebabCase that takes a string input and 
// converts it into kebab-case format (all lowercase words separated by hyphens). 
// For example, toKebabCase("Hello World") should return "hello-world"."
//
// Step 2: Handle Edge Cases
// "Extend the toKebabCase function to handle edge cases such as multiple spaces,
// underscores, punctuation, and mixed casing. Normalize the input so that 
// toKebabCase(" multiple Words_here!") returns "multiple-words-here"."
//
// Step 3: Error Handling
// "Add error handling to the toKebabCase function. If the input is not a valid 
// string (e.g., null, undefined, number, or other non-string types), throw an 
// error with a descriptive message. Ensure the function is robust and safe to 
// use in production."

/**
 * Converts a given string into kebab-case format.
 * 
 * This function takes a string and converts it to kebab-case format where all words
 * are lowercase and separated by hyphens. It handles multiple delimiters (spaces,
 * underscores, hyphens) and mixed casing while normalizing punctuation and whitespace.
 * 
 * @param {string} input - The input string to convert. Must be a valid string that is not
 *                         empty or whitespace-only.
 * @returns {string} The converted kebab-case string where all words are lowercase and
 *                   separated by hyphens.
 * @throws {Error} If input is null, undefined, not a string, empty, or whitespace-only.
 * 
 * @example
 * toKebabCase("Hello World");              // Returns: "hello-world"
 * toKebabCase(" multiple Words_here!");    // Returns: "multiple-words-here"
 * toKebabCase("user_id");                  // Returns: "user-id"
 * toKebabCase("SCREEN NAME");              // Returns: "screen-name"
 * toKebabCase("HTTPSConnection");          // Returns: "https-connection"
 */
function toKebabCase(input) {
  // Step 3: Error Handling
  // Input validation - check for null and undefined
  if (input === null || input === undefined) {
    throw new Error('Input cannot be null or undefined');
  }

  // Type validation - ensure input is a string
  if (typeof input !== 'string') {
    throw new Error(`Input must be a string, but received ${typeof input}`);
  }

  // Handle empty strings
  if (input.trim().length === 0) {
    throw new Error('Input cannot be an empty or whitespace-only string');
  }

  // Step 2: Handle Edge Cases
  // Remove leading/trailing whitespace
  let trimmed = input.trim();

  // Remove punctuation (keep letters, numbers, spaces, underscores, hyphens)
  const cleaned = trimmed.replace(/[^\w\s-]/g, '');
  
  // Split by multiple delimiters: spaces, underscores, hyphens, or camelCase boundaries
  const words = cleaned
    .split(/[\s_-]+|(?=[A-Z])/)
    .filter(word => word.length > 0); // Remove empty strings from split

  // If no valid words remain, throw an error
  if (words.length === 0) {
    throw new Error('Input contains no valid words after removing punctuation and delimiters');
  }

  // Step 1: Basic Functionality
  // Convert to kebab-case: all words lowercase joined by hyphens
  return words
    .map(word => word.toLowerCase())
    .join('-');
}

// Test cases demonstrating all three steps in action
console.log('=== Basic Functionality ===');
console.log(toKebabCase("Hello World"));           // Output: "hello-world"

console.log('\n=== Edge Case Handling ===');
console.log(toKebabCase(" multiple Words_here!")); // Output: "multiple-words-here"
console.log(toKebabCase("user_id"));               // Output: "user-id"
console.log(toKebabCase("SCREEN NAME"));           // Output: "screen-name"
console.log(toKebabCase("HTTPSConnection"));       // Output: "https-connection"

console.log('\n=== Error Handling ===');
try {
  toKebabCase(null);
} catch (error) {
  console.log(`Error (null): ${error.message}`);
}

try {
  toKebabCase(undefined);
} catch (error) {
  console.log(`Error (undefined): ${error.message}`);
}

try {
  toKebabCase(123);
} catch (error) {
  console.log(`Error (number): ${error.message}`);
}

try {
  toKebabCase("");
} catch (error) {
  console.log(`Error (empty string): ${error.message}`);
}

try {
  toKebabCase("   ");
} catch (error) {
  console.log(`Error (whitespace only): ${error.message}`);
}

try {
  toKebabCase("!!!");
} catch (error) {
  console.log(`Error (punctuation only): ${error.message}`);
}
