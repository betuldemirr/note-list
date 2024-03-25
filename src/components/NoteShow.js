function NoteShow ({ note, onDelete }) {

    const handleClick = () => {
        onDelete(note.id);
    };

    return <div className="note-show">
        {note.title}
        <div className="actions">
            <button className="delete" onClick={handleClick} >
                Delete
            </button>
        </div>
    </div>;
};
export default NoteShow;