import express from 'express'; // no ts usamos import, o que quero importar e de onde.

//import { Request, Response, Router} from 'express';

import cors from 'cors';

import routes from './routers';

import connection from './config/database';

//import healthRouter from './routers/health.router';

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3000;

connection.then(() =>{

    console.log('Banco de dados conectado!');

    app.listen(port, () => {
        console.log('Aplicação online na porta: ', port);
    });

}).catch((err) => console.log(err));

