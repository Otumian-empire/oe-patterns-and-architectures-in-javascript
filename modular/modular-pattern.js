/* 
Modular pattern using the IIFE's and use let/const instead of var
Remove variables from the global scope to avoid naming collisions

Use an IIFE/a function that returns an object with defined attributes
and methods, creating a scope-like-private impression of the data/variables
involved. Here we encapsulate the attributes/data of the object/element that
we define

*/

// function constructor
function Human(name, age) {
  this.name = name;
  this.age = age;

  this.getDateOfBirth = function () {
    return new Date().getFullYear() - Number(this.age);
  };

  this.getName = function () {
    return this.name;
  };
}

// class: which is the same as the above
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.getDateOfBirth = function () {
      return new Date().getFullYear() - Number(this.age);
    };

    this.getName = function () {
      return this.name;
    };
  }
}

// we are able to access the attributes of the objected we create of the class/constructor
// const thisHuman = new Human("Derrick", 34);
// console.log(thisHuman.age);
// console.log(thisHuman.name);
// console.log(thisHuman.getDateOfBirth());
// console.log(thisHuman.getName());

// const thisClass = new Person("Lewis", 36);
// console.log(thisClass.age);
// console.log(thisClass.name);
// console.log(thisClass.getDateOfBirth());
// console.log(thisClass.getName());

const Animal = (function () {
  let value = 0;

  // this function is closed to the outside, just like value
  function addOne() {
    return value + 1;
  }

  return {
    val: value,
    // we created a closure here. As the function was called,
    // the current value of value was 0 which was saved/set as the function as called
    inc: function () {
      value += 1;
      console.log("Increased: " + value);
    },
    dec: function () {
      value += 1;
      console.log("Decreased: " + value);
    },
    getValue: () => value, // This function gets the latest value of value and returns it
    setValue: (val) => {
      value = val;
    },
    resetValue: () => {
      value = 0;
    },
    incByOne: addOne,
    // this is called the revealing pattern: we reveal the public function, `addOne`
    // incByOne is a property that can be overridden
  };
})();

// console.log(Animal.val);
// Animal.inc();
// Animal.inc();
// Animal.inc();
// console.log(Animal.val);
// console.log(Animal.getValue());
// Animal.setValue(14);
// Animal.inc();

// console.log(Animal.getValue());
// Animal.dec();
// console.log(Animal.getValue());
// Animal.resetValue();
// console.log(Animal.getValue());
