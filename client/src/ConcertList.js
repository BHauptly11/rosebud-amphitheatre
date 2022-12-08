import Concert from './Concert'
import { Header, Icon } from 'semantic-ui-react'




function ConcertList({concerts}) {

    return (
        concerts ?
            <>
                <Header
                    as='h2'
                    content='Upcoming Concerts'
                    subheader='Grab tickets below!'
                />
                <Icon name='angle double down'/>
                {/* <h1>Upcoming Concerts</h1> */}
                {concerts.map(concert => <Concert key={concert.id} concert={concert} />)}
            </>
    :
        <p>Loading...</p>)
}

export default ConcertList;