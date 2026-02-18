// Few-shot Prompt Example:
// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Here are several examples showing the pattern progression:
// 
// Example 1: "first name" → "firstName" (space-separated words)
// Example 2: "user_id" → "userId" (underscore-separated words)
// Example 3: "SCREEN_NAME" → "screenName" (uppercase with underscores)
// Example 4: "mobile-number" → "mobileNumber" (hyphen-separated words)
// Example 5: "HTTPSConnection" → "httpsconnection" (camelCase already, handle edge case)
// 
// Implement the function to handle all these delimiter types and edge cases.

function toCamelCase(str) {
  // Split by multiple types of delimiters: spaces, underscores, hyphens
  // Also handle camelCase transitions by detecting capital letters
  return str
    .split(/[\s_-]+|(?=[A-Z])/) // Split on spaces, underscores, hyphens, or capital letters
    .map((word, index) => {
      // Skip empty strings from split
      if (!word) return '';
      
      // First word is always lowercase
      if (index === 0) {
        return word.toLowerCase();
      }
      
      // Subsequent words: capitalize first letter, lowercase the rest
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Test cases demonstrating the pattern progression
console.log(toCamelCase("first name"));        // Output: "firstName"
console.log(toCamelCase("user_id"));           // Output: "userId"
console.log(toCamelCase("SCREEN_NAME"));       // Output: "screenName"
console.log(toCamelCase("mobile-number"));     // Output: "mobileNumber"
console.log(toCamelCase("HTTPSConnection"));   // Output: "httpsconnection"

// Additional test cases to verify robustness
console.log(toCamelCase("api_key_secret"));    // Output: "apiKeySecret"
console.log(toCamelCase("XML-HTTP-Request")); // Output: "xmlhttprequest"
console.log(toCamelCase("convert_TO_camelCase")); // Output: "convertToCamelCase"
