function recurIndex(str){
    let result = {};
    if(!str){
        return result;
    }
    else{
    let arr = str.split("");
    let e = [];
   
    
    for(i of arr){
        if(!e.includes(i)){
          e.push(i); 
           } else {
         e.push(i);
         result[i] = [arr.indexOf(i), e.length - 1];
         break;
        }
    }
    if(!str){
        result = {};
    } else 
    return result;
}
}

console.log(recurIndex("AREDCBSDERD"));
   
