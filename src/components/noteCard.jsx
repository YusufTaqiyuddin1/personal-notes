import React from "react";
import { showFormattedDate } from "../utils";
import { ButtonArchive, ButtonDelete } from "./buttons";

const NoteCard = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div id={id} className="note-item">
      <section className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </section>

      <section className="note-item__action">
        <ButtonDelete
          className="note-item__delete-button"
          label="delete"
          eventHandler={() => deleteNote(id)}
        />
        <ButtonArchive
          className="note-item__archive-button"
          eventHandler={() => toggleArchive(id)}
          label={archived ? "unarchived" : "archive"}
        />
      </section>
    </div>
  );
};

export default NoteCard;
