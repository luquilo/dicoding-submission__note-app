import React from "react";
import { ArsipkanButton } from "./ArsipkanButton";
import { DeleteButton } from "./DeleteButton";


export function NoteItem(){
    return(
        <div className="note-item">
            <div className="note-item-data">
                <h1>Babel</h1>
            </div>
            
            <div className="note-item-button">
                <DeleteButton />
                <ArsipkanButton />
            </div>
        </div>
    )
}