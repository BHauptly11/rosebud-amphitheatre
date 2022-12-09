import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'


function Band({band}) {
    return (
    <div className='band-item'>
        
        <Item>
      <Item.Image src={band.image} alt={band.name} className='band-image' height= '700px' width= '275px'/>

      <Item.Content>
        <Item.Header as='a'>{band.name}</Item.Header>
        <Item.Description></Item.Description>
        <Item.Extra>
          <Label>{band.description}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
        <div>
          {/* <Button primary floated='left'>
            Buy tickets
            <Icon name='right chevron' />
          </Button> */}
          </div>
        
        
        {/* <img src={band.image} className="band" alt={band.name} />
        <h3>{band.name}</h3>
        <p>{band.description}</p> */}
    </div>
    )
}

export default Band