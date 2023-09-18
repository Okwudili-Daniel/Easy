interface iData {
    name: string
    score: number
  }
  let studentName: string = "Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene Zion Wisdom Delight Stanyley Jessica Ayomide Regina Jemima Khalid Franklin Dennis Wisdom Emmanuel Chinedu"
  
  class school {
    branch: string
    static count: number = 0
    static mySchools: Array<school> = []
  
    constructor(branch: string) {
      this.branch = branch
      school.count++
      school.mySchools.push(this)
    }
  
    registerStudent(): any {
      let numb = Math.floor(Math.random() * (20 - 5 +1)) +5
  
    return Array.from({ length: numb}, () => {
    let studentArr: string[] = studentName.split(" ")
  
    let randNumb = (Math.floor(Math.random() *studentArr.length))
    let rand = Math.floor(Math.random() * (100 - 45 +1)) +45
    return {name:studentArr[randNumb], score:rand}
  })
    }
  
    getTopIntanceResult(...args: any[]) {
      let res = args.flat()
      return res.sort((a, b) => {
        return b.score - a.score
      })[0]
    }
  
    static getTopResult(...args: school[][]) {
      let data : iData[] =[]
  
      for(let i of args) {
        let x: any = i.sort((a: any, b: any) => {
          return b.score - a.score
        })[0]
        data.push(x)
      }
      return data.sort((a, b ) => {
        return b.score - a.score
      })
  
    }
    static getAverage(...args: {branch: string, student:school[][]}[]) {
      let data:{branch: string, point: number}[]= []
  
      for(let i of args) {
        let res = 
        i.student
        .map((el: any) => {
          return el.score
        })
        .reduce((a, b) => {
          return a + b
  
        }) / i.student.length
  
        data.push({branch: i.branch, point: res})
        // console.log(i);
        // data.push(res)
        
        // console.log(i);
        
      }
      // return {sch: schoolA.branch, ave: data}
  
      const goodPoint = data.filter((el) => {
        return el.point > 70
      })
      const badPoint = data.filter((el) => {
        return el.point < 70
      })
      return {badPoint, goodPoint}
    }
  }
  
  
  
  let schoolA = new school("Tolu")
  let schoolB = new school("Wilmer")
  let schoolC = new school("Ojo Road")
  
  console.log(
    school.getAverage(
      {branch: schoolA.branch, student: schoolA.registerStudent()},
      {branch: schoolB.branch, student: schoolB.registerStudent()},
      {branch: schoolC.branch, student: schoolC.registerStudent()}
    )
  );
  
  // console.log(school.getAverage(
  // schoolA.registerStudent(),
  // schoolB.registerStudent(),
  // schoolC.registerStudent()))
  
  
  
  
  
  
  
  
  
  
  
  
  
  // console.log(school.getTopResult(
  //   schoolA.registerStudent(),
  //     schoolB.registerStudent(),
  //     schoolC.registerStudent()
  // ));
  
  // console.log(schoolA.getTopIntanceResult(
  //   schoolA.registerStudent(),
  //   schoolB.registerStudent(),
  //   schoolC.registerStudent()
  // ))
  
  // console.log(schoolA.registerStudent());
  
  
  
  
  
  
  // const getFunc = (a:number, b:number) =>{
    
  // }
  // getFunc(2, 6)
  
  
  // console.log(getNumb(20, 6))
  // let fighters: string[] = ["ayo", "ahmed", "ekene", "zion", "prince"]