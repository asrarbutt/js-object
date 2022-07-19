const findAndUpdate = (students, idToSearch, newName) => {
    let foundStudent = students.find(s => s.id === idToSearch);
    if (foundStudent) {
        foundStudent.name = newName;
    }
};
const findAndUpdateja2 = (students, idToSearch, newName) => {
    students.forEach((s, i) => {
        if (s.id === idToSearch) {
            students[i] = {
                name: newName,
                id: idToSearch
            };
        }
    });
};
const firstStudent = { name: "Asrar", id: 1 };
const javaStudent = [firstStudent];
console.log(firstStudent, javaStudent);
findAndUpdate(javaStudent, 1, "test");
console.log(firstStudent, javaStudent);
findAndUpdateja2(javaStudent, 1, "jens");
console.log(firstStudent, javaStudent);
