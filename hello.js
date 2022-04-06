//console.log("Hello")
//console.log("Hi")
//let a = [56,77,85,34,96,22,67,13];
//a.forEach(number => console.log(number));
/*for (const i of a) {
    console.log(i)
}*/
//for (const i of a)  console.log(i);
let student = `{"name":"abc","rollno" : 123 ,"marks" : 90, "age" : 20}`;
//console.log(student.marks);
//console.log(JSON.stringify(student));
//var jsonobj ='{ "name":"Brendan Eich","designerof":"Javascript","bornin":"1961" }';
// console.log(student);
// let obj = JSON.parse(student);
// console.log(obj);
const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  const pass = scores.filter(student=>student.marks>=40);
  console.log(pass);

 const fail = scores.filter(student=>student.marks<40)
 .map(student=>student.name);
 console.log("failedStudents are ",fail);

                
    