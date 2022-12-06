import Concert from './Concert'



function ConcertList({concerts}) {

    return (
        concerts ?
            <>
                <h1>Upcoming Concerts</h1>
                {concerts.map(concert => <Concert key={concert.id} concert={concert} />)}
            </>
    :
        <p>Loading...</p>)
}

export default ConcertList;