// Task 3:
// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
// Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.
// Create an instance of the 'Circle' class and calculate its area.Similarly, do the same for
// the 'Triangle' class.

class Shape{
    area(){}
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }

    area(){
        return Math.PI * this.radius **2
    }
}

class Triangle extends Shape{
    constructor(height,base){
        super()
        this.height = height
        this.base = base
    }

    area(){
        return 1/2 * this.base * this.height
    }
}


let circle = new Circle(10)
console.log(`Area of the circle is : ${circle.area().toFixed(2)}`);

let triangle = new Triangle(30,15)
console.log(`Area of the triangle is : ${triangle.area().toFixed(2)}`);
