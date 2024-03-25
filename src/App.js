import { useState } from "react";
import NoteCreate from "./components/NoteCreate";
import NoteList from "./components/NoteList";

function App () {

    const [notes, setNotes] = useState([]);

    const deleteNoteById = (id) => {
        const updatedNotes = notes.filter( (note) => {
            return note.id !== id; //return false
        });
        setNotes(updatedNotes);
    };

    const createNote = (title) => {
        const updatedNotes = [
            ...notes,
            {
                id: Math.round(Math.random() * 9999), //create random id
                title,
            },
        ];
        setNotes(updatedNotes);
    }

    return (
        <div className="app">
            <NoteList notes={notes} onDelete={deleteNoteById} />
            <NoteCreate onCreate={createNote} />
        </div>
    );
};
export default App;