import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import LoginPage from "./LoginPage";
// import Header from "./Header";
// import ExercisePage from "./ExercisePage";
// import UserPage from "./UserPage";
// import ExerciseDetail from './ExerciseDetail';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
        
        fetch('/exercises')
        .then(resp => resp.json())
        .then(exerData => setExercises(exerData))
      })
  }, [])

  const addNewExer = (newExerObj) => {
    setExercises((prevArray) => [...prevArray, newExerObj])
}

const updateExer = (updatedExer) => {

    const updatedArray = exercises.map((oldExerObj) => {
        if(updatedExer.id === oldExerObj.id) {
            return {...updatedExer}
        } else{
            return oldExerObj
        }
    })

    setExercises(updatedArray)
}

const deleteExer = (clickedExer) => {
    const newArray = exercises.filter((oldExerObj) => oldExerObj.id !== clickedExer.id)
    setExercises(newArray)
}


  if(!authChecked) { return <div></div>}
  return (
    <Router>
    
      {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} addNewExer={addNewExer} updateExer={updateExer} deleteExer={deleteExer} exercises={exercises}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />
        )
      }
   </Router>
   
  )
}

export default App;


