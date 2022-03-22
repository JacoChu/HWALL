const API = "https://jsonplaceholder.typicode.com/users"

//-------方法一
// const req =  new XMLHttpRequest()

// req.addEventListener("load", ()=>{
//     const ul = document.createElement("ul")

//     let users =JSON.parse(req.responseText)
//     users.forEach((user) => {
//         const li = document.createElement("li")
//         li.textContent= user.name
//         ul.appenChild(li)
//     })
//     document.querySelector("body").appendChild(ul)
// })

// //JSON.parse函式 ：將以 JavaScript 物件標記法 (JavaScript Object Notation，JSON) 表示的字串轉換成物件。
// req.open("GET", API)

// req.send()

//---------------方法二

// fetch(API)
// .then((resp)=>{  //若
//     return resp.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("fail---" +  err);
// })

//-------------方法三 async / await
async function getUsers(){
    const rawData = await fetch(API) //等它拿回來在做下一步
    const users = await rawData.json()
    users.forEach((user)=>{
        console.log(user.name);
    })
}

getUsers()