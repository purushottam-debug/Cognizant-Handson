function OrderCake(str) {
    let w =parseInt(str.substring(0,4))/1000;
    let item=str.substring(4,str.length-3);
    let on = str.substring(str.length-3,str.length);
    let price=(450*w).toFixed();
    var result = "Your order for "+w.toFixed()+" kg "+item+" cake has been taken. You are requested to pay Rs. "+price+" on the order no "+on;
    return result;
    
}
