/* //filter

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


let s = spliceImp(k, -2, 1, 'May');

console.log(s); */


//slice
/* let f = ["HTML", "CSS", "JS", "Bootstrap"];

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
 */


//filter

/* function filterItem(array, func){
    let result = []
    for(i in array){
        if(func(array[i])){
           result.push(array[i]);
        }
    }
return result;
}

console.log(filterItem([1, 5, 3, 9, 4], item => item < 4)); */


//find

/* function findItem(array, func){
    let result = []
    for(i in array){
        if(func(array[i])){
           result.push(array[i]);
           break;
        }
    }
return result;
}

console.log(findItem([1, 5, 3, 9, 4], item => item === 5)); */

//some

/* function impSome(arr, func){
    for(i in arr){
        if(func(arr[i])){
            return true;
        }
    }

    return false;
}

console.log(impSome([1, 5, 10, 9, 4], item => item === 10)); */