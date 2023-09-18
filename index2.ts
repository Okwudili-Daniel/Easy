let studentName: string = 
"Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene Zion Wisdom Delight Stanyley  Jessica Ayomide Regina Jemima Khalid Franklin Dennis Wisdom Emmanuel Chinedu";


interface iData {
    name: string;
    score: number
}
class school{
    static count: number = 0
    static mySchools: school[]= []

    constructor(
        public branch: string) {
            this.branch = branch;
            school.count ++;
            school.mySchools.push(this)
        }

        registerStudent(): any{
            let numb : number = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            
            return Array.from({length: 5}, () => {
                let studentArr: string[] = studentName.split(" ");
                
                let randNumb: number = Math.floor(Math.random() * studentArr.length);
            
            let score: number = Math.floor(Math.random() * (100 - 45 + 1)) + 45;
            
            return {name: studentArr[randNumb], score}
            }) 
        }

        getTopInstanceResult(...args: any[]){
            let res = args.flat();
            return res.sort((a, b) => {
                return b.score - a.score;
            })[0]
        }

        static getTopResult(...args: school[][]):
        iData[] {
            let data:iData[] = [];

            for(let i of args) {
                let x:any = i.sort((a: any, b:any) => {
                    return b.score - a.score;
                })[0]
                data.push(x)
            }

            return data.sort((a, b) => {
                return b.score - a.score;
            });
        }               
            
    
        static getSchoolsAverageTopResult(...args:school[][]) {
            let data:number[] = [];

            for (let i of args) {
                let res: number = i
                .map((el:any) => {
                    return el.score;
                })
                .reduce((a,b) => {
                    return a + b;
                }) / i.length;
                
            data.push(res);
            }
            return data;
        }
    }
    

        // startPlaying(choice: string) {
        //     if(choice === "racing") {
        //         return this.PlayCarRacing()
        //     }else if (choice === "guess"){
        //         return this.PlayGuessGame()
        //     }
        // }

        // PlayGuessGame() { }

        // PlayCarRacing() { }

let schoolA = new school("Tolu")
let schoolB = new school("Wilma")
let schoolC = new school("OjoRoad")


// console.log(school.badTeacher);


// console.log(school.getSchoolsAverageTopResult(
//     schoolA.registerStudent(),
//     schoolB.registerStudent(),
//     schoolC.registerStudent()
// ));



// console.log(schoolA.getTopResult(schoolA.registerStudent()));


// console.log(schoolA.registerStudent());



// let studentArr: string[] = studentName.split(" ");

// let randNumb: number = Math.floor(Math.random() * studentArr.length);

// let score: number = Math.floor(Math.random() * studentArr.length);


// console.log(randNumb);
// console.log(studentArr[randNumb]);

// let numb : number = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

// let newData = Array.from({length: 5}, () => {
//     let studentArr: string[] = studentName.split(" ");

// let randNumb: number = Math.floor(Math.random() * studentArr.length);

// let score: number = Math.floor(Math.random() * (100 - 45 + 1)) + 45;

// return {name: studentArr[randNumb], score}
// })

// console.log(newData);

// const getNumb = (max: number, min: number) =>{
//     let rand = Math.floor(Math.random() * (max - min + 1))
// + min;
//  return rand
// }
// console.log(getNumb(100, 45));


// const getFunct = (a:number,b:) => {

// }


// const arrData = [
//     {name: "jemima", score:62},
//     {name: "francis", score:67},
//     {name: "jstanley", score:93},
//     {name: "samuel", score:55},
// ];

// console.log(
//     arrData
//     .map((el) => {
//         return el.score;
//     })
//     .reduce((a, b) => {
//         return a + b;
//     }) / arrData.length
// );
