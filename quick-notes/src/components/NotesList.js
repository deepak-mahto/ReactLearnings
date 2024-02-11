import Note from "./Note";
import AddNote from "./AddNote";
import { Fragment } from "react";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <Fragment>
      <div className="notes-list">
        <AddNote handleAddNote={handleAddNote} />
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default NotesList;
