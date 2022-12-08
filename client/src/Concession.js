import React from "react";
import {NavLink} from "react-router-dom"

function Concession(props) {



    return (
    <div>
        <img src={props.concession.image} alt={props.concession.name}/>
        <div>Name: {props.concession.name}</div>
        <div>Price: {props.concession.price}</div>
        {localStorage.email ? <button onClick={() => props.deleteConcession(props.concession) }>Delete Concession</button> : null }
        {localStorage.email? <NavLink to={`/concession/${props.concession.id}/EditForm`} name="Edit Concession">Edit Concession</NavLink> : null}
    </div>
    )
}

export default Concession;