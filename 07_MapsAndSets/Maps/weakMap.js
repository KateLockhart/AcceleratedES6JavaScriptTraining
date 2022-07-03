/*
    WeakMap object

    WeakMap keys can only be a JS object, not a primitive like a string or number; it holds weak references to the entries within the map. By using objects as keys, it can keep track of those object keys and get rid of or delete entries from the map that has objects that are not used. WeakMap can free up memory due to the self deletion so data garage collection is easier.

    WeakMaps are un-iterable since the size of the WeakMap is constantly changing.

    WeakMaps cannot use all map methods, but .get() is used to grab the data stored that is needed.
*/

let cardAce = {
  name: "Ace of Spades",
};

let cardKing = {
  name: "King of Clubs",
};

let key1 = { a: 1 };
let key2 = { b: 2 };

let deck = new WeakMap();

deck.set(key1, cardAce);
deck.set(key2, cardKing);

console.log(deck); // WeakMap { <items unknown> }

console.log(deck.get(key1)); // { name: 'Ace of Spades' }
