// const aa = () => {
//   console.log("welcome to CSB");
// };
// aa();

const isEven = (n) => {
  return n % 2 == 0 ? "Even" : "Odd";
}

// console.log(isEven(10));
isEven(10);

const reverse = (str) => str.split("").reverse().join("");

console.log(reverse("hello"));

let name="AJ"
let age =88;

let str="My name is "+name+" and my age is "+age;
console.log(str);