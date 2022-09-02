import React from "react";
import "./note-app.css";

export function NoteInput(props) {
  const { valueForm, onSubmitHandler, onChangeNotesHandler, onChangeTitleHandler } =
    props;
  return (
    <div className="note-input">
      <h1 className="note-input__title">Buat Catatan</h1>

      <form onSubmit={onSubmitHandler}>
        <input
          required
          maxLength={50}
          className="note-input__input"
          type="text"
          placeholder="Tuliskan judul disini"
          value={valueForm.judul}
          onChange={onChangeTitleHandler}
        />

        <textarea
          required
          className="note-input__textArea"
          type="text"
          placeholder="Tuliskan catatanmu disini"
          value={valueForm.noteValue}
          onChange={onChangeNotesHandler}
        ></textarea>
      </form>

      <button>Buat</button>
    </div>
  );
}
