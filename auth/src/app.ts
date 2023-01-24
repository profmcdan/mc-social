import express, {type Express, type Request, type Response} from 'express';
import {json} from 'body-parser';
import {signupRouter} from './routes';

const app: Express = express();
app.use(json());

app.use(signupRouter);
app.get('/', (req: Request, res: Response) => {
	res.status(200).send({message: 'Hello World'});
});

export {app};
