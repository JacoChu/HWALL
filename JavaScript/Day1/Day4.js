
// function numberToTWCurrency(amount) {
//     let digitUnit = ["拾", "百", "千" , "萬"]
//     let String =["零", "壹", "貳", "參", "肆", "伍", "陸", "柒", "捌", "玖"]
//     for (let i = 0 ; i <=  amount.length ; i++){
//         if ()
//     }
//   }
  
//   console.log(numberToTWCurrency(1450))    // 印出 壹仟肆佰伍拾圓整
//   console.log(numberToTWCurrency(817))     // 印出 捌佰壹拾柒圓整
//   console.log(numberToTWCurrency(9527))    // 印出 玖仟伍佰貳拾柒圓整
//   console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
//   console.log(numberToTWCurrency(1000001)) // 印出 壹佰萬零壹圓整

// let name ="kk"
// let age =18

// const cat ={
//     name,
//     age,
// }

// console.log(cat);

// const cat ={
//     name:"kk",
//     age:18
// }
// // let name = cat.name
// // let age =cat.age
// let { name: petname, age} = cat
// console.log(petname, age);


// function hello({name, age}){
//     console.log(name, age);
// }

// const hero = {
//     name:"yoyo",
//     age:19,
// }
// hello(hero)

// const a = [1, 2, 3]
// const b = [4, 5, 6]
// const c =[...a, ...b]
// console.log(c);

// function sayHello(x, y, z){
//     console.log(x, y, z);
// }
// //這個使用...將內容展開的方式也叫做slapt operator
// sayHello(...a)


// // 使用 slapt operator 也可以將剩下的參數中搜集成一個陣列，因為是搜集，所以必須是放在最後才行
// function hi(a, b, ...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// hi(1,2,3,4,5)


// if ( amount.length >= 1 ){
//     return ( igitUnit[0] )
// }

let digitunit =["元整","拾","佰","仟","萬","拾","佰","仟", "億","拾","佰","仟", "兆","拾","佰","仟", "京","拾","佰","仟"]; 
let num = ["零","壹","貳","參","肆","伍","陸","柒","捌","玖"];
let a = 1234;
let str_a=String(a);
let str = "";
// for(let i=str_a.length-1;i>=0; i--){
//     // console.log(parseInt(str_a[i]));
//     str = str + num[parseInt(str_a[str_a.length-1-i])]+ digitunit[i]
//     console.log(str);
// }
// console.log(str);

for(let i = 0 ; i <= str_a.length-1; i++){
    // console.log(parseInt(str_a[i]));
    str = str + num[parseInt(str_a[i])]+ digitunit[str_a.length-1-i]
    console.log(str);
    console.log(i);

}
