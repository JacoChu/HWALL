// var a = 1
// var b = 2
// console.log(b)

// b = 2
// console.log(b)

// const  練習一
// const AGE = 3
// console.log(AGE)

// const 練習二
// const AGE = ["a", "b", "c"]
// AGE[1] = "x"
// console.log(AGE)

// // let 練習題
// let a = 123
// let b = a
// console.log(a, b)

// a = 456

// console.log(a, b)

// 型別介紹
// console.log(typeof 123)
// console.log(typeof "123")
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof [])
// console.log(typeof null)

// let a = 1
// // a += 1
// a++
// console.log(a)

// let username = "Jaco"

// // console.log("My name is " + username + ", and I am 18 years old")
// console.log(`my name is ${username} , and i am 18`)

// let a = 123
// let b = String(123)
// let c = Number("345")
// let d = Boolean(0)

// console.log(a, b, c, d)

/////// Flow control
// let age = 20

// if ((age = 18)) {
//   console.log("已成年")
// } else {
// //   console.log("小朋友")
// }
//三元運算子
// age >= 18 ? console.log("已成年") : console.log("未成年");

// let gender = 100

// switch (gender) {
//   case 1:
//     console.log("boy")
//     break

//   case 2:
//     console.log("girl")
//     break

//   default:
//     console.log("Don.t ask me")
//     break
// }

// let years = prompt("請輸入西元年份")

// if ((years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
//   console.log("閏年")
// } else {
//   console.log("平年")
// }

// for (var a = 20; a >= 0; a = a - 2) {
//   console.log(a)
// }

// for (var a = 20; a >= 0; a = a - 2) {
//   console.log(a)
// }

// //作業一 印出九九乘法
for (let a = 1; a < 10; a++) {
  for (let b = 1; b < 10; b++) {
    c = a * b
    // console.log(`${a} x ${b}= ${c}`)
    console.log(a + "X" + b + "=" + c)
  }
}

// // //作業二  印出直角三角形

// for (let a = 1; a <= 5; a = a + 1) {
//   console.log("*".repeat(a))
// }

// //  //作業三 印出三角形
// var star = "*"
// var space = " "
// for (var i = 1, u = 4; i < 10, u >= 0; i += 2, u -= 1) {
//   console.log(space.repeat(u) + star.repeat(i))
// }

// // 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 最終結果應該要印出 7

// const arr = [19, 5, 42, 2, 77]
// var min = Infinity
// var secondMin = Infinity
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     // console.log(arr[i]);
//     secondMin = min
//     min = arr[i]
//   } else if (arr[i] < secondMin) {
//     secondMin = arr[i]
//   }
// }
// sum = min + secondMin
// console.log(sum)

// const list = [19, 5, 42, 2, 77]
// list.sort((a, b) => a - b)
// // 若 a - b > 0 retutn 1 數字大的放後面，  a - b < 0 return -1 數字小的放前面，就可以排出從小到大的陣列
// const secondMin = list[1] //宣告陣列的第二個數值
// const min = list[0] //宣告陣列的第一個數值
// sum = min + secondMin // 將最小的兩個值相加，指定sum
// console.log(sum) //印出總和  2+5=7
