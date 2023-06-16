import express from 'express';

import validateRequest from '../../middleWares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';

import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAcademicSemester);
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

export const AcademicSemesterRoutes = router;
