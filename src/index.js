// let let1 = "sizzle";
// console.log(let1);

// const message = `hello!,${let1}`
// console.log(message);
// const func1 = (a,b)=>{
//   return a+b;
// };
// console.log(func1(7,8));

const prime_order = ["kawakami", "abe", "sizzle", "ishibori", "tokoro"];

// const [one, two, three] = prime_order;

// const announce = `１番：${one},２番：${two},３番：${three},`;

// console.log(announce);

// const prime_order2 =  [...prime_order];

// prime_order2[1]= 'Hirano';

// const prime_order3 = prime_order.map((name) => {
//   return name.toUpperCase();
// })

// console.log(prime_order2);
// console.log(prime_order3);

// const score = [0,1,0,3,0,3,4,0,0];
// const countscore = score.filter((num)=>{
//   return  num > 0;
// }
// );

// console.log(countscore)

const num = "1400";
const formattedNum = typeof num === "number" ? num.toLocaleString() : "Error";
console.log(formattedNum);
