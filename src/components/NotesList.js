import React from "react";
import { NoteItem } from "./NoteItem";

export function NotesList({data}){
    //this component should render the list of notes
    //perulangan


    console.log(data)

    return(
        <div className="note-list__wrapper">
            <div className="note-list__container">
                <NoteItem />
            </div>
        </div>
    )
}