import { Student } from "../models/student.model";

 class StudentsServices {

     students: Array<Student> = [
        {
            name: 'Kalleby Gabriel',
            email: 'gabrielkalleby@gmail.com',
            document: '05582256083',
            password: '123456',
            age: 22,
            phone: '1132919191',
        },
        {
            name: 'João Gabriel',
            email: 'joaogabriel@gmail.com',
            document: '28870114058',
            password: '123456',
            age: 21
        },
        {
    
            name: 'Julia Silvestre',
            email: 'silvestre@gmail.com',
            document: '10356275078',
            password: '123456',
            age: 19
    
        },
        {
            name: 'Giovanna Maciel',
            email: 'giovannamaciel@gmail.com',
            document: '97753024043',
            password: '123456',
            age: 23
        }
    ];

    getAll() {

        return this.students;
    }

    getByDocument(document: string){
        const student = this.students.find((std) => std.document === document);
        return student;
    }

    create(student: Student ){
        this.students.push(student);
    }

    remove (document: string){
        const studentIndex = this.students.findIndex((student) => student.document === document);
        if (studentIndex === -1){
            throw new Error("Estudante não encontrado!");
        }
        this.students.splice(studentIndex, 1);
    }

    update(document: string, student: Student){
        const studentIndex = this.students.findIndex((student) => student.document === document);
    if (studentIndex === -1){
        throw new Error ("Estudante não encontrado!");
    }
    this.students [studentIndex] = student;
    }
}

export default new StudentsServices();