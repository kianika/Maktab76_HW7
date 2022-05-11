//Approach 1
function listInt(array){
    let result = [];
    for(item of array){
        let s = item.split("");
        for(n of s){
            if(Number.isInteger(parseInt(n))){
                result.push(item);
                break;
            }
        }
    }
    return result;
}
let arr = ["g3jg", "hghg", "gfdfdf7"];
console.log(listInt(arr));




//Approach 2
/* let arr = ["g3jg", "hghg", "gfdfdf7"];

let listInt = (str) => str.filter(x => /[0-9]/.test(x));  
 
console.log(listInt(arr));  */

