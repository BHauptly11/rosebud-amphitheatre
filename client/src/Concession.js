import React from "react";
import {NavLink} from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react'


function Concession(props) {



    return (
      
      <div>
      <img src={props.concession.image} alt={props.concession.name}/>
      <div>Name: {props.concession.name}</div>
      <div>Price: {props.concession.price}</div>
      {localStorage.email ?<Button animated='vertical' onClick={() => props.deleteConcession(props.concession) }>
    <Button.Content hidden>Delete</Button.Content>
    <Button.Content visible>
      <Icon name='trash' />
    </Button.Content>
  </Button> : null }
  {localStorage.email? <NavLink to={`/concession/${props.concession.id}/EditForm`} name="Edit Concession">
      <Button animated='vertical'>
    <Button.Content hidden>Edit</Button.Content>
    <Button.Content visible>
      <Icon name='edit' />
    </Button.Content>
  </Button>
      </NavLink> : null}
  </div>
      
      )
    }
    
    export default Concession;
    // <div>
    //     <img src={props.concession.image} alt={props.concession.name}/>
    //     <div>Name: {props.concession.name}</div>
    //     <div>Price: {props.concession.price}</div>
    //     {localStorage.email ? <button onClick={() => props.deleteConcession(props.concession) }>Delete Concession</button> : null }
    //     {localStorage.email? <NavLink to={`/concession/${props.concession.id}/EditForm`} name="Edit Concession">Edit Concession</NavLink> : null}
    // </div>