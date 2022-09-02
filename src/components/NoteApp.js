import React from "react";
import "./note-app.css";
import NoteNavBar from "./noteNavBar";
import { NoteInput } from "./NoteInput";
import { NotesList } from "./NotesList";
import { getInitialData } from "./initialData";
import { EmptyNoteMessage } from "./emptyNoteMessage";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    //inisiasi state
    this.state = {
      data: [],
      newNote: {
        judul: "",
        noteValue: "",
      },
    };
    //harus bind handler untuk akses this pada handler
    this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
  }


  //megambil data dari utils/getInitialData
  componentDidMount() {
    const data = getInitialData();
    this.setState((previousState) => {
      return {
        ...previousState,
        data,
      };
    });
  }

  //fungsi-fungsi untuk memperbarui state

  //handler menambahkan note dari form ke state menggunakan set state
  OnSubmitHandler() {
    const { newNote } = this.state;
    const dataNote = {
      id: +new Date(),
      title: newNote.judul,
      body: newNote.noteValue,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    //menggunakan setState untuk memerbarui data pada state
    const newDataNotes = this.state.data.concat(dataNote);
    this.setState({
      data: newDataNotes,
      newNotes: {
        title: "",
        note: "",
      },
    });
  }

  //handler untuk title note
  onChangeTitleHandler = (title) => {
    this.setState((previousState) => {
      return {
        ...previousState,
        newNotes: {
          ...previousState.newNotes,
          title: title,
        },
      };
    });
  };

  //handler untuk value dari note
  onChangeNotesHandler = (newNoteValue) => {
    this.setState((previousState) => {
      return {
        ...previousState,
        newNotes: {
          ...previousState.newNotes,
          note: newNoteValue,
        },
      };
    });
  };


  //handler menghapus note
  onDeleteHandler = (id) => {
    // const deleteConfirm = window.confirm(
    //   "Kamu yakin akan menghapus data catatan?"
    // );
    if (true) {
      const index = this.findIndexNote(id);
      const deletedData = this.state.data;
      deletedData.splice(index, 1);
      //menggunakan splice untuk menghapus note

      this.setState((previousState) => {
        return {
          ...previousState,
          data: deletedData,
        };
      });
    }
  };

  // handler untuk merubah status arsip
  onChangeStatusNote = (id, status) => {
    const changedData = this.state.data.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          archived: !status,
        };
      } else {
        return data;
      }
    });
    this.setState({ data: changedData });
  };

  render() {
    //status notes
    let activeNotes = [];
    let archivedNotes = [];

    return (




      <div className="note-app">
        <NoteNavBar />
        <div className="note-app__body">
          <NoteInput 
            OnSubmitHandler={(event)=>{
              event.preventDefault();
              this.OnSubmitHandler();
            }}
            onChangeNotesHandler={(val)=>this.onChangeNotesHandler(val.target.newNoteValue)}
            valueForm={this.state.newNote}
          />
          <h2 className="catatan-aktif__title">Catatan aktif</h2>
          <div className="notes-list">
            {this.state.data.map((val) => {
              return <NotesList data={val} />;
            })}
          </div>
          <div className="arsip-title">
            <h2>Arsip</h2>
            <p><EmptyNoteMessage/></p>
          </div>

        </div>
      </div>
    );
  }
}

export default NoteApp;
