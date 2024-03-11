import { useState } from "react";

function NoteCreate ({ onCreate }) {

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>create a note</label>
                <input value={title} onChange={handleChange} />
                <button>Create</button>
            </form>
        </div>
    );
};
export default NoteCreate;