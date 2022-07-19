
type Student ={name:string, id:number};

const findAndUpdate=(students:Student[], idToSearch:number, newName:string)=> {

  let foundStudent: Student | undefined = students.find(s => s.id === idToSearch);

  if (foundStudent) {
    foundStudent.name = newName;
  }
}

  const findAndUpdateja2= (students:Student[], idToSearch:number, newName:string)=> {

    students.forEach((s, i) => {
      if (s.id === idToSearch) {

        students[i] = {
          name: newName,
          id: idToSearch
        }

      }


    })
  }



const firstStudent: Student={name: "Asrar", id:1};
const javaStudent:Student[]=[firstStudent];


console.log(firstStudent,javaStudent);
findAndUpdate(javaStudent, 1, "test")
console.log(firstStudent,javaStudent);


findAndUpdateja2(javaStudent, 1, "jens")
console.log(firstStudent, javaStudent)


