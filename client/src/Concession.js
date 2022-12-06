import React from "react";


function Concession(props) {



    return (
    <div>
        <img src={props.concession.image} alt={props.concession.name}/>
        <div>Name: {props.concession.name}</div>
        <div>Price: {props.concession.price}</div>
        <button onClick={() => props.deleteConcession(props.concession) }>Delete Concession</button>
        <button>Edit Concession</button>
    </div>
    )
}

export default Concession;