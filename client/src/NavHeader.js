import {NavLink} from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'


function NavHeader () {
    return (
    <div>
        <h1>Rosebud Amphitheater</h1>
        <NavLink to={`/`}>Concerts</NavLink>
        <NavLink to={`/concessions`}>Concessions</NavLink>
        {localStorage.email ? 
        <>
        <NavLink to={`/newband`}>Add Band</NavLink>
        <NavLink to={`/newconcert`}>Add Concert</NavLink>
        <NavLink to={`/newconcession`}>Add Concession</NavLink> 
        </>
        : null}
    </div>
    )
}

export default NavHeader