import Student from "./student.js";

const displayStudent = function(){
    return Student.allStudents().then(response => {
        const tableBody = response.map(student => {
            const {id, name, date, note} = student;

            return `<tr> 
                <td>${id}</td>
                <td>${name}</td>
                <td>${date}</td>
                <td><span class="badge rounded-pill ${note<10?'text-bg-danger':'text-bg-success'}">${note} /${Student.MAX_NOTE}</span></td>
                <td><button class='btn btn-danger btn-sm delete' onClick='deleteStudent(${id})''>Remove</button></td>                
            </tr>`
        })
        return tableBody
    })
};

const renderStudents= function(){
    const body= document.querySelector('.list-students');
    displayStudent().then(data => 
        body.innerHTML = data.join(' ')
    ); 
    init();
};

const addStudent= (event) =>{
    event.preventDefault()
    const [name, date, note]=document.querySelectorAll('#name, #date, #note')
    const student = new Student(name.value, date.value, note.value)
    student.addStudent()
}

window.deleteStudent = (id) =>{
    Student.deleteStudent(id)
}

const init = function(){
    document.querySelector('#refresh').addEventListener('click', () =>{
        renderStudents();
    })
    document.querySelector('#add').addEventListener('click', (event) =>{
        addStudent(event);
    })
    document.querySelector('.delete').addEventListener('click', (event) =>{
        deleteStudent(event);
    })
    
}

renderStudents();


