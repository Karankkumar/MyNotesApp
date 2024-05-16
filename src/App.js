import { useState,useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "06/10/23",
    },
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "06/10/23",
    },
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "06/10/23",
    },
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "06/10/23",
    },
  ]);

  const [SearchText, setSearchText] = useState("");
  const [darkMode, setdarkMode] = useState(false);
  
  // retriving the data from localstorage
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    
    // if we find data from localstorage,update the state
    if(savedNotes){
      setnotes(savedNotes)
    }
  },[]);
 
  // saving the notes in local storage when user add new note or delete any note
  useEffect(()=>{
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  },[notes]);

  // getting the details of addnote using this function
  const Addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setnotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <Header handleToggleDarkMode={setdarkMode} />
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(SearchText)
          )}
          handleAddnote={Addnote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
