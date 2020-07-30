let product = 1;
function exponetValue(base,num){
    if(num==false){
        return product
    }
    else{
        return base * exponetValue(base,num-1);

    }
}
console.log(exponetValue(3,2));

document.write("test works")

