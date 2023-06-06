import React from 'react'

const Directions = ({strInstructions}) => {
    let directions = strInstructions.split('.');

    let directionList;

    if (strInstructions) {
        directionList = directions.map((instruction, index) => {
            if (instruction.length > 5) {
            return (
                <p key={index} className="text-dark m-3"><span>-</span>{instruction}</p>
            )
        }
        })
        return <>{directionList}</>
    }
}


export default Directions;