/*
    Maps - new collection object type in ES6

    A map is a collection that maps key value pairs in order to store objects in a map and assign them unique keys to identify them to retrieve and manage the objects

    - .set method: used to set the key and object pairs of the map, first argument is the unique identifier and the second is the object you want to assign to it
    - .size property: the # of key value pairs in the map
    - .get method: how to retrieve data from the map, .get() is passed the maps key/unique identifier for the object you want to pull
    - .delete method: takes argument of a key and removes the key and object pair from the map
    - .clear method: clears all key/object pairs from the map 
    - .keys method: a map iterator that returns keys, can be used with a loop to extract each key value
    - .values method: a map iterator that returns the map's values(objects), can be used with a loop to extract each object value
    - .entries method: a map iterator that returns both the unique identifier and object pair of the map, each entry set is stored as it's own array
*/

let cardAce = {
  name: "Ace of Spades",
};

let cardKing = {
  name: "King of Clubs",
};

// Initializing the deck as a new Map object
let deck = new Map();
// storing the objects in our map "deck" with the .set method to set key value pairs so each object is assigned to a unique key
deck.set("as", cardAce);
deck.set("kc", cardKing);

/* Side note:
Another way to construct our new Map object is as follows: 
    Via passing a nested array to the constructor with arrays of the unique key and objects assigned to them; a shorter one line version of above

    let deck = new Map([ ['as', cardAce], ['kc', cardKing] ]);
*/

/* Result of the below console.log:
  Map(2) {
    'as' => { name: 'Ace of Spades' },
    'kc' => { name: 'King of Clubs' }
  }
*/
console.log(deck);
console.log(deck.size); // 2, the size property is the number of key value pairs within the map

// .get()
// console.log(deck.get("as")); // { name: 'Ace of Spades' }

// .delete()
// deck.delete("as"); // removing the key/object pair of the Ace
// console.log(deck); // Map(1) { 'kc' => { name: 'King of Clubs' } }

// .clear()
// deck.clear(); // removing all contents of the map
// console.log(deck); // Map(0) {}

// .keys()
console.log(deck.keys()); // [Map Iterator] { 'as', 'kc' }

// as
// kc
for (key of deck.keys()) {
  console.log(key);
}

// .values()
console.log(deck.values()); // [Map Iterator] { { name: 'Ace of Spades' }, { name: 'King of Clubs' } }

// { name: 'Ace of Spades' }
// { name: 'King of Clubs' }
for (value of deck.values()) {
  console.log(value);
}

// .entries()
/* Result of console.log below:
  [Map Entries] {
    [ 'as', { name: 'Ace of Spades' } ],
    [ 'kc', { name: 'King of Clubs' } ]
  }
*/
console.log(deck.entries());

// using .entries with a loop to grab the identifier and object of each map pair, each entry is stored as an array. DOES NOT NEED TO BE USED for this as a loop itself will do the same thing
// [ 'as', { name: 'Ace of Spades' } ]
// [ 'kc', { name: 'King of Clubs' } ]
for (entry of deck.entries()) {
  console.log(entry);
}
// does the same thing as above
// for (entry of deck) {
//   console.log(entry);
// }
