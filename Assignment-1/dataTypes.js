// Assignment: Data Type Practice

// 1. string
const fullName = "FS Nirjhor";

// 2. number
const age = 21;

// 3. boolean
const isStudent = true;

// 4. array
const hobbies = ["reading", "learning", "watching movies"];

// 5. object
const address = {
  street: "Shundarmohol to Baroaria road",
  city: "Khulna",
  country: "Bangladesh",
};

// 6. print 
console.log(`My name is ${fullName}`);

console.log(`I am ${age} years old.`);

console.log(`I am a student ${isStudent}.`);

console.log(`My hobbies are ${hobbies}.`);

// object destructuring 
const { street, city } = address;
console.log(`I live at ${street}, ${city}, ${address.country}.`);
