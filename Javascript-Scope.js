// Global Scope
let myName = "Raisha";
function greeting() {
  return myName;
}
console.log(myName); /*Output Raisha*/

// Local Scope
function greeting() {
  let myName = "Raisha";
  return myName; // Raisha
}
console.log(greeting()); /*Output Raisha */
console.log(
  myName
); /*Error tidak ada output karena myName tidak dapat ditentukan karena local scope */
