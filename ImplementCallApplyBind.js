//1.call-??

// Function.prototype.implementCall = function(context, ...args) {
//   context = context || globalThis;
//   let key = Symbol();
//   context[key] = this;
//   const result = context[key](...args);
//   delete context[key];
//   return result;
// }

// function foo(name) {
//   console.log(`Hello,${name}!${this.age}`);
// }

// let person = {
//   age: 20,
// };

// foo.implementCall(person, "A");

//2.apply-??

// //3.bind
// function foo(str) {
//   console.log(str + " " + this.name);
// }

// let person = {
//   name: "Mike",
// };

// function implementBind(func, context) {
//   return function (...args) {
//     return func.call(context, args);
//   };
// }

// let person1 = implementBind(foo,person);
// person1("Hello");
