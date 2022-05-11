function Calccircle(r){
    this.r = r;
    
    this.getArea = function(){

        return Math.PI*Math.pow(r, 2);
    }
    this.getPerimeter = function(){
        return Math.PI*2*r;
    }
}

let circle = new Calccircle(4);
console.log(circle.getArea());
console.log(circle.getPerimeter());

