import { Router } from 'express';

import { getAllNotes, createNote } from '../controllers/notes.controller.js';

const router = Router();

router.get('/notes', getAllNotes);
router.post('/notes', createNote);

export default router;
