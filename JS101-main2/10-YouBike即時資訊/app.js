const keyword = document.querySelector("#searchKeyword")
const btn = document.querySelector(".btn")
const ul = document.querySelector(".siteList")
const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"  

btn.addEventListener("click",(event)=>{
    event.preventDefault() //停止預設行為
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    async function getPost(address){
        const data = await fetch(API)
        const arrData = await data.json()
        const getArr = arrData.filter((x)=>{
            return  (x.ar).includes(address) 
        }) 
        if (keyword.value !== ''){
            getArr.forEach((e)=>{
                const item = `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>${e.sna.replace("YouBike2.0_","")}(${e.sbi})
                <br>
                <small class="text-muted">${e.ar}</small>
                </li>`
                ul.insertAdjacentHTML("afterbegin",item )
            }) 
        }
    }
    
    getPost(keyword.value)
})

