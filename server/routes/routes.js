import express from 'express';
import middlewares from '../middleware/middleware';
import { newReport, updateComment, updateLocation } from '../middleware/validators';
import RedFlagsControllers from '../controllers/redFlagsControllers';

const router = express.Router();

router.get('/', RedFlagsControllers.getAllRedFlags);

router.get('/:id', middlewares.notFound, RedFlagsControllers.getRedFlagById);

router.post('/', newReport, middlewares.isEmpty, RedFlagsControllers.createRedFlag);

router.patch('/:id/location', middlewares.notFound, updateLocation, middlewares.isEmpty, RedFlagsControllers.updateRedFlagLocation);

router.patch('/:id/comment', middlewares.notFound, updateComment, middlewares.isEmpty, RedFlagsControllers.updateRedFlagComment);

router.delete('/:id', middlewares.notFound, RedFlagsControllers.deleteRedFlag);

export default router;
