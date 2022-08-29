import React from "react";
import './note-app.css';

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sayHello: 'hello, my name is luqman'
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.sayHello}</p>
            </div>
        )
    }
}

export default NoteApp;