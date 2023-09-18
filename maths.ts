// interface iPoint {
//     name: string;
//     xPoint: number;
//     yPoint: number;
//   }
  
//   interface iResult {
//     nameA: string;
//     nameB: string;
//     point: number;
//   }
  
//   class studentPoint {
//     name: string;
//     xPoint: number;
//     yPoint: number;
  
//     constructor(name: string, xPoint: number, yPoint: number) {
//       this.name = name;
//       this.xPoint = xPoint;
//       this.yPoint = yPoint;
//     }
  
//     get getStudent() {
//       return { name: this.name, xPoint: this.xPoint, yPoint: this.yPoint };
//     }
  
//     set changeXPoint(value: number) {
//         this.xPoint = value;
//       }
    
//       set changeYPoint(value: number) {
//         this.yPoint = value;
//       }
    
//       static getStudentDistance(studentA: iPoint, studentB: iPoint) {
//         let newPointX = studentA.xPoint - studentB.xPoint;
//         let newPointY = studentA.yPoint - studentB.yPoint;
    
//         let point = Math.sqrt(Math.pow(newPointX, 2) + Math.pow(newPointY, 2));
    
//         return { nameA: studentA.name, nameB: studentB.name, point };
//       }
//     }
    
//     let peter = new studentPoint("Peter", 3, 8);
//     let joan = new studentPoint("Joan", 7, 4);
//     let stanley = new studentPoint("stanley", 1, 5);
//     let daniel = new studentPoint("daniel", 8, 3);
//     let prince = new studentPoint("prince", 5, 6);
    
//     let result: iResult = studentPoint.getStudentDistance(prince, daniel);
    
//     console.log();
//     console.log(
//       `The distance between ${result.nameA} and ${
//         result.nameB
//       } is ${result.point.toFixed(2)}m `,
//       );  



// interface iPoint{
//     name: string
//     xpoint: number
//     ypoint: number
// }


// interface iResult{
//     name1: string
//     name2: string
//     point: number
// }



// class studentPos{
//     constructor(
//         public name: string,
//         public xpoint: number,  
//         public ypoint: number,  
//         ){
//             this.name = name
//             this.xpoint = xpoint
//             this.ypoint = ypoint
//     }

//     get getmobile(){
//         return{
//             name: this.name,
//             xpoint: this.xpoint,
//             ypoint: this.ypoint
//         }
//     }

//     static getTheirDistance(student1:iPoint, student2:iPoint){
//         let newPointX = student1.xpoint - student2.xpoint;
//         let newPointY = student1.ypoint - student2.ypoint;

//         let point = Math.sqrt(Math.pow(newPointX, 2) + Math.sqrt(Math.pow(newPointY, 2)))

//         return {name1: student1.name, name2: student2.name, point}
//     }
// }

// let daniel = new studentPos ("daniel", 6, 8)
// let tobi = new studentPos ("tobi", 9, 2)
// let james = new studentPos ("james", 1, 7)
// let joan = new studentPos ("joan", 5, 6)
// let ngozi = new studentPos ("ngozi", 3, 4)
// let gift = new studentPos ("gift", 7, 8)

// let result:iResult = studentPos.getTheirDistance(tobi, gift);


// // console.log(result);

// // 1 what is the distance of tobi from joan
// console.log(`the distance of ${result.name1} from ${result.name2} is ${result.point.toFixed(3)}m`);

// // 2 what is the farddest distance form you
// let result1:iResult = studentPos.getTheirDistance(daniel, gift);
// console.log(result1);
// console.log(` ${result1.name1} ${result1.name2} ${result.point.toFixed(3)}`);

// let result2:iResult = studentPos.getTheirDistance(daniel, joan);
// console.log(result2);
// console.log(` ${result2.name1} ${result2.name2} ${result.point.toFixed(3)}`);

// let result3:iResult = studentPos.getTheirDistance(daniel, james);
// console.log(result3);
// console.log(` ${result3.name1} ${result3.name2} ${result.point.toFixed(3)}`);

// let result4:iResult = studentPos.getTheirDistance(daniel, tobi);
// console.log(result4);
// console.log(` ${result4.name1} ${result4.name2} ${result.point.toFixed(3)}`);

// let result5:iResult = studentPos.getTheirDistance(daniel, ngozi);
// console.log(result5);
// console.log(` ${result5.name1} ${result5.name2} ${result.point.toFixed(3)}`);

// console.log(`the distance faddest ${result3.name1} and ${result3.name2}`);

// // 3. the closest
// console.log(`the closet is ${result2.name1} and ${result2.name2}`);






// // console.log(favour.getmobile);


