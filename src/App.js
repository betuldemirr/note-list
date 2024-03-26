import { useState } from "react";
import NoteCreate from "./components/NoteCreate";
import NoteList from "./components/NoteList";

function App () {

    const [notes, setNotes] = useState([]);

    const editNoteById = (id, newTitle) => {
        const updatedNotes = notes.map( (note) => {
            if(note.id === id) {
                return {...note, title: newTitle};
            }
            return note;
        });
        setNotes(updatedNotes);
    };

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
            <h1>Note List</h1>
            <NoteList onEdit={editNoteById} notes={notes} onDelete={deleteNoteById} />
            <NoteCreate onCreate={createNote} />
        </div>
    );
};
export default App;