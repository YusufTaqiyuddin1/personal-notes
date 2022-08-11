import { useState } from "react";
import Input from "./input";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: body,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <div className="note-input">
      <h2 className="note-input__title">Buat catatan</h2>
      <p className="note-input__title__char-limit">
        Sisa karakter: <span>{50 - title.length}</span>
      </p>
      <form onSubmit={createNote}>
        <Input
          type="text"
          value={title}
          onChange={setTitle}
          placeholder="Ini adalah judul..."
          id="title"
          name="title"
          required
        />
        <Input
          type="textarea"
          className="note-input__body"
          value={body}
          onChange={setNote}
          placeholder="Tuliskan catatan di sini..."
          id="body"
          name="body"
          required
        />
        <button type="submit" id="submit_form" name="submit_form">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormInput;
