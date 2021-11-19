import React, { useState } from 'react'


export default function ExerciseCard({ exerData, updateExer, deleteExer, setSelectedExercise }) {

const { name, image, category, description, id} = exerData;

    const [newName, setNewName] = useState("")
    const [newCategory, setNewCategory] = useState("")
    const [newDescription, setNewDescription] = useState("")
    
    const [showForm, setShowForm] = useState(false)


    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('/exercises/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name: newName, category: newCategory, description: newDescription})
        })
        .then(resp => resp.json())
        .then(updatedExer => updateExer(updatedExer))
}

const deleteHandler = () => {
    fetch('/exercises/'+id, {method: "DELETE"})
    .then(() => deleteExer(exerData))

}

// const addFavorite= () => {
//     console.log(id)
//     const user_id = 11  

// }

    return (
        
        <div onClick={() => setSelectedExercise(exerData)} className="exer-card">
            <img src={image} alt={name} className="exer-card-img"/>
            <h4>Exercise : {name}</h4>
            <h5>Category : {category}</h5>
            <h5>Description : {description}</h5>
            {/* <button onClick={addFavorite}>Favorite</button> */}
            {/* <h4>Equipment: </h4> */}
            <button onClick={deleteHandler}>Delete Exercise</button>
            <button onClick={() => setShowForm(!showForm)}>Edit Details</button>
            { showForm ? <form onSubmit={handleUpdate}>
                New Name: <input onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="input new name" name="name" type="text" />
                New Category: <input onChange={(e) => setNewCategory(e.target.value)} value={newCategory} placeholder="input new category" name="category" type="text" />
                New Description: <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} placeholder="input new description" name="description" type="text" />
                <input type="submit" />
            </form>: null}
        </div>
     
    );
}


