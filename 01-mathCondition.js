var price = 200;

if(price >= 500){
   var discount = price * 10 / 100;
   var ammount = price - discount
    console.log(ammount);
}
else if (price >= 300){
    var discount = price * 5 / 100;
    var ammount = price - discount;
    console.log(ammount);
}

else{
    console.log(price);
}
