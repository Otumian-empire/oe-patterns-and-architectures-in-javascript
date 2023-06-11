/**
 * Javascript modules: TYLERMCGINNIS.COM
 * Every complex item is built using small individual parts
 * that can replaced with another (reusability)
 * Each piece, has a specific function and how it is used (interfaced)
 * in the complex item (composability)
 * Leverage, Isolation, Organization
 *
 * Every module has three different parts
 * 1. imports (dependencies): one module depends on another so it imports it
 * 2. code
 * 3. exports (interface to the modules): how the module is used
 *
 * To kind of standardize the module we can:
 * - Make modules File based (a modules per file)
 * - use explicit import
 * - use explicit exports
 *
 * The CommonJS group defined a modular format that makes sure that
 * each module is executed in its own namespace by exposing properties
 * and functions needed to be exposed
 */

// dependencies
// currently there are no dependencies

// code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // refactor to its own module
    /* this.getDateOfBirth = function () {
      return new Date().getFullYear() - Number(this.age);
    }; */

    this.getName = function () {
      return this.name;
    };
  }
}

// this class may have its own file
class BirthDay {
  constructor(age) {
    this.age = age;
  }

  getDateOfBirth() {
    return new Date().getFullYear() - Number(this.age);
  }
}

// export/Interface
// export default Person;
