import Note from '../models/Note.js';

// error handling logic in the middleware
export const getAllNotes = async (_req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
};

export const createNote = async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json(newNote);
};
