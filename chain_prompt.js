/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {Error} If input is not a valid string
 */
function toKebabCase(input) {
    // Error handling: validate input type
    if (typeof input !== 'string') {
        throw new Error(
            `Invalid input type: expected string, received ${typeof input}. ` +
            `Input must be a valid string, not ${input === null ? 'null' : typeof input}.`
        );
    }

    // Normalize the string:
    // 1. Replace underscores and punctuation with spaces
    // 2. Convert to lowercase
    // 3. Trim and replace multiple spaces with single space
    // 4. Replace spaces with hyphens
    const normalized = input
        .replace(/[_\W]+/g, ' ')        // Replace underscores and non-word chars with spaces
        .toLowerCase()                   // Convert to lowercase
        .trim()                         // Remove leading/trailing spaces
        .replace(/\s+/g, '-');          // Replace multiple spaces with hyphens

    return normalized;
}

// Example usage:
console.log(toKebabCase("Hello World"));                    // "hello-world"
console.log(toKebabCase(" multiple Words_here!"));          // "multiple-words-here"
console.log(toKebabCase("CamelCaseString"));                // "camelcasestring"
console.log(toKebabCase("kebab-case-string"));              // "kebab-case-string"

// Error handling examples:
try {
    toKebabCase(null);
} catch (error) {
    console.error(error.message);
}

try {
    toKebabCase(123);
} catch (error) {
    console.error(error.message);
}

module.exports = toKebabCase;