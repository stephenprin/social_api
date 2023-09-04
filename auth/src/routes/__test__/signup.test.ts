import request from 'supertest';
import { app } from '../../app';

// it('should return 405 for get requests to the signup route', () => {

// }



describe('test validity of email input', () => { 
    let password = '';
    beforeAll(() => { 
        password = 'validPassword12';
    })
    it('should return 422 if the email is not provided', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ password })
          .expect(422);
      });
    it('should return an 422 error  if the emails not vaild', async () => {      
        await request(app)
          .post('/api/auth/signup')
          .send({ email: 'invalidEmail', password })
          .expect(422);
    });
    it('should return an 201 if the emails  valid', async () => {
        
        await request(app)
          .post('/api/auth/signup')
          .send({ email: 'test2@gmail.com', password })
          .expect(201);
      });
})


/**
 * Valid password conditions:
 *   - At least 8 characters
 *   - At most 32 characters
 *   - One lowercase letter
 *   - One uppercase letter
 *   - One digit
 */
describe('test validity of password input', () => { 
    let email = '';
    beforeAll(() => { 
      email = 'test2@gmail.com';
    })
    it('should return 422 if the password is not provided', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email })
          .expect(422);
      });
    it('should return 422 if the password contains less than 8 characters', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email, password: 'Valid1.' })
          .expect(422);
      });
    
      it('should return 422 if the password contains more than 32 characters', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email, password: 'Valid12Valid12Valid12Valid12Valid1211231' })
          .expect(422);
      });
    
      it('should return 422 if the password does not contain one lower-case letter', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email, password: 'VALID12VALID12' })
          .expect(422);
      });
    
      it('should return 422 if the password does not contain one upper-case letter', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email, password: 'valid12valid12' })
          .expect(422);
      });
    
      it('should return 422 if the password does not contain a digit', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email, password: 'Validvalid' })
          .expect(422);
      });
    
      it('should return 201 if the password is correct', async () => {
        await request(app)
          .post('/api/auth/signup')
          .send({ email, password: 'Validvalid12' })
          .expect(201);
      });
})

  

