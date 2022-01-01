//static Methiods: this methods are called with the keyword "static", they dont need an instance to be called to be use see below

class Square {
    constructor(width){
        this.width=width

    }
    static egg (){
        console.log("i am a static function")
    }
}

let square1 = new Square(5)
//  square1.egg() throws an error of "TypeError: square1.egg is not a function"
Square.egg()
