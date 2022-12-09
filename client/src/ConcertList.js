import Concert from './Concert'
import { Header, Icon } from 'semantic-ui-react'




function ConcertList({concerts}) {

    return (
        concerts ?
        <>
            
            <Header textAlign='center' dividing
                as='h2'
                content='Upcoming Concerts'
                subheader='Grab tickets below!'
            />
            {/* <h1>Upcoming Concerts</h1> */}
            {concerts.map(concert => <Concert key={concert.id} concert={concert} />)}
        </>
:
    <p>Loading...</p>)
    }
    
    export default ConcertList;
    //     concerts ?
    //         <>
    //             <h1>Upcoming Concerts</h1>
    //             {concerts.map(concert => <Concert key={concert.id} concert={concert} />)}
    //         </>
    // :
    //     <p>Loading...</p>)