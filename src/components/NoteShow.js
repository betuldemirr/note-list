import { useState } from "react";
import NoteEdit from "./NoteEdit";

function NoteShow ({ note, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(note.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
        console.log(showEdit);
    };

    let content = <h3>{note.title}</h3>;
    if(showEdit) {
        content = <NoteEdit note={note} onSubmit={handleSubmit} />;
    }

    return <div className="note-show">
            <img alt="note" src={`https://picsum.photos/seed/${note.id}/300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick} >
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick} >
                    Delete
                </button>
            </div>
        </div>;
};
export default NoteShow;