import {NavLink} from 'react-router-dom'

function Header () {
    return (
    <div>
        <h1>Rosebud Amphitheater</h1>
        <NavLink to={`/`}>Concerts</NavLink>
        <NavLink to={`/concessions`}>Concessions</NavLink>
        <NavLink to={`/newband`}>Add Band</NavLink>
        <NavLink to={`/newconcert`}>Add Concert</NavLink>
    </div>
    )
}

export default Header