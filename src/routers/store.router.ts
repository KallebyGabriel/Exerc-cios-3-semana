import { request, Request, Response, Router } from "express";
import storeService from "../services/store.service";
const router = Router();

router.get('/', (req: Request, res: Response) =>{

    const product = storeService.getAll();
    res.send(product);

});

router.get('/:id', (req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const product = storeService.getById(id)
    res.status(200).send(product);
    if (!product) return res.status(400).send({ message: "Produto não encontrado!"});
})
router.post('/', (req: Request, res: Response) =>{
    if (req.body.description === "Notebook S51") {
        return res.status(400).send({message: 'Esse produto ja possui cadastro!'});
            }
            storeService.create(req.body);
            res.status(201).send({message: 'Produto cadastrado com sucesso!'})
    
})

router.delete ('/remove/:id', (req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        storeService.remove(id);
        res.status(200).send({message: "Produto removido com sucesso!"})
    }catch(error){
        res.status(400).send(error);
    }
});


router.put('/:id', (req: Request, res: Response) => {
 try {
    const id = parseInt(req.params.id);
    storeService.update(id, req.body);
    res.status(200).send({message: "Produto atualizado com sucesso!"});
 }catch(error){
    res.status(400).send(error);
 }
});

export default (router);