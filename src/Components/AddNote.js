import React from "react";
import { useState } from "react";

const AddNote = ({handleAddnote}) => {
  const [Notetext, setNotetext] = useState("");
  const characterLimit = 200;
  
  const handleChange = (event) => { 
    if(characterLimit - event.target.value.length >= 0) // 
    {
      setNotetext(event.target.value);
    }
  }

  const handlesaveClick = () =>{
    if(Notetext.trim().length > 0){
      handleAddnote(Notetext);
      setNotetext('');
    }

  }

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="10"
        placeholder="type a add a note..."
        onChange={handleChange}
        value={Notetext}
      ></textarea>

      <div className="note-footer">
        <small>{characterLimit - Notetext.length} remaining</small>
        <button className="save" onClick={handlesaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
