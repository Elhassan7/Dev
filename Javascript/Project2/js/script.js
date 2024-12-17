import Student from "./student.js";

const displayStudent = function(){
    return Student.allStudents().then(response => {
        const tableBody = response.map(student => {
            const {id, name, level, note} = student;

            return `<tr> 
                <td>${id}</td>
                <td>${name}</td>
                <td>${level}</td>
                <td>${note}</td>
                <td></td>                
            </tr>`
        })
        return tableBody
    })
};

const renderStudents= function(){
    const body= document.querySelector('.list-students');
    displayStudent().then(data =>  body.innerHTML = data)
};

renderStudents();
console.log(displayStudent().then(data => console.log(data)))



