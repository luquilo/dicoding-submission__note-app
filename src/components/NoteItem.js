import React from "react";
import { ArsipkanButton } from "./ArsipkanButton";
import { DeleteButton } from "./DeleteButton";
import { showFormattedDate } from "./initialData";


export function NoteItem({ data }) {
    return (
        <div className="note-item">
            <div className="note-item-title">
                <h1>{data.title}</h1>
            </div>

            <div className="note-item-data">
                <div>
                    <p>{showFormattedDate(data.createdAt)}</p>
                </div>

                <div>
                    <p className="isi-catatan">
                        {data.body}
                    </p>
                </div>

                <div className="note-item-button">
                    <DeleteButton />
                    <ArsipkanButton />
                </div>
            </div>


        </div>
    )
}