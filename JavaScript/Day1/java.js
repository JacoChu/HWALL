// //while loop介紹
// let a = 1

// while (a < 10) {
//   console.log(a)
//   a += 2
// }

// //for loop
// for (var i = 0; i < 10; i++) {
//   if (i > 5) break
//   console.log(i)
// }

// //function declaration 方法一
// function hello() {
//   console.log("鮮")
//   console.log("奶")
//   console.log("茶")
// }

// hello()

//  function expression 方法二 匿名函數 anonymous
// const hello = function () {
//   console.log(123)
// }

// hello()

//箭頭函式 arrow fn
// const hello = () => {
//   console.log(123)
// }

// hello()

// function sayHello(a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// sayHello(123, 456, 789)

// function sayHello(a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// sayHello(123, "a", "b")

// function sum(a, b) {
//   let result = a * b
//   return result
// }
// console.log(sum(2, 5))

// function add(a, b) {
//   if (a >= 0 && b >= 0) {
//     return a + b
//   } else {
//     return "err"
//   }
// }
// console.log(add(10, 20))
// console.log(add(-10, 20))

// function hello(a, b) {
//   if (a < 0 || b < 0) {
//     return "err"
//   }
//   return a + b
// }
// console.log(hello(10, -10))

// function bmi(weighy, height) {
//   let h = height / 100.0
//   let w = weighy
//   return (w / (h * h)).toFixed(2)
// }
// console.log(bmi(50, 170))

//leap Year
// function leapYear(year) {
//   return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
// }
// console.log(leapYear(100))

// let list = ["a", "b", "c"]

// list.push("d")
// list.push("e")
// //   可以將 push的內容加入list array中
// // list.pop可以將陣列中最後一個值抽出來 ，list.shift則是第一個值
// console.log(list)

// let list = ["a", "b", "c", "d"]
// list.splice(1, 2)
// console.log(list)

// function headAndTail(list) {
//   list.splice(1, list.length - 2)
//   return lsit
// }
// let a = [1, 2, 3, 4, 5]
// let b = ["a", "b", "c", "f", "k"]

// // ["a", "k"]
let a = [1, 2, 3, 4, 5]
let b = ["a", "b", "c", "f", "k"]
// function headAndTail(list) {
//   let list2 = [list[0], list[list.length - 1]]
//   return list2
// }
// console.log(headAndTail(a))
// function headAndTail(list) {
//   let first = list[0]
//   let last = list[list.length - 1]
//   let newList = [first, last]
//   return newList
// }
// console.log(headAndTail(a))

// const list = ["a", "b", "cddd", "d"]
// //  印出每一個陣列值
// //iteration 歷遍一
// // list.forEach(function (x) {
// //   console.log(x)
// // })

// //iteration 歷遍 將索引值印出來再陣列上
// // list.forEach(function (x, counter) {
// //   console.log(counter + 1, x) // counter是從 0 開始
// // })

//indexOf 印出引所值  /includes印出true or false
// find 一次只能找一個值，優點是比較明確可以知道裡面有沒有這個值，要自己跟他說你想要找什麼元素
//filter 可以一次找出所有的值
// const result = list.filter(function (x) {
//   return x.length > 3
// })
// console.log(result)

// const list = [1, 2, 3, 4, 5]
// let newlist = []
// for (let i = 0; i < list.length; i++) {
//   newlist[i] = list[i] * 2
// }
// console.log(newlist)

// const result = list.map(function (x) {
//   return x * 2
// })
// console.log(result)

// let list1 = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
// function moveZerosToEnd(x) {
//   let firstList = x.filter(function (x) {
//     return x !== 0 //用filter把不是0的值，做出一個陣列宣告為firstList
//   })
//   let lastList = x.filter(function (x) {
//     return x === 0 //把等於0的值，做出一個陣列宣告為lastList
//   })
//   return firstList.concat(lastList) // 將 數字只有0的陣列用concat接在最後面，回傳給moveZeroSToEnd
// }
// let result = moveZerosToEnd(list1)

console.log(result)
let list1 = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
function moveZerosToEnd(arr) {
  let firstList = x.filter(function (arr) {
    return arr !== 0 //用filter把不是0的值，做出一個陣列宣告為firstList
  })
  let lastList = x.filter(function (arr) {
    return arr === 0 //把等於0的值，做出一個陣列宣告為lastList
  })
  return firstList.concat(lastList) // 將 數字只有0的陣列用concat接在最後面，回傳給moveZeroSToEnd
}
let result = moveZerosToEnd(list1)

console.log(result)
