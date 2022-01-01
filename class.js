//getters and setters

class Square {
    constructor(width){
        this.width=width

    }
    //The get syntax binds an object property to a function that will be called when that property is looked up.
    get area (){
        return this.width * this.width
    }
    set area (area){
        this.width= Math.sqrt(area)

    }
}

let square1 = new Square(5)
square1.area=81 
// this is to set the area, this is used to change variables The set syntax binds an object property to a function to be called when there is an attempt to set that property.
console.log(square1.width)
console.log(square1.area)