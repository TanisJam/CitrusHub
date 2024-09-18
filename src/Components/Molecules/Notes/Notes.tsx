import { useState } from 'react';

interface Note {
  id: number;
  content: string;
  date: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      const note: Note = {
        id: Date.now(),
        content: newNote,
        date: new Date().toLocaleString(),
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Notes</h1>
      <div className="mb-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-2" onClick={addNote}>
          Add Note
        </button>
      </div>
      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p>{note.content}</p>
              <div className="card-actions justify-end">
                <span className="text-sm text-gray-500">{note.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
