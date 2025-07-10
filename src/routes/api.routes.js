import { Router } from 'express';

import greetingRoutes from './greeting.routes.js';
import notesRoutes from './notes.routes.js';

const router = Router();

router.use('/', greetingRoutes);
router.use('/', notesRoutes);

export default router;
