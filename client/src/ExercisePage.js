import React, { useState, useEffect } from 'react'
import ExerciseContainer from "./ExerciseContainer"
import NewExerciseForm from "./NewExerciseForm"

export default function ExercisePage() {
    const [exercises, setExercises] = useState([])
// const [searchExercises, setSearchExercises] = useState("")
    


    useEffect(() => {
        fetch('/exercises')
        .then(resp => resp.json())
        .then(exerData => setExercises(exerData))
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

    //  const filteredExercises = exercises?.filter((exerObj) => exerObj.name?.toLowerCase().includes(searchExercises?.toLowerCase()))
    
    

    return (
        <div className="exer-page">
            {/* <Search setSearchExercises={setSearchExercises}/> */}
            <ExerciseContainer deleteExer={deleteExer} updateExer={updateExer} exercises={exercises} />
            <NewExerciseForm addNewExer={addNewExer}/>
        </div>
    )
}
