import request from 'supertest';
import {app} from '../../app';

const baseUrl = '/api/v1/auth';
describe('Should test signup', () => {
	// It('should return 405 for non-post requests to signup route', () => {
	//
	// });

	it('should return 422 if email is not valid', async () => {
		await request(app).post(`${baseUrl}/signup`).send({}).expect(422);

		await request(app)

			.post(`${baseUrl}/signup`)
			.send({email: 'invalid_email'})
			.expect(422);

		await request(app)
			.post(`${baseUrl}/signup`)
			.send({email: '@gmail.com'})
			.expect(422);

		await request(app)
			.post(`${baseUrl}/signup`)
			.send({email: 'daniel@gmail'})
			.expect(422);
	});

	it('should return 422 if password is invalid', async () => {
		await request(app)
			.post(`${baseUrl}/signup`)
			.send({email: 'daniel@gmail.com', password: ''})
			.expect(422);

		await request(app)
			.post(`${baseUrl}/signup`)
			.send({email: 'daniel@gmail.com', password: 'pass'})
			.expect(422);
	});
});
