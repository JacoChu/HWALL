// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const weight = document.querySelector("#bodyWeight")
const height = document.querySelector("#bodyHeight")
const btn = document.querySelector("#btn")
const result = document.querySelector("#resultText")

btn.addEventListener("click",function(){
  let h = Number((height.value)/100)
  let r = Number((weight.value)/(h*h))
  result.textContent = r.toFixed(2)
})