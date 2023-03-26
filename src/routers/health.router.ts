import { request, Request, Response, Router } from "express";

const router = Router();


router.get ('/', (req: Request, res: Response) => {
    res.send( { message: 'Hello World'} );
}); 

router.get ('/', (req: Request, ress:Response ) => {


    const healthCheck = {message: 'Aplicação funcionando com sucesso!'};
    ress.send(healthCheck);

});

router.get ('/check', (req: Request, ress: Response) => {

    const healthCheck = {message: 'Aplicação está funcionando normalmente!'};
    ress.send(healthCheck);

} );


export default router;


