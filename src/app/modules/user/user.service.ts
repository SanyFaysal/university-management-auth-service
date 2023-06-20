import config from '../../../config';
import { IUser } from './user.interface';
import User from './user.model';
import { generateStudentId } from './user.utils';

const createUserService = async (user: IUser): Promise<IUser | null> => {
  // auto generated student id
  const id = await generateStudentId();

  user.id = id;
  if (!user.password) {
    user.password = config.default_user_password as string;
  }
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error('Failed to create user !');
  }
  return createdUser;
};

export const UserService = {
  createUserService,
};
