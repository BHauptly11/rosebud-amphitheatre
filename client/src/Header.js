import { Header, Icon } from 'semantic-ui-react'


function SiteHeader () {
    return (
        <div className='title-header'>
            <Header as='h2' className='title-header'>
            <Icon name='angle double right' />
            <Header.Content>
            Rosebud Amphitheater
            <Header.Subheader>Where loud is normal</Header.Subheader>
            </Header.Content>
        </Header>
      </div>
        )
    }
    // <h1>Rosebud Amphitheater</h1>

export default SiteHeader