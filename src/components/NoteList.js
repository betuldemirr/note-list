import NoteShow from "./NoteShow";

function NoteList ({ notes, onDelete, onEdit }) {

    const renderedNotes = notes.map( (note) => {
        return (
            <NoteShow key={notes.id} note={note} onDelete={onDelete} onEdit={onEdit} />
        );
    });

    return <div className="note-list">{renderedNotes}</div>;
};
export default NoteList;