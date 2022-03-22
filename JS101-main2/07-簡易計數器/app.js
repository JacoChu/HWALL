// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded", function () {
  const a = document.querySelector("#minus")
  const b = document.querySelector("#plus")
  const c = document.querySelector("#counter")

  a.addEventListener("click", function () {
    if (counter.value > 0) {
      counter.value = Number(counter.value) - 1
    }
  })

  b.addEventListener("click", function () {
    counter.value = Number(counter.value) + 1
  })
})
