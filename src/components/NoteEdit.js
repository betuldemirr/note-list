import { useState } from "react";

function NoteEdit ({ note, onSubmit }) {

    const [title, setTitle] = useState(note.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(note.id, title); 
    };

    return <form className="note-edit" onSubmit={handleSubmit} >
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">save</button>
        </form>;
};
export default NoteEdit;