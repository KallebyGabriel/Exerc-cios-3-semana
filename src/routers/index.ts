import { Request, Response, Router } from "express";
import healthRouter from './health.router';

import studentsRouter from './students.router';

import storeRouter from './store.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/students', studentsRouter);
router.use('/store', storeRouter);

export default router;