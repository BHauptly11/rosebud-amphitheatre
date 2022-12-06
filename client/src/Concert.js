// needs conditional rendering: 
// small mode with min info for appearing in the concerts list 
// large mode with bands for displaying by itself

// import Band from './Band'

function Concert({concert}) {
    return (
        <>
        <img src="{concert.image}" />
        <h2>{concert.headline}</h2>
        <h3>{concert.subtitle}</h3>
        <p>{concert.date}</p>
        <p>Doors: {concert.doors} Showtime: {concert.start_time}</p>
        </>
    )
}

export default Concert