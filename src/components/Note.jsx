import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div>
          <MdDeleteForever
            className="delete-icon"
            y
            size="1.3rem"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
