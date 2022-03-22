// const list = [1, 2, 3, 4, 5]
// const newList = list.filter(function (x) {
//   return x % 2 == 1
// })
// console.log(newList)

// let total = 0

// list.forEach((x) => {
//   total = total + x
// })
// console.log(total)

//reduce
// const list = [12, 15, 13, 656, 10]

// let a = list.reduce(function (acc, cv) {
//   if (cv > acc) {
//     return cv
//   } else {
//     return acc
//   }
// })
// console.log(a)

// let a = [1, 2, 3]
// let b = a
// console.log(b)

// b[0] = "x"
// console.log(b)
// console.log(a)

// const items = document.querySelectorAll(".item")

// items.forEach(function (item, i) {
//   if (i % 2 == 0) {
//     item.classList.add("hi")
//   }
// })
function humanReadableTimer(seconds) {
  let sec = Math.floor(seconds % 60)
  //用餘數的方式，可以顯示出小於59的數字
  let minute = Math.floor((seconds % 3600) / 60)
  // ％3600 讓剩下顯示的秒數都是小時以內，然後然後除以60可以得到分鐘，使用使用Math.floor()得到整數值
  let hour = Math.floor(seconds / 3600) // 使用Math.floor()回傳整數值
  newSec = sec.toString()
  newMin = minute.toString()
  newHour = hour.toString()
  // 因為 padStart方法只能使用在字串上 ，所以先將數字轉成字串
  return (
    newHour.padStart(2, "0") +
    ":" +
    newMin.padStart(2, "0") +
    ":" +
    newSec.padStart(2, "0")
  )
}
console.log(humanReadableTimer(0)) // 印出 00:00:00
console.log(humanReadableTimer(59)) // 印出 00:00:59
console.log(humanReadableTimer(60)) // 印出 00:01:00
console.log(humanReadableTimer(90)) // 印出 00:01:30
console.log(humanReadableTimer(3599)) // 印出 00:59:59
console.log(humanReadableTimer(3600)) // 印出 01:00:00
console.log(humanReadableTimer(45296)) // 印出 12:34:56
console.log(humanReadableTimer(86399)) // 印出 23:59:59
console.log(humanReadableTimer(86400)) // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59


function decodeMorse(code){
  if (code === "·-") return "A";
  if (code === "-···") return "B";
  if (code === "-·-·") return "C";
  if (code === "-··") return "D";
  if (code === "·") return "E";
  if (code === "··-·") return "F";
  if (code === "--·") return "G";
  if (code === "····") return "H";
  if (code === "··") return "I";
  if (code === "·---") return "J";
  if (code === "-·-") return "K";
  if (code === "·-··") return "L";
  if (code === "--") return "M";
  if (code === "-·") return "N";
  if (code === "---") return "O";
  if (code === "·--·") return "P";
  if (code === "--·-") return "Q";
  if (code === "·-·") return "R";
  if (code === "···") return "S";
  if (code === "-") return "T";
  if (code === "··-") return "U";
  if (code === "···-") return "V";
  if (code === "·--") return "W";
  if (code === "-··-") return "X";
  if (code === "-·--") return "Y";
  if (code === "--··") return "Z";
}

console.log(decodeMorse("..   .-.. --- ...- .   -.-- --- ..-"))  // 印出 I LOVE YOU
console.log(decodeMorse("... --- ..."))  // 印出 SOS

