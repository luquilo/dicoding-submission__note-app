import React from "react";
import './note-app.css'

export function NoteInput() {
    return (
        <div className="note-input">

            <p className="note-input__title">Buat Catatan</p>
            <form>
                <input className="note-input__input" type="text" placeholder="Tuliskan judul disini" />
                <textarea className='note-input__textArea' id="" cols="30" rows="10" placeholder="Tuliskan catatanmu disini"></textarea>
            </form>
            <button>Buat</button>

        </div>
    )
}

