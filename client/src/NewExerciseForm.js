import React, { useState } from 'react'

export default function NewExerciseForm({addNewExer}) {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const newExer = {
            image: image,
            name: name,
            category: category,
            description: description
        }

        const options = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newExer)
    } 

    fetch('/exercises', options)
    .then(resp => resp.json())
    .then(newExer => {
        addNewExer(newExer)
        setImage("");
        setName("");
        setCategory("");
        setDescription("");
    })
    }

// Some way to have added new exercises make a change to the equipment table?
// Will probably need some way to correspond equipment table to new exercises

    console.log(handleSubmit)

    return (
        <div className="new-exer-form">
            <h3>Add A New Exercise</h3>
            <form onSubmit={handleSubmit}>
                Image: <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image"/><br/>
                Name: <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name"/><br/>
                Category: <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="age" placeholder="Category"/><br/>
                Description: <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description"/><br/>
                <button type="submit">Add Exercise</button>
            </form>
        </div>
    );
}
