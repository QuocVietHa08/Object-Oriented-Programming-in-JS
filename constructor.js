//constructor function
// when we use contructor to make a new object we usually uppercase the first letter of the function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);
another.draw();