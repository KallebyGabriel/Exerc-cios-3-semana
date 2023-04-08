import { request, Request, Response, Router } from "express";
import studentsService from "../services/students.service";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const students = await studentsService.getAll();
    res.send(students);
});

router.get('/:document', async (req: Request, res: Response) => {

    const student = await studentsService.getByDocument(req.params.document) ;
    res.status(200).send(student);
    if (!student) return res.status(400).send({ message: "Estudante não encontrado!"});
})

router.post('/', async (req: Request, res: Response) => {

    if (req.body.age < 18) {
return res.status(400).send({message: 'Estudante não foi criado pois não possui a idade mínima (18 anos)'});
    }
    await studentsService.create(req.body);

    res.status(201).send({message: 'Estudante criado com sucesso'});
})

router.delete('/remove/:document', async (req: Request, res: Response) => {
    try {
        await studentsService.remove(req.params.document);
        res.status(200).send({message: "Estudante removido com sucesso!"});
    } catch(error: any){
        res.status(400).send({message: error.message});
    }
    res.status(200).send({message: "Estudante removido com sucesso"});

});

router.put('/:document', async (req: Request, res: Response) => {
    try {
       await studentsService.update(req.params.document, req.body);
        res.status(200).send({message: "Estudante atualizado com sucesso!"});

    } catch (error: any){
        res.status(400).send({message: error.message});
    }
    
})

export default router;
