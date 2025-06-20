const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Add a note
router.post('/', async (req, res) => {
  const newNote = new Note({ text: req.body.text });
  const saved = await newNote.save();
  res.json(saved);
});

// Delete a note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
