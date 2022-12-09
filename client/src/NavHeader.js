import {NavLink} from 'react-router-dom'
import { Header, Icon, Input, Menu, Segment } from 'semantic-ui-react'


function NavHeader () {
    return (
    <div>
        <div className='header-align'>
        <Header textAlign='center' as='h2'>
            <Icon name='deaf' />
        <Header.Content >
            Rosebud Amphitheater
            <Header.Subheader>Where loud is normal</Header.Subheader>
        </Header.Content>
        </Header>
        </div>
            <div className='menu-align'>
            <Menu pointing>
            <NavLink to={`/`}>
            <Menu.Item
                name='concerts'
                as='a'
                
            />
            </NavLink>
            <NavLink to={`/concessions`}>
            <Menu.Item
                    name='Concessions'
                    as='a'
            />
            </NavLink> 
            {/* add conditional start here */}
            {localStorage.email ?
            <>
            <NavLink to={`/newband`}>
            <Menu.Item
                    name='Add Band'
                    as='a'
            />
            </NavLink>
            <NavLink to={`/newconcert`}>
            <Menu.Item
                    name='Add Concert'
                    as='a'
            />
            </NavLink>
            <NavLink to={`/newconcession`}>
            <Menu.Item
                    name='Add Concession'
                    as='a'
            />
            </NavLink>
            </>
            :null}
            </Menu>
            </div>
    </div>
    )
}

export default NavHeader


{/* <NavLink to={`/`}>Concerts</NavLink>
<NavLink to={`/concessions`}>Concessions</NavLink>
{localStorage.email ? 
<>
<NavLink to={`/newband`}>Add Band</NavLink>
<NavLink to={`/newconcert`}>Add Concert</NavLink>
<NavLink to={`/newconcession`}>Add Concession</NavLink> 
</>
: null} */}