import React from "react";
import { NoteItem } from "./NoteItem";
import './note-app.css'

export function NotesList({ data }) {
    //this component should render the list of notes
    //perulangan

    return (
        <div className="note-list__value">
            <NoteItem data={data} />
        </div>
    )
}