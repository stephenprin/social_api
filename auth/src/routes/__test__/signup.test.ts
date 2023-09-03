import request from 'supertest';
import { app } from '../../app';

// it('should return 405 for get requests to the signup route', () => {

// }

it('should return an 422 error  if the emails not vaild', async () => {
  await request(app).post('/api/auth/signup').send({}).expect(422);

  await request(app)
    .post('/api/auth/signup')
    .send({ email: 'invalidEmail' })
    .expect(422);
});
