import express from 'express';
import { Request, Response } from 'express';
import { query, validationResult } from 'express-validator';
const signupRouter = express.Router();

signupRouter.post(
  '/signup',
  [query('email').isEmail().withMessage('Please enter a valid email')],
  (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(422).send({});
    }

    res.status(200).send({});
  },
);

export default signupRouter;
