import React from "react";
import './note-app.css';
import { getInitialData } from "./initialData";
import { showFormattedDate } from "./initialData";
import NoteNavBar from "./noteNavBar";
import {NoteInput} from "./NoteInput";
import { NotesList } from "./NotesList";

class NoteApp extends React.Component {    
    constructor(props){
        super(props);
        this.state={
        }
    }

    //fungsi-fungsi untuk memperbarui state

    render(){
            return(
            <div className="note-app">
                <NoteNavBar />
                <div className="note-app__body">
                    
                    <NoteInput />
                    <NotesList />
                </div>                
            </div >
        )
    }
}

export default NoteApp;