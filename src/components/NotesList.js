import React from "react";
import { NoteItem } from "./NoteItem";

export function NotesList(){
    //this component should render the list of notes
    return(
        <div className="note-list__wrapper">
            <div className="note-list__container">
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
            </div>
        </div>
    )
}