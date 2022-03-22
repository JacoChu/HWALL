// const box =document.querySelector("#hello")

// const h = document.createElement("h1")
// h.textContent="hello"
// console.log(h);

// box.appendChild(h)

// const btn= document.querySelector("#btn")

// btn.addEventListener("click",()=> {
//     const lastOne = document.querySelector("#list :last-child")

//     if(lastOne){ 
//      lastOne.remove()
//     }
//     // console.log(lastOne);
// })

// btn.addEventListener("click",()=> {
//     const lastOne = document.querySelector("ul :last-child")
    
//     console.log(lastOne.previousElementSibling);//取得上一個值
//     console.log(lastOne.previousSibling);
//     console.log(lastOne.nextElementSibling);
//     console.log(lastOne.nextSibling);
// })

//---------

// const list =document.querySelector("#list")

// const newLi = document.createElement("li")
// newLi.textContent= "x"

// const newLi2 = document.createElement("li")
// newLi2.textContent= "y"

// const newLi3 = document.createElement("li")
// newLi3.textContent= "w"

// const newLi4 = document.createElement("li")
// newLi4.textContent= "v"

// // begin是在起始插入，end是在最後插入

// list.insertAdjacentElement("beforeend", newLi)
// list.insertAdjacentElement("beforebegin", newLi2)
// list.insertAdjacentElement("afterend", newLi3)
// list.insertAdjacentElement("afterbegin", newLi4)

//--------

const list =document.querySelector("#list")
let msg = "x"
const newLi = `<li> <div>  ${msg} </div>  </li>`

list.insertAdjacentHTML("afterbegin", newLi)


//--------