import { IAcademicSemester } from '../acdemicSemester/academicSemeter.interface';
import User from './user.model';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastUser?.id;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester
) => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentUserId) + 1).toString().padStart(5, '0');
  incrementedId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedId}`;
  return incrementedId;
};
