// needs conditional rendering: 
// small mode with min info for appearing in the concerts list 
// large mode with bands for displaying by itself

import {NavLink} from 'react-router-dom'

function Concert({concert}) {
    return (
        <>
        <NavLink to={`/concert/${concert.id}`}>
        <img src={concert.image} alt={concert.headline} />
        <h2>{concert.headline}</h2>
        </NavLink>
        <h3>{concert.date}</h3>
        <p>{concert.subtitle}</p>
        <p>Doors: {concert.doors} Showtime: {concert.start_time}</p>
        </>
    )
}

export default Concert