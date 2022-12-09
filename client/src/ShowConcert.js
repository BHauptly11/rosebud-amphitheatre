import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Band from './Band'
import { Header, Icon, Image, Button } from 'semantic-ui-react'

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
        <div className='headline-div'>
                <Header as='h2' icon textAlign='center'>
      <Icon name='fast forward' circular size='huge'/>
      <Header.Content>{concert.headline}</Header.Content>
      <Header sub>{concert.date}</Header>
    <Button primary floated='center'>
        Buy tickets
        <Icon name='right chevron' />
      </Button>
    </Header>
        {/* <h1>{concert.headline}</h1>
        <h2>{concert.date}, Doors at {concert.doors}</h2> */}
        <p>{concert.bands.map(band => <Band key={band.id} band={band} />)}</p>


        </div>
        :
        <p>Loading...</p>
    )

}

export default ShowConcert