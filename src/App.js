import { useState, useEffect } from "react";
import NoteCreate from "./components/NoteCreate";
import NoteList from "./components/NoteList";
import axios from 'axios';

function App () {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async() => {
        const response = await axios.get('http://localhost:3001/notes');
        setNotes(response.data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const editNoteById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/notes/${id}`, {
            title: newTitle
        });

        const updatedNotes = notes.map( (note) => {
            if(note.id === id) {
                return {...note, ...response.data};
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

    const createNote = async(title) => {
        const response = await axios.post('http://localhost:3001/notes', {
            title: title
        });

        const updatedNotes = [
            ...notes,
            response.data,
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