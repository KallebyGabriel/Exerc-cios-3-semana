import express from 'express'; // no ts usamos import, o que quero importar e de onde.

//import { Request, Response, Router} from 'express';

import cors from 'cors';

import routes from './routers';

//import healthRouter from './routers/health.router';

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);

/*const router = Router();

router.get ('/', (req: Request, ress: Response) => {
    const healthCheck = {message: 'hello world'};
    ress.send(healthCheck);

})
*/
//app.use(healthRouter);

const port = 3000;


app.listen(port, () => {

    console.log('Aplicação online na porta: ', port);
});
