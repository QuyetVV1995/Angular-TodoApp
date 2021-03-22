// let a : string;
// let b : number;
// let c : boolean;
// let d : any;
// let e : string[] = ['a', 'b', 'c'];

// let f : null;
// let g : undefined;
// let h : void;

// enum Color{
//     Red,
//     Blue = 'blue'
// };

// Cast
// (<string[]>a).
// (a as string[]).

// let a : string[] = [];
// a.push('new string');

// Interface

interface Point{
    x: number,
    y: number
};


let drawPoint = (point : Point) => {     // Inline Annotation
    console.log(` Draw point  at X: ${point.x} and Y: ${point.y}`);
}

drawPoint(
    {
        x: 1,
        y : 2
    }
);


// Cohesion

// Access modifiers: Public, private, protected
class Point1 {
    private x: number;
    private y: number;

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    drawPoint(){
        console.log(` Draw point  at X: ${this.x} and Y: ${this.y}`)
    }
};

let point:Point1 = new Point1(1,2);