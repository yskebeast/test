import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// 分割代入
// const mypro = {
//   name: "yusuke",
//   age: 28
// };

// const {name, age} = mypro

// const message = `my name is ${name}. im ${age} years old`;
// console.log(message)

// const mypro2 = ['yusuke', 28]

// const [name2, age2] = mypro2
// const message2 = `my name is ${name2}`
// console.log(message2)

// スプレット構文
const arr1 = [1, 2];
// console.log(arr1)
// console.log(...arr1)

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
// console.log(num1)
// console.log(num2)
// console.log(arr3)

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(arr6)

const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// mapやfilterを使った配列

const namearr = ["yamada", "tanaka", "tani"];
// for (let i = 0; i < namearr.length; i++) {
//   console.log(`${i + 1}番目は${namearr[i]}です`)
// }

// namearr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const newnamearr = namearr.map((name) => {
  if (name === "tani") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newnamearr);

// const namearr2 = namearr.map((name) => {
//   return name
// })
// console.log(namearr2)

// const numarr = [1,2,3,4,5]
// const newnumarr = numarr.filter((num) => {
//   return num % 2 === 1
// })
// console.log(newnumarr)

// || は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定";
console.log(fee);

// && は左側がtrueなら右側を返す
const numm2 = 100;
const feee2 = numm2 && "なにか設定されましたか";
console.log(feee2);
