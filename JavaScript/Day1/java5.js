// const d = document.getElementById("cc")
// 針對選取器名稱抓取
// const c = document.querySelector("#list :nth-child(2)")
// querySelctor 可以針對標籤名稱直接抓取，優點是方便閱讀
// // const item1 = document.getElementsByClassName("item")
// const items = document.querySelectorAll(".item")
// //在nodeList中可以使用forEach方法
// // console.log(item1)

// items.forEach((item) => {
//   //   console.log(item2)
//   item.textContent = item.textContent.repeat(5)
// })
// // textContent 把每一個item中的元素取出

// const items = document.querySelectorAll(".item")

// // w.innerHTML = "<h1>444</h1>"
// // // w.textContent = "<h1>555</h1>"
// // w.style.color = "red"
// // w.style["background-color"] = "green"
// items.forEach((item, i) => {
//   if (i % 2 === 0) {
//     item.classList.add("list")
//   }
// })
// items.classList.add("list")

// document.addEventListener("DOMContentLoaded", function () {})

// const h = document.querySelector("#hello")
// //  方法一
// // h.addEventListener("click", function () {
// //   console.log("點了")
// // })

// // 方法二
// const hey = function () {
//   console.log("點了")
// }
// h.addEventListener("click", hey)

//高階函數（式）
// Higher-Order Function
//1. 接別的函數當參數/引數
//2. 可以回傳一個函數

// function a() {
//   const b = function () {
//     console.log(123)
//   }
//   return b
// }

const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   console.log("yes")
// })

// //侵入式
// btn.onclick = function () {
//   console.log("點點")
// }

//停止預設行為，例如用超連結換頁
btn.addEventListener("click", function (e) {
  e.preventDefault()
  console.log("hi")
})
