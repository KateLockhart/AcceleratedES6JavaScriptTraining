// Importing needs the 'import' keyword and specific file path; in final iteration of project the file endings are not necessary as they will be routing paths
// import { keyValue } from "./external.js";
// import { test } from "./external.js";

// Can combine values from the same file like so and give aliases
// import { keyValue as key, test } from "./external.js";

// Due to using default with the export, destructuring is not needed. This can also be assigned a new name or alias.
// import ab from "./external.js";
// import a from "./external.js";

// Can structure an import to bring in both a default and other exported items, default must come first
// import a, { keyValue as key, test } from "./external.js";

// Importing everything that can be exported from a file using *, name assigned is now an object of the values/logic from the other file
import * as imported from "./external.js";

console.log(imported); // Results in an object

// console.log(key); // Result 1000
console.log(imported.keyValue); // Result 1000

// test();
imported.test();

// This functionality does not change or copy the values from external.js, but references the variable and their values as they change in the original instance
// console.log(key); // Result 2000
console.log(imported.keyValue); // Result 2000

// console.log(a);
// console.log(imported.ab);
