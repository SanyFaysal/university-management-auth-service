import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    // req validation

    const { user } = req.body;
    const result = await UserService.createUserService(user);
    return res.status(200).json({
      success: true,
      message: 'User created successful !',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
