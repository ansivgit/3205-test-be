import { Router, Request, Response } from 'express';
import { getUserByEmail } from '../services/users-service';
import { User } from '../types/User';

const usersRouter = Router();

usersRouter.post('/', async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user: User[] = await getUserByEmail(userData.email);

    setTimeout(() => res.status(200).send(user), 5000);
  } catch (err: any) {
    setTimeout(() => res.status(404).send([{ email: 'User not found', number: '' }]), 5000);
  }
});

export default usersRouter;
