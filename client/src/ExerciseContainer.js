import React from 'react'
import ExerciseCard from "./ExerciseCard"

export default function ExerciseContainer({ exercises, updateExer, deleteExer }) {
    // const [sortBy, setSortBy] = useState("id")

    // const sortedExercises = exercises.sort((ExerA, ExerB) => {
    //      if (sortBy === "id") {
    //          return ExerA.id - ExerB.id
    //      }else if (sortBy === "name"){
    //          return ExerA.name.localeCompare(ExerB.name)
    //      }else if (sortBy === "category"){
    //         return ExerA.category.localeCompare(ExerB.category)
    //     }else {
    //         return ExerA.id - ExerB.id
    //     }
    //  })

    const exerCards = exercises.map(exerObj => <ExerciseCard deleteExer={deleteExer} updateExer={updateExer} key={exerObj.id} exerData={exerObj}/>)


    return (
        <div className="exer-container">
            {/* <button onClick={() => setSortBy("id")}>Sort By Default</button>
            <button onClick={() => setSortBy("name")}>Sort By Name</button>
            <button onClick={() => setSortBy("category")}>Sort By Category</button> */}
            <ul className="cards">{exerCards}</ul>
        </div>
    )
}
