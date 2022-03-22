// //get odd
// const list = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10]

// const list2 = list.filter(function (x) {
//   return x % 2 == 1
// })
// console.log(list2)

// const list = [1, 2, 3, 4, 5]
// //cv = 目前的值  acc = 累加的值 ，每一輪的acc是上一輪的回傳值
// let a = list.reduce(function (acc, cv) {
//   return acc + cv
// })

// console.log(a)
// //----

// let total = 0
// list.forEach(function (i) {
//   total = i + total
// })

// console.log(total)

//---function每一回合的return變成下一回合的acc
// 沒預設值的話，拿第一個元素當預設值，少跑一圈
// const arr = [19, 24, 23, 35, 41, 2]

// let b = arr.reduce(function (acc, cv) {
//   if (cv > acc) {
//     return cv
//   }
//   return acc
// })
// console.log(b)

//屬性 行為
// const cat = {
//   age: 50,
//   name: "yoyo",
//   attack: function () {
//     console.log("go!")
//   },
// }
// // console.log(cat)
// // cat.name = "cc"
// // console.log(cat.name)
// // console.log(cat.age)

// cat.attack()

// const cat = {
//   age: 18,
//   cc: 123,
// }

// console.log(cat)
// delete cat.age
// //刪除屬性
// console.log(cat)

//DOM  瀏覽器將HTML的標籤變成物件之後 Javascript再去抓取物件
