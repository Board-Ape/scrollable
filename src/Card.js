import React from 'react';

const Card = (props) => {
    let CardDisplay = !props.isScrolling ?
        (<h1>{props.title}</h1>) :
        (<h1>Is Loading...</h1>)
    return (
        <div className="cards">
            {CardDisplay}
        </div>
    )
} 

export default Card