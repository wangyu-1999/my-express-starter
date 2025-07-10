import Note from '../models/Note.js';
import logger from '../utils/logger.js';

export const getAllNotes = async (_req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    logger.error('Error fetching notes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    logger.error('Error creating note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
