const addBtn = document.querySelector("#addBtn")
const taskInput = document.querySelector("#taskInput")
const todoList = document.querySelector(".todo-list")
const section = document.querySelector("section")
console.log(section);

addBtn.addEventListener(("click"),todo)

taskInput.addEventListener(("keyup"),(event)=>{
    if (event.which === 13){
       todo()
    }
})

function todo (){
    if (taskInput.value != ''){
    const newLi = document.createElement("li")
    const item = document.createElement("span")
    const closeBtn = document.createElement("button")

    newLi.classList.add("todo-item")
    item.classList.add("item")
    closeBtn.classList.add("closeBtn")

    todoList.appendChild(newLi)
    newLi.appendChild(item)
    newLi.appendChild(closeBtn)

    item.textContent = taskInput.value
    closeBtn.textContent = "X"
    todoList.insertAdjacentElement("afterbegin", newLi)
    taskInput.value = ''
    
    closeBtn.addEventListener(("click"), ()=>{
        newLi.remove()
    })
    }else{
        alert("請輸入內容")
    }
}