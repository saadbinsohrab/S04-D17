const age = 21;

// if(age >= 18){
//     console.log('You Can Bia');
// }
// else{
//     console.log('You Are A Baby');
// }

age >= 18 ? console.log('You Can Bia') : console.log('Your Are A Baby');


// -------------2nd ternary-------------------

let price = 500;
const isLeader = false;
// if(isLeader===true){
//     price = price / 2;
// }
// else{
//     price += 100;
// }
// console.log(price);
price = isLeader === true ? price = price / 2 : price += 100;
console.log(price);