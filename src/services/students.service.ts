import studentRepository from "../repositories/student.repository";
import { Student } from '../models/student.model';


 class StudentsServices {

    getAll() {

        return studentRepository.getAll;
    }

    getByDocument(document: string){

        return studentRepository.getByDocument(document);
    }

    create(student: typeof Student ){
        return studentRepository.create(student);
    }

    remove (document: string){
        return studentRepository.remove(document);
    }

    update(document: string, student: Partial <typeof Student> ){
       return studentRepository.update(document, student);
    }
}

export default new StudentsServices();