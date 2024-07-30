const isLeader = true;
let price = 5000;
// if(isLeader=== true){
//     if(price > 1000){
//         price /= 2;
//     }
//     else{
//         price +=0;
//     }
// }
// else{
//     price += 100;
// }
// console.log(price);

// price > 1000 ? price / 2 + 0
// price = isLeader === true ? 0 : price + 100;
price = isLeader === true ? price > 1000 ? price / 2: +0 : price + 100;
console.log(price);

