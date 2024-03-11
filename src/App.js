import { useState } from "react";
import NoteCreate from "./components/NoteCreate";

function App () {

    const [notes, setNotes] = useState([]);

    const handleCreateNotes = (title) => {
        console.log(title);
    };

    return (
        <div>
            <NoteCreate onCreate={handleCreateNotes} />
        </div>
    );
};
export default App;