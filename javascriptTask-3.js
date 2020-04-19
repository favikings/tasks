
function divisibleNumber (num){

    let replace = [];

    for (var i = 1; i<= num; i++){
        // let replacer = "";

        if(i % 2 ===0 && i % 3 === 0 && i % 5 === 0){
             replace.push("yu-gi-oh")
        }else if(i % 3 === 0 && i % 5 === 0){
            replace.push("gi-oh");
        }else if(i % 2 === 0 && i % 5 === 0){
            replace.push("yu-oh");
        }else if(i % 2 === 0 && i % 3 === 0){
            replace.push("yu-gi");
        }else if(i % 5 === 0){
            replace.push("oh");
        }else if(i % 3 === 0){
            replace.push("gi");
        }else if(i % 2 === 0){
            replace.push("yu");
        }else{
            replace.push(i);
        }
    
    
    }
    return replace;
    
    
    
}

console.log(divisibleNumber(100));
console.log("====================")
console.log(divisibleNumber(30));
