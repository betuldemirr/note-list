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

    let content = <h3>{note.title}</h3>;
    if(showEdit) {
        content = <NoteEdit note={note} onEdit={onEdit} />;
    }

    return <div className="note-show">
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