import express from 'express';
import RedFlagsControllers from '../controllers/redFlagsControllers';

const router = express.Router();

router.post('/', RedFlagsControllers.createRedFlag);

export default router;
