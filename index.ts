// class student{
//     public name: String
//     public readonly email: string
//        public count: number
//     public age?:number
//     public height?: number= 7
//     static total: number = 0

//     constructor(name: String,email: string, age?:number,height?: number,){
//         this.height = height
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         student.total++;
//     }

//     get getStudent(){
//         return{
//             name:this.name, 
//             email:this.email,
//             age: this.age,
//             heght: this.height
//         }
//     }

//     set changeHeight(value:number){
//         this.height = value;
//     }
//     set changeAge(value:number){
//         this.age = value;
//     }
//     set changeName(value:string){
//         this.name = value;
//     }
//     set totalStudent(number){
//         this.name = number;
//     }
// }

// class studentSet extends student{
//     set: number

//     constructor(name: string, email: string, age: number, height: number, set: number){
//         super(name, email, height);   
//         this.set = set;     
//     }

//     set changeHeight(value: number){
//         this.height = value
//     }
    

//  get getStudentSet() {
//     return {
//         name: this.name,
//         email: this.email,
//         height: this.height,
//         set: this.set,
//     }
// }

// }


// let studentA = new student("Daniel", "okwudilidaniel2gamil.com",);
// let studentB = new student("Daniel", "okwudilidaniel2gamil.com",);

// let studentSetA = new studentSet("peter", "peter@test.com", 5, 8,10)
// console.log();
// console.log(studentA.getStudent);

// console.log();
// console.log((studentA.changeHeight = 29));

// console.log(studentA.getStudent);

// console.log();
// console.log(studentA.changeAge = 20);

// console.log();
// console.log(studentA.changeName = "Soludo");
// console.log("showing: ",studentA.getStudent);

// console.log("reading total student entry:",student.total);


// const counter = (value: number) => {
//     value++;
//     return value 
// };

// console.log("reading", counter(2));

// console.clear();

interface iPoint{
    name: string;
    xpoint: number;
    ypoint: number
}

interface iResult{
    nameA: string;
    nameB: string;
    point: number;
}

interface iResultData{
    myName: string;
    yourName: string;
    point:number;
}

class studentPoin{
    name: string;
    xpoint: number;
    ypoint: number;
    static total: number = 0
    static totalStudent: studentPoin [] = []

    constructor(name:string, xpoint: number, ypoint: number){
        this.name = name;
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        studentPoin.total++;
        studentPoin.totalStudent.push(this)
    }

    get getStudent(){
        return {name: this.name, xpoint: this.xpoint, ypoint: this.ypoint}
    }

    set changeXPoint(value: number){
        this.xpoint = value
    }
    set changeYPoint(value: number){
        this.xpoint = value
    }
    static getStudentDistance(studentA: iPoint, studentB: iPoint){
        let newPointX = studentA.xpoint - studentB.xpoint
        let newPointY = studentA.ypoint - studentB.ypoint

        let point = Math.sqrt(Math.pow(newPointX, 2) + Math.pow(newPointY, 2)); 
        
        return {nameA: studentA.name, nameB: studentB.name, point};
    }

    static getMyPositionFromStudent(){
        const myDataSample = studentPoin.totalStudent;
        let MyDetail = myDataSample[0];
        let result: iResult[] = [];

        for (let i of myDataSample){
            if(i.name === studentPoin.totalStudent[0]. name){
                console.log("");                
            }else {
                // let changeInX = studentPoint.totalStudent[0].xpoint - i
            }
        }
    }
}

let james = new studentPoin("james", 5, 4)
let joy = new studentPoin("joy", 3, 1)
let amaka = new studentPoin("amaka", 5, 6)
let chidi = new studentPoin("chidi", 8, 3)
let john = new studentPoin("john ", 5, 6)

// let result: iResult = studentPoint.getStudentDistance(chidi, john)

// console.log(james.getStudent);

// console.log("reading", studentPoint.total);

// console.log();
// console.log(`the distance between ${result.nameA} and ${result.nameB} is ${result.point}`);

// console.log(studentPoint.getStudentDistance(chidi, john));

// console.log(studentPoint.getStudentDistance);


// console.log(Math.ceil(4.1503));
// console.log(Math.floor(4.1503));
// console.log( 4.1503.toFixed(2));


