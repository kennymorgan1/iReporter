import express from 'express';
import RedFlagsControllers from '../controllers/redFlagsControllers';

const router = express.Router();

router.get('/', RedFlagsControllers.getAllRedFlags);

router.get('/:id', RedFlagsControllers.getRedFlagById);

router.post('/', RedFlagsControllers.createRedFlag);

router.patch('/:id/location', RedFlagsControllers.updateRedFlagLocation);

router.patch('/:id/comment', RedFlagsControllers.updateRedFlagComment);

export default router;
