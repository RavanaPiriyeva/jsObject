//////////////////////////// OBJECT TASK ////////////////

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

// let getKiller = (a, b) => {
//   for (const key in a) {
//     let count = 0;
//     for (let e of b) {
//       if (a[key].filter((x) => x == e).length != 0) count++;
//     }
//     if (b.length == count)  console.log(key);
//   }
// };

// getKiller(
//   {
//     James: ["Jacob", "Bill", "Lucas"],
//     Johnny: ["David", "Kyle", "Lucas"],
//     Peter: ["Lucy", "Kyle"],
//   },
//   ["Lucas", "Bill"]
// ); // Killer James

// getKiller(
//   {
//     Brad: [],
//     Megan: ["Ben", "Kevin"],
//     Finn: [],
//   },
//   ["Ben"]
// ); // Killer Megan

//_________________________Task5___________________________________

// function getRandomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// let getWinner = (winnerList, winner) => {
//   const keys = Object.keys(winnerList);
//   let result = keys.map(i => Number(i));
//   let randomNum = getRandomNumberInRange(Math.min(...result), Math.max(...result));
//   for (let key in winnerList) {
//     if (Math.round(randomNum / 100) * 100 == Math.round(key / 100) * 100) console.log(`prize: '${winner.prize}', name: ${winnerList[key].name}, age: ${winnerList[key].age} `)
//   }
// }

// const todaysWinner = {
//   prize: ' $10, 000',
// }

// const winnerApplicants = {

//   ' 001 ': {
//     name: ' Max ',
//     age: 25
//   },
//   ' 201 ': {
//     name: ' Svetlana ',
//     age: 20
//   },
//   ' 304 ': {
//     name: ' Catherine ',
//     age: 35
//   },
// }
// const resultWinner = getWinner(winnerApplicants, todaysWinner)
// console.log(' resultWinner ', resultWinner); // { prize: '$10,000', name: 'Maxim', age: 25 }


//_________________________Task6___________________________________

// let giveTalonsInOrder =(people, ordersArr)=>{
//   let newArr=[]
//   for(let num of ordersArr){
//     for(let person of people){
//       if(num==person.id) newArr.push(person)
//     }
//   }
//   console.log(newArr)
// }
// const ordersArr = [4, 2, 1, 3];
// const people = [
// { id: 1, name: "Maxim" },
// { id: 2, name: "Nicholas" },
// { id: 3, name: "Angelina" },
// { id: 4, name: "Vitaly" },
// ];

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);




///////////////////////////////////////////////    THIS   ////////////////////////////////





//_________________________Task1___________________________________

// const student = {
//   level: 1,
//   stack: ["HTML"],
//   improveLevel() {
//     this.level++;
//     if (this.level === 2) this.stack.push("CSS");
//     else if (this.level === 3) this.stack.push("JavaScript");
//     else if (this.level === 4) this.stack.push("React");
//     else if (this.level === 5) this.stack.push("NodeJS");
//     else if (this.level > 5) alert("The student has learned all technologies!");
//    return this;
//   },
// };

// student
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel();

// console.log(student);
//_________________________Task2___________________________________

// const dog = {
//   name: "Charlie",
//   type: "Dog",
//   makeSound() {
//     return "Wow-Wow";
//   },
// };

// const bird = {
//   name: "Petya",
//   type: "Sparrow",
//   makeSound() {
//     return "Cheek-chirp";
//   },
// };

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);
//   return {
//     name: this.name,
//     type: this.type,
//     makeSound: this.makeSound,
//     isDomestic: isDomestic,
//   };
// }
// let birdApply = makeDomestic.apply(bird, [true]);
// let dogBind = makeDomestic.bind(dog, true);
// let birdCall = makeDomestic.call(bird, false);

// console.log(dogBind());
// console.log(birdCall);
// console.log(birdApply);

//_________________________Task3___________________________________
// const footballer = {
//   fullName: "Cristiano Ronaldo",
//   attack: function () {
//     console.log(
//       `${this.fullName} is now with the ball and starting to attack!`
//     );
//   },
//   scoreGoal: function (sound) {
//     console.log(`${this.fullName} scored a goal! Wow!`);
//     this.celebrate(sound);
//   },
//   celebrate: function (sound) {
//     console.log(sound);
//   },
//   goToSubstitution: function (newPlayer) {
//     console.log(
//       `${this.fullName} goes to replace. ${newPlayer} enters the field`
//     );
//   },
// };

// let attack = footballer.attack.bind(footballer);
// let score = footballer.scoreGoal;
// let substitute = footballer.goToSubstitution;

// attack();
// score.call(footballer, "Siiiiii");
// substitute.apply(footballer, ["Paulo Dibala"]);




///////////////////////////////////////////////    DATE   ////////////////////////////////





//_________________________Task1___________________________________

// let getDateFormat = (date, separator) => {
//   let year = date.getFullYear()
//   let month = date.getMonth() + 1
//   let day = date.getDay()
//   if (month.length < 2)
//     month = '0' + month;
//   if (day.length < 2)
//     day = '0' + day;
//     console.log([year,month,day].join(separator))
// }
// const data = new Date()
// getDateFormat(data,'-')


//_________________________Task2___________________________________
// let nextBirthdayDate =(myBd)=>{
//   let date =new Date()
//   if(date>myBd) myBd.setFullYear(date.getFullYear() + 1);
//   let differ = Math.round((myBd- date)/ (1000 * 60 * 60 * 24))
//   console.log(differ)
// }
// const myBd = new Date("2023-05-19");
// nextBirthdayDate(myBd)
//_________________________Task3___________________________________
// function addDays(date, days = 1) {
//   let newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + days);
//   console.log(newDate);}

// let date = new Date("2004-08-12");
// let updatedDate = addDays(date, 8);


