import { ENDPOINT } from "./constants.js";

export default class Student {
    static MAX_NOTE=20;
    constructor(name, date, note){
        this.name=name;
        this.date=date;
        this.note=note;
    }

    static allStudents = async function(){
        const  response = await fetch(ENDPOINT);
        const students = await response.json();
        return students
    }

    addStudent = async function(){
        const  response = await fetch(ENDPOINT,{
            method: 'POST',
            body: JSON.stringify({
                name: this.name,
                date: this.date,
                note: this.note
            })
        });
        return response
    }

    static deleteStudent= async function (id) {
        const  response = await fetch(ENDPOINT+'/?id='+id,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response
    }
}