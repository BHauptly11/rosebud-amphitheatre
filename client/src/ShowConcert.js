import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Band from './Band'
const concertUrl="http://localhost:3000/concerts/"

function ShowConcert() {
    const {id} = useParams()
    const [concert, setConcert] = useState(null)

    useEffect(() => {
        fetch(`${concertUrl}${id}`)
        .then(res => res.json())
        .then(setConcert)
    }, [])

    return(
        concert ?
        <>
        <h1>{concert.headline}</h1>
        <h2>{concert.date}, Doors at {concert.doors}</h2>
        <p>{concert.bands.map(band => <Band key={band.id} band={band} />)}</p>

        </>
        :
        <p>Loading...</p>
    )

}

export default ShowConcert