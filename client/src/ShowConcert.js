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
        <p>{concert.headline}</p>
        <p>{concert.bands.map(band => <Band key={band.id} band={band} />)}</p>
        </>
        :
        <p>Loading...</p>
    )

}

export default ShowConcert