import { Request, Response } from 'express'
import { createUserService } from './user.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUserService(user)
    return res.status(200).json({
      success: true,
      message: 'User created successful !',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}
