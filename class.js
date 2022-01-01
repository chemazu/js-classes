// classes are used to create objecs
class Rectangle{
    //setup
    constructor(width,height,color){

        console.log("create my rectangle ")
        this.width=width
        this.length=height
        this.color=color
        //the this keyword refers to the object created



    }
    getArea(){
        return this.width * this.length
    }
    printDescription(){
        console.log (`i am a  ${this.color} rectangle of width ${this.width} and length of  ${this.length}`)
    }
//constructors are ran when the object is being created

}
let myRectangle =new Rectangle(5,3,"indigo")
let myRectangle2 =new Rectangle(2,4,"purple")

console.log(myRectangle2.getArea())
myRectangle2.printDescription()