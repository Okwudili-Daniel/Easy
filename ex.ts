class student {
    public name: string;
    public readonly email: string;
    public count: number;
    private age?: number;
    protected height?: number = 7;
    static total: number = 0;
  
    constructor(name: string, email: string, age?: number, height?: number) {
      this.height = height;
      this.name = name;
      this.email = email;
      this.age = age;
      student.total++;
    }
  
    get getStudent() {
      return {
        name: this.name,
        email: this.email,
        age: this.age,
        height: this.height,
      };
    }
  
    set changeHeight(value: number) {
      this.height = value;
    }
    set changeAge(value: number) {
        this.age = value;
      }
    }
    
    class studentSet extends student {
      public set: number;
    
      constructor(name: string, email: string, height: number, set: number) {
        super(name, email, height);
        this.set = set;
      }
    
      set changeHeight(value: number) {
        this.height = value;
      }
    
      get getStudentSet() {
        return {
          name: this.name,
          email: this.email,
          height: this.height,
          set: this.set,
        };
      }
    }
    
    console.clear();
    let studentA = new student("Peter", "peter@test.com");
    let studentB = new student("Peter", "peter@test.com");
    
    let studentSetA = new studentSet("Peter", "peter@test.com", 5, 8);
    
    console.log();
    console.log(studentA.getStudent);
    
    console.log();
    // studentA.age = 69
    console.log((studentA.changeHeight = 29));
    
    console.log(studentA.getStudent);
    
    console.log();
    console.log((studentA.changeAge = 20));

    console.log(studentA.getStudent);
    
    console.log("reading total student Entry: ", student.total);
    
    const counter = (value: number) => {
      value--;
      return value;
    };
    
    console.log("reading: ", counter(2));
             

// class uni{
//     static total: number = 0

//     constructor(
//         public name: string, 
//         public university: string, 
//         public age?: number, 
//         public email?: string,
//         ) { 
//         this.name = name;
//         this.university = university;
//         this.age = age;
//         this.email = email;
//         uni.total++
        
//     }

//     get getVar() {
//         return{
//             name: this.name,
//             university: this.university,
//             age: this.age,
//             email: this.email
//         }
//     }

//     set changeName(value: string){
//         this.name = value;
//     }
// }

// class uniV extends uni{
//     constructor(
//         public name: string, 
//         public university: string, 
//         public age: number, 
//         public email: string,
//         public set: number, 
//     ){
//         super(name, university, age, email)
//         this.set = set
//     }

//     get getUniV(){
//         return{
//         name: this.name, 
//         university: this.university, 
//         age: this.age, 
//         email: this.email, 
//         set: this.set,
//         }
//     }


// }

// let sch = new uniV ("mom", "ukwa", 2, "kad@gmail.com", 9)
// // console.log(sch.getUniV);

// // console.log(uni.total);


// let state = new uni ("daniel", "unizik", 30, "mak@gmail.com")


// console.log("for",state.getVar);

// // console.log();
// // console.log((state.changeName = "soludo"));
// // console.log("for",state.getUni);

