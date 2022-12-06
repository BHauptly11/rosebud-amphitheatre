import React from "react";


function Concession(props) {



    return (
    <div>
        <img src={props.concession.image} alt={props.concession.name}/>
        <div>Name: {props.concession.name}</div>
        <div>Price: {props.concession.price}</div>
        <button></button>
    </div>
    )
}

export default Concession;