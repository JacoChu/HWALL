// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     c = i * j
//     console.log(i + "x" + j + "=" + c)
//   }
// }

// for (let a = 1; a <= 5; a++) {
//   console.log("*".repeat(a))
// }

// for (let a = 1, u = 4; a < 10, u >= 0; a += 2, u -= 1) {
//   console.log(" ".repeat(u) + "*".repeat(a))
// }

let arr = ["a", "b", "c", "d", "f", "g"]
for (let a = 1; a < arr.length; a++) {
  // 因為要後面減前面，所以宣告 a = 1
  if (arr[a].charCodeAt() - arr[a - 1].charCodeAt() > 1)
    //轉成 Unicode編碼
    console.log(String.fromCharCode(arr[a].charCodeAt() - 1))
  //將大於一的數字 -1 ，把數字轉成字串即可印出 e
}
