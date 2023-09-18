interface cor{
    name: string
    xpoint: number
    ypoint: number
}

class given {


    constructor(
        public name: string,
        public xpoint: number,
        public ypoint: number,
    ){
        this.name = name
        this.xpoint = xpoint
        this.ypoint = ypoint
    }

    static getDistance(studentA: cor, studentB:cor){
        let newPointX = studentA.xpoint - studentB.xpoint
        let newPointY = studentA.ypoint - studentB.ypoint

        let them = Math.sqrt(Math.pow(newPointX, 2) + Math.pow(newPointY, 2))

        return them
    }
}


let ins = new given("dan", 4, 6)
let intech = new given("dave", 9, 5)
console.log(given.getDistance(ins, intech));
