// One-shot Prompt Example:
// Write a function called convertToCamelCase that takes a string with words 
// separated by spaces or hyphens and converts it to camelCase format.
// For example: convertToCamelCase("hello-world-example") should return "helloWorldExample"
// and convertToCamelCase("the quick brown fox") should return "theQuickBrownFox"

function convertToCamelCase(str) {
  return str
    .split(/[\s-]+/) // Split by spaces or hyphens
    .map((word, index) => {
      // First word stays lowercase, rest are capitalized
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Test the function with the examples from the prompt
console.log(convertToCamelCase("hello-world-example")); // Output: "helloWorldExample"
console.log(convertToCamelCase("the quick brown fox")); // Output: "theQuickBrownFox"
console.log(convertToCamelCase("javascript-is-awesome")); // Output: "javascriptIsAwesome"
