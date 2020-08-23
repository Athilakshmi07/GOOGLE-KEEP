import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Takenote from "./Components/Takenote/Takenote";
import Note from "./Components/Note/Note";
import Footer from "./Components/Footer/Footer";

function App() {
  const [notes,setNotes]=useState([]);
  const addNote=(newnote)=>{
    setNotes((prevNotes)=>{
      return[...prevNotes,newnote];
    })
  }
  const deleteNote=(id)=>{
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id
      })
    })
  }

  return (
    <div className="App">
    <Header />
    <Takenote  addNote={addNote}/>
    {notes.map((note,index) => {
      return  <Note id={index} title={note.title} content={note.content}  deleteNote={deleteNote}/> ;
    })}
    <Footer />
    </div>
  );
}

export default App;
        