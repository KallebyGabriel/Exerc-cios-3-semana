import { request, Request, Response, Router } from "express";

const router = Router();

const students =[
    {
        name: 'Kalleby Gabriel',
        email: 'gabrielkalleby@gmail.com',
        document: '05582256083',
        password: '123456',
        age: 22

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

router.get('/', (req: Request, res: Response) => {

    res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {

    const student = students.find((std) => std.document === req.params.document);
    res.status(200).send(student);
    if (!student) return res.status(400).send({ message: "Estudante não encontrado!"});
})

router.post('/', (req: Request, res: Response) => {

    if (req.body.age < 18) {
return res.status(400).send({message: 'Estudante não foi criado pois não possui a idade mínima (18 anos)'});
    }
    students.push(req.body);

    res.status(201).send({message: 'Estudante criado com sucesso'});
})


router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);

    if (studentIndex === -1){
        return res.status(400).send({message: "Estudante não encontrado!"})
    }
    students.splice(studentIndex, 1);
    res.status(200).send({message: "Estudante removido com sucesso"});

});

router.put('/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentIndex === -1){
        return res.status(400).send({message: "Estudante não encontrado!"})
    }
    students [studentIndex] = req.body;
    res.status(200).send({message: "Estudante atualizado com sucesso!"});

})

export default router;
