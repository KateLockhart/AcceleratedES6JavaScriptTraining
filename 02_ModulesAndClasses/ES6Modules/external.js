// Export keyword to make available to other files
// ex: export let keyValue = 1000;

let keyValue = 1000;

function test() {
  keyValue = 2000;
  console.log("Exported function being tested!");
}

let ab = "some text";

// Can export entire contents of file like so:
export { keyValue, test, ab };
// Exporting with the default keyword will allow for directly accessing values upon import
// A file can only have one default
// export default ab;
