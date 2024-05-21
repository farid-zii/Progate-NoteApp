import React, { useState } from 'react'
import Home from './src/screens/Home'
import { Text } from 'react-native'
import AddNote from './src/screens/AddNote'
import EditNote from './src/screens/EditNote'

const CurrentPageWidget=({
  currentPage,noteList,setCurrentPage,addNote,deleteNote
})=>{
  switch(currentPage){
    case 'home':
      return(
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>
    case 'edit':
      return <EditNote/>
    default:
      return <Home/>
  }
}

const App = () => {

  const addNote = (title,desc)=>{
    const id = noteList.length >0 ? noteList[noteList.length - 1].id+1:1
  
    setNoteList([
      ...noteList,
      {
        id,
        title:title,
        desc:desc
      },
    ])
  }

  const deleteNote = (id)=>{
    setNoteList(noteList.filter((item)=>item.id!== id));
  }
  

  const [currentPage,setCurrentPage]=useState('home')
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  return ( 
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}

      deleteNote={deleteNote}
    />
  )
}

export default App