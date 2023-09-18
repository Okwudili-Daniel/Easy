let studName: string = "Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene Zion Wisdom Delight Stanyley Jessica Ayomide Regina Jemima Khalid Franklin Dennis Wisdom Emmanuel Chinedu";




// interface gd{
//     name: string;
//     score: number;
// }

class sch {
    static oursch: Array<sch> = []
    constructor(
        public branch: string
    ) {
        this.branch = branch;
        sch.oursch.push(this)
    }

      regisStudent(): any{
            let zero: number = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
            return Array.from({length: 5}, () => {
                let studNumb: string[] = studName.split(" ");

                let randNo: number =Math.floor(Math.random() * studNumb.length);

                let scr = Math.floor(Math.random() * (100 - 45 + 1)) + 45;

                return {name: studNumb[randNo], scr}
            })
    }

    static  getTopSrc(...dan: any[]){
        let best = dan.flat();
        // console.log(best);        
        return best.sort((a, b) => {
           return b.scr - a.scr
        })[0]
        }
}


let bran1 = new sch ("aja")
let bran2 = new sch ("apapa")
let bran3 = new sch ("festac")

console.log(sch.getTopSrc(bran1.regisStudent()));


