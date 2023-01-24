import request from 'supertest';
import {app} from '../app';

describe('Test Home Route', () => {
	it('should respond with a status of 200', async () => {
		await request(app).get('/').expect(200);
		await request(app)
			.get('/')
			.expect(res => {
				res.body.message = 'Hello World';
			});
		await request(app).get('/').expect(200, {message: 'Hello World'});
	});
});
