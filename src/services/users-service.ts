import { User } from '../types/User';
import usersData from '../../data/usersData.json';

export const getUserByEmail = async (email: string): Promise<User[]> => {
  const userByEmail: User[] | [] = usersData.filter((user) => user.email === email);

  if (!userByEmail.length) {
    throw new Error('User not found!');
  }

  return userByEmail;
};
