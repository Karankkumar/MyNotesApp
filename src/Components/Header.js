import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
      <h1>MyNotes</h1>
      <button 
       className='save'
       onClick={()=>
          handleToggleDarkMode((prevMode) => !prevMode)}>
       Toggle Mode</button>
    </div>
  )
}

export default Header
