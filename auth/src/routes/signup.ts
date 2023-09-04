import express from 'express';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
const signupRouter = express.Router();

signupRouter.post(
  '/signup',
    [
        body('email').isEmail().withMessage('Please enter a valid email'),
        body('password').trim().isLength({ min: 8, max: 32 }).withMessage('Password must be iin a valid format'),
        body('password').trim().matches(/^(.*[a-z].*)$/).withMessage('Password must contain at least one lower character'),
        body('password').trim().matches(/^(.*[A-Z].*)$/).withMessage('Password must contain at least one Capital character'),
        body('password').trim().matches(/^(.*\d.*)$/).withMessage('Password must contain at least one digit character'),
    ],
  (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(422).send({});
    }

    res.status(201).send({});
  },
);

export default signupRouter;
