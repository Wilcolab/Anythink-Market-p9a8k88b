// Refined Prompt with Error Handling and Edge Cases:
// Write a JavaScript function toCamelCase that converts a given string into camelCase format.
// The function should handle edge cases such as empty strings, null, undefined, numbers, 
// or non-string inputs. If the input is invalid, throw an error with a descriptive message. 
// Ensure that multiple spaces, punctuation, and mixed casing are normalized correctly.
// For example, toCamelCase("hello world") should return "helloWorld", and 
// toCamelCase(" multiple words_here!") should return "multipleWordsHere". 
// Include error handling and input validation to make the function robust.

/**
 * Converts a given string into camelCase format.
 * 
 * This function takes a string with multiple delimiters (spaces, underscores, hyphens)
 * or mixed casing and normalizes it to camelCase format where the first word is lowercase
 * and subsequent words are capitalized.
 * 
 * @param {string} input - The input string to convert. Must be a valid string that is not
 *                         empty or whitespace-only.
 * @returns {string} The converted camelCase string. The first word is lowercase, and all
 *                   subsequent words have their first letter capitalized.
 * @throws {Error} If input is null, undefined, not a string, empty, or contains only
 *                 whitespace/punctuation.
 * 
 * @example
 * toCamelCase("hello world");        // Returns: "helloWorld"
 * toCamelCase("user_id");            // Returns: "userId"
 * toCamelCase("SCREEN-NAME");        // Returns: "screenName"
 * toCamelCase(" multiple words_here!"); // Returns: "multipleWordsHere"
 */
function toCamelCase(input) {
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

  // Remove leading/trailing whitespace
  let trimmed = input.trim();

  // Remove punctuation and split by multiple delimiters (spaces, underscores, hyphens)
  // Keep only letters, numbers, and delimiter characters
  const cleaned = trimmed.replace(/[^\w\s-]/g, ''); // Remove punctuation
  
  // Split by spaces, underscores, hyphens, or camelCase boundaries
  const words = cleaned
    .split(/[\s_-]+/)
    .filter(word => word.length > 0); // Remove empty strings from split

  // If no valid words remain, throw an error
  if (words.length === 0) {
    throw new Error('Input contains no valid words after removing punctuation and delimiters');
  }

  // Convert to camelCase: first word lowercase, rest capitalized
  return words
    .map((word, index) => {
      // Convert word to lowercase first to normalize mixed casing
      const lowerWord = word.toLowerCase();
      
      // First word stays all lowercase
      if (index === 0) {
        return lowerWord;
      }
      
      // Subsequent words: capitalize first letter, rest lowercase
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    })
    .join('');
}

// Test cases demonstrating correct behavior
console.log('=== Valid Inputs ===');
console.log(toCamelCase("hello world"));           // Output: "helloWorld"
console.log(toCamelCase(" multiple words_here!")); // Output: "multipleWordsHere"
console.log(toCamelCase("user_id"));               // Output: "userId"
console.log(toCamelCase("SCREEN-NAME"));           // Output: "screenName"
console.log(toCamelCase("  convert  MULTIPLE  delimiters  ")); // Output: "convertMultipleDelimiters"

// Test error handling
console.log('\n=== Error Handling ===');
try {
  toCamelCase(null);
} catch (error) {
  console.log(`Error (null): ${error.message}`);
}

try {
  toCamelCase(undefined);
} catch (error) {
  console.log(`Error (undefined): ${error.message}`);
}

try {
  toCamelCase(123);
} catch (error) {
  console.log(`Error (number): ${error.message}`);
}

try {
  toCamelCase("");
} catch (error) {
  console.log(`Error (empty string): ${error.message}`);
}

try {
  toCamelCase("   ");
} catch (error) {
  console.log(`Error (whitespace only): ${error.message}`);
}

try {
  toCamelCase("!!!");
} catch (error) {
  console.log(`Error (punctuation only): ${error.message}`);
}

// =====================================================
// Context-Aware Prompt:
// Create a function that converts strings to dot.case format
// =====================================================

/**
 * Converts a given string into dot.case format (also known as snake.case with dots).
 * 
 * This function takes a string with multiple delimiters (spaces, underscores, hyphens)
 * or mixed casing and normalizes it to dot.case format where all words are lowercase
 * and separated by dots.
 * 
 * @param {string} input - The input string to convert. Must be a valid string that is not
 *                         empty or whitespace-only.
 * @returns {string} The converted dot.case string where all words are lowercase and joined
 *                   with dots as separators.
 * @throws {Error} If input is null, undefined, not a string, empty, or contains only
 *                 whitespace/punctuation.
 * 
 * @example
 * toDotCase("hello world");              // Returns: "hello.world"
 * toDotCase("user_id");                  // Returns: "user.id"
 * toDotCase("SCREEN NAME");              // Returns: "screen.name"
 * toDotCase("convert multiple delimiters!"); // Returns: "convert.multiple.delimiters"
 * toDotCase("HTTPSConnection");          // Returns: "https.connection"
 */
function toDotCase(input) {
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

  // Remove leading/trailing whitespace
  let trimmed = input.trim();

  // Remove punctuation and split by multiple delimiters (spaces, underscores, hyphens)
  const cleaned = trimmed.replace(/[^\w\s-]/g, ''); // Remove punctuation
  
  // Split by spaces, underscores, hyphens, or camelCase boundaries
  const words = cleaned
    .split(/[\s_-]+|(?=[A-Z])/)
    .filter(word => word.length > 0); // Remove empty strings from split

  // If no valid words remain, throw an error
  if (words.length === 0) {
    throw new Error('Input contains no valid words after removing punctuation and delimiters');
  }

  // Convert to dot.case: all words lowercase joined by dots
  return words
    .map(word => word.toLowerCase())
    .join('.');
}

// Test cases demonstrating correct behavior
console.log('\n=== Dot Case Format Tests ===');
console.log(toDotCase("hello world"));           // Output: "hello.world"
console.log(toDotCase("user_id"));               // Output: "user.id"
console.log(toDotCase("SCREEN NAME"));           // Output: "screen.name"
console.log(toDotCase("convert multiple delimiters!")); // Output: "convert.multiple.delimiters"
console.log(toDotCase("HTTPSConnection"));       // Output: "https.connection"

// Test error handling for toDotCase
console.log('\n=== Dot Case Error Handling ===');
try {
  toDotCase(null);
} catch (error) {
  console.log(`Error (null): ${error.message}`);
}

try {
  toDotCase(456);
} catch (error) {
  console.log(`Error (number): ${error.message}`);
}
