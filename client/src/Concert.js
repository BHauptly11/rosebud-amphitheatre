// needs conditional rendering: 
// small mode with min info for appearing in the concerts list 
// large mode with bands for displaying by itself

import {NavLink} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'


function Concert({concert}) {
    return (
        <Card color='purple'>
        <Image src='{concert.image}' wrapped ui={false} />
        <Card.Content>
        <NavLink to={`/concert/${concert.id}`}>
          <Card.Header>{concert.headline}</Card.Header>
        </NavLink>
          <Card.Meta>{concert.date}</Card.Meta>
          <Card.Description>
            {concert.subtitle}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='building' />
            {concert.doors}
          </a>
          <a>
            <Icon name='clock' />
            {concert.start_time}
          </a>
        </Card.Content>
      </Card>
        )
    }
    // <>
    // <NavLink to={`/concert/${concert.id}`}>
    // <img src="{concert.image}" alt={concert.headline} />
    // <h2>{concert.headline}</h2>
    // </NavLink>
    // <h3>{concert.date}</h3>
    // <p>{concert.subtitle}</p>
    // <p>Doors: {concert.doors} Showtime: {concert.start_time}</p>
    // </>

export default Concert