/*
    The Proxy API

    Proxy Usage: Proxy is a wrapper and go between for our data and properties creating a barrier/layer between them and our source code. Creates a trap of gets and sets so the data isn't directly accessed. 
*/

/*
        Traps in Action
        
        the Proxy() object expects two arguments ( the target object, the handler --> logic of our proxy/wrapper)

        The handlers are what contain and set the trap methods. You can also set default values or dummy data to return in instances where values are not yet defined or should not be disclosed.
*/

let person = {
  age: 29,
  name: "Kate",
};

/* 
This JS object can set all the trap methods, check MDN Docs for more examples, these methods are the same as the Reflect API methods. 

(object, nameOfProperty), the (target, name) used below are our parameters, thus are placeholders and variables for within the function. They are not referring to a legit property key of name. This allows us to pass any property to check and will give us the value if true or a 'Not found' error message if false.
*/
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : "Not found";
  },
  set: function (target, property, value) {
    if (value.length >= 2) {
      Reflect.set(target, property, value);
    } else {
      return "Not valid set value, must be 2 characters or more.";
    }
  },
};

var proxy = new Proxy(person, handler);

console.log(proxy.age); // 29
console.log(proxy.hobby); // Not found

/* 
    Proxies and Reflect

    In the above handler, Reflect.set() is added and used with a setter to create another trap for adding new properties.
*/

// This line fails the set case above, thus name's value remains Kate as shown in the console.log of line 52
proxy.name = "K";

console.log(proxy.name); // Kate

proxy.name = "Katelyn";

console.log(proxy.name); // Katelyn, name field is properly changed due to meeting the set conditions of the proxy

/*
    Using Proxies as Prototypes

    The Proxy can be used as a prototype to set the prototype inheritance change to use on other objects using the Reflect.setPrototypeOf().
*/

// Building a proxy off an empty object(no properties or fields)
let proxy2 = new Proxy({}, handler);

console.log(proxy2.name); // Not found, literally just an empty object at the moment

// Changing the prototype of person to proxy2 giving it the handler protection
Reflect.setPrototypeOf(person, proxy2);

console.log(person.name); // Katelyn
console.log(person.hobby); // Not found

/*
    Using Proxies as Proxies

    Proxies can wrap proxies to create multiple layers of traps.
*/

let protoHandler = {
  get: function (target, name) {
    return name in target ? target[name] : "Not found";
  },
};

let protoProxy = new Proxy(proxy2, protoHandler);

Reflect.setPrototypeOf(person, protoProxy);

console.log(person.hobby); // Not found
console.log(person.name); // Katelyn

/*
    Wrapping Functions with Proxies

    This can create traps prior to accessing functions.
*/

function log(message) {
  console.log(`Log entry created, message: ${message}`);
}

// log('Hello!'); // Log entry created, message: Hello!

let fnHandler = {
  apply: function (target, thisArg, argumentsList) {
    if (argumentsList.length == 1) {
      return Reflect.apply(target, thisArg, argumentsList);
    }
  },
};

let proxy = new Proxy(log, fnHandler);

proxy("Hello"); // Log entry created, message: Hello

proxy(10, "lol", 7); // Nothing happens for this line of code because it does not pass the proxy handler fn

/*
    Revocable Proxies

    Can construct but remove and deactivate the proxy.

    Constructed with Proxy.revocable(obj, handler) with arguments of the target object and the handler function. Can then use and access the revoke function to remove the proxy.
*/

let human = {
  name: "Kate",
};

let exHandler = {
  get: function (target, property) {
    return Reflect.get(target, property);
  },
};

// Declared using deconstruction to access Proxy revocable's proxy and revoke field. Does not have to be deconstructed, but it makes it even more accessible.
let { proxy, revoke } = Proxy.revocable(human, exHandler);

console.log(proxy.name); // Kate

// the revoke function from line 139 being called to remove the proxy.
revoke();
console.log(proxy.name); // Creates error as it the proxy has been revoked
