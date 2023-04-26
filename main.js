//_________________________Task1___________________________________

// const users = [
//   {
//     username: "David",

//     status: "online",

//     lastActivity: 10,
//   },
//   {
//     username: "Lucy",

//     status: "offline",

//     lastActivity: 22,
//   },
//   {
//     username: "Bob",

//     status: "online",

//     lastActivity: 104,
//   },
// ];
// let arr = [];
// for (let user of users) {
//   if (user.status == "online") arr.push(user.username);
// }
// console.log(`“The following users are currently online: ${arr}”.`);

// //_________________________Task2___________________________________

// const student = {
//   fullName: "Maxim",

//   experienceInMonths: 12,

//   stack: ["HTML", "CSS", "JavaScript", "React"],
// };

// let giveJobToStudent = (student, jobName) => {
//   student.job = jobName;
// };

// const updatedStudent = giveJobToStudent(student, "web developer");
// console.log(`“Congratulations! Student ${student.fullName} has a new job!
// It is now ${student.job}”, where ${student.fullName} is the student's name and ${student.job} is the name of the student's
// new job.`)
// //_________________________Task3___________________________________

// const student = {

//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
//     }

//     let handleObjects =(obj , key ,action)=>{
//        if(action=="delete") delete obj[key]
//        if(action=="add")  obj[key]="js"
//        return obj
//     }
//     const result = handleObjects(student, 'programmingLanguage', 'get');
//     console.log('result', result);

//_________________________Task4___________________________________
let getKiller = (a, b) => {
  let count = 0;
  let blen = b.length;
  for (const key in a) {
    for (let e of b) {
      if (a[key].find((x) => x == e).length != 0) {
        count++;
      }
    }
    if (blen == count) {
        console.log(key);
    }
    
  }
};

getKiller(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
); // Killer James

getKiller(
  {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
  },
  ["Ben"]
); // Killer Megan

//_________________________Task1___________________________________
