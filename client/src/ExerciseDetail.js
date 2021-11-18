import React from 'react';

function ExerciseDetail({selectedExercise}) {
    return (
     <div>
    <h4>Category : {selectedExercise.category}</h4>
    <h4>Description : {selectedExercise.description}</h4> 
    </div>
    )
}

export default ExerciseDetail;
