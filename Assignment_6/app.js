var personName = "\tKarl\nMark\n";
console.log(personName);
console.log(personName.trim()); //It will remove whitespaces from staring and ending only.
var noWhitespace = personName.replace(/\s+/g, '');
console.log(noWhitespace); // Prints "KarlMark"
// string.replace(pattern, replacement)
// It wil\s: A special character in regex that matches any whitespace character.
// +: A quantifier that matches one or more occurrences of the preceding element (in this case, any whitespace character).
// g: A flag that stands for "global," meaning the regex should match all occurrences of the pattern in the string, not just the first one.
//The empty string ('') is used as the replacement value, meaning that all matches of the pattern will be replaced with nothing, effectively removing them.
