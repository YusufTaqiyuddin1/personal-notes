import React from "react";

const ButtonDelete = ({label, eventHandler}) =>{
    return (
      <button
        className="note-item__delete-button"
        type="button"
        onClick={eventHandler}
        data-action={label}
      >
        {label}
      </button>
    );
}

const ButtonArchive = ({ label, eventHandler }) => {
  return (
    <button
      className="note-item__archive-button"
      type="button"
      onClick={eventHandler}
      data-action={label}
    >
      {label}
    </button>
  );
};
export {ButtonDelete, ButtonArchive};