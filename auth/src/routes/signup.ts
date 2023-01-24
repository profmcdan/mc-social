import express, {type Request, type Response} from 'express';
import {body, validationResult} from 'express-validator';

const signupRouter = express.Router();

signupRouter.post(
	'/api/v1/auth/signup',
	[
		body('email').isEmail().withMessage('Email must be valid'),
		body('password').isLength({min: 8}),
	],
	(req: Request, res: Response) => {
		const errors = validationResult(req);
		console.log(errors);

		if (!errors.isEmpty()) {
			res.status(422).send({});
		}

		res.status(200).send({});
	},
);

export default signupRouter;
