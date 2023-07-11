import { User } from '../types/User';
import usersData from '../../data/usersData.json';

// eslint-disable-next-line import/prefer-default-export
export const getUserByEmail = async (email: string): Promise<User[]> => {
  console.log('data: ', email);
  const userByEmail: User[] | [] = usersData.filter((user) => user.email === email);

  console.log('userByEmail', userByEmail);

  if (!userByEmail.length) {
    throw new Error('User not found!');
  }

  return userByEmail;
};
