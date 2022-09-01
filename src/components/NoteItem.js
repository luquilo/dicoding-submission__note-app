import React from "react";
import { ArsipkanButton } from "./ArsipkanButton";
import { DeleteButton } from "./DeleteButton";


export function NoteItem({data}){
    return(
        <div className="note-item">
            <div className="note-item-data">
                <h1>judul caatatan</h1>
            </div>

            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda libero facere provident quod quo, voluptas ipsa, esse accusamus necessitatibus non, qui vel dolorem fugit! Maxime eveniet error quia quidem assumenda.</p>
            </div>
            
            <div className="note-item-button">
                <DeleteButton />
                <ArsipkanButton />
            </div>
        </div>
    )
}