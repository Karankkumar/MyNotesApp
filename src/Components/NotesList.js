import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const NotesList = ({notes , handleAddnote , handleDeleteNote}) => {
  return (
    <div className='note-list'>
      {
        notes.map((note)=> (
          <Notes
           id={note.id}
           text={note.text} 
           date={note.date}
           handleDeleteNote={handleDeleteNote}
           />
        ))
      }
      <AddNote handleAddnote={handleAddnote}/>
    </div>
  )
}

export default NotesList
