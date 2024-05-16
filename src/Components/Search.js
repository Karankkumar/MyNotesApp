import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.8em' />
      <input
       className='input-input'
       type="text" 
       placeholder="type to Search..." 
       onChange={(event)=> handleSearchNote(event.target.value)}
      />
    </div>
  )
}

export default Search
