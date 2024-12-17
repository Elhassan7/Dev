import { ENDPOINT } from "./constants.js";

export default class Student {
    constructor(name, age, note){
        this.name=name;
        this.age=age;
        this.note=note;
    }

    static allStudents = async function(){
        const  response = await fetch(ENDPOINT);
        const students = await response.json();
        return students
    }
}