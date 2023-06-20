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

router
  .route('/:id')
  .get(AcademicSemesterController.getSingleSemester)
  .patch(
    validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
    AcademicSemesterController.updateSemester
  )
  .delete(AcademicSemesterController.deleteSemester);

export const AcademicSemesterRoutes = router;
