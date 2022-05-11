//filter

function spliceImp(arr, a, b, c){
    
    let result = [];
    if(a > 0){
        for(i = 0; i < a; i++){
            result.push(arr[i]);
         }
         if(c){
           result =  result.concat([c]);
         }
         
         for(i = a + b; i < arr.length; i++){
             result.push(arr[i]);
         }
        
    }

  

   else if(a < 0){
        for(i = 0; i < arr.length + a; i++){
               result.push(arr[i]);
       }
       if(c){
        result = result.concat([c]);
    }
    for(i = arr.length + a + b; i < arr.length ; i++){
        result.push(arr[i]);
    }
   }
    
return result;
}


let f = ["HTML", "CSS", "JS", "Bootstrap"];
k = ["Jan", "Feb", "March", "April", "June"];
/* let g = f.splice(-2, 0, 'React');
console.log(f);
let h = f.splice(3, 2, 'React');
console.log(f); */
//let s = k.splice(3, 2, 'React');
let s = spliceImp(k, -2, 1, 'May');
//let s = k.splice(-2, 1, 'May');
console.log(s);


//slice
function sliceImp(arr, a, b){
    let result = [];

    if(a >= 0){
    for(i=a; i<b; i++){
        result.push(arr[i]);
    }
    }
    else{
        for(i = arr.length + a; i < arr.lenght + a + b - 1; i++){
            result.push(arr[i]); 
        }
    }

return result;
}


console.log(f.slice(-3, 2));



//find



