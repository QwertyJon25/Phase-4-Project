import './App.css';
import ExerciseContainer from "./ExerciseContainer";
// import UserPage from "./UserPage";
import ExerciseDetail from './ExerciseDetail';
import {Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './NavBar';
import NewExerciseForm from './NewExerciseForm'

function AuthenticatedApp({ currentUser, setCurrentUser,addNewExer, updateExer,deleteExer, exercises }) {
    const [selectedExercise, setSelectedExercise] = useState(null)
    // const [exercises, setExercises] = useState([])
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <span>
          {/* <NavLink to="/exercises">Exercises</NavLink>
          <NavLink to="/favorites">Favorites</NavLink> */}
           <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
          {/* <NavLink to="/events">Events</NavLink> */}
        </span>
        {/* <span>Welcome {currentUser.username} <button onClick={handleLogout}>Logout</button></span> */}
      </nav>
      <Routes>
     
        <Route path= "exercises" element={<ExerciseContainer deleteExer={deleteExer} updateExer={updateExer} setSelectedExercise={setSelectedExercise} exercises={exercises} />}/>
        <Route path="exercises/:exerciseId" element=
        {selectedExercise ? <ExerciseDetail selectedExercise={selectedExercise}/> : null}/>
        {/* <Route path="exercises" element= {<NewExerciseForm addNewExer={addNewExer}/>}/>
      {/* <Redirect to="/" />  */}         
     </Routes>
     <NewExerciseForm addNewExer={addNewExer}/>
    </div>
  );
}

export default AuthenticatedApp;