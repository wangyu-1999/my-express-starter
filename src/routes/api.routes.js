import { Router } from 'express';

import greetingRoutes from './greeting.routes.js';

const router = Router();

router.use('/greeting', greetingRoutes);

export default router;
