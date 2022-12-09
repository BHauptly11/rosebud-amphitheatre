import { useState } from "react";
import { Form, Header, Button } from 'semantic-ui-react'


const NewConcessionForm = ({onConcessionFormSubmit}) => {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        price: 0
    })
    
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((formData) => ({...formData, [name]: value}))
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onConcessionFormSubmit(formData)
    }
    
    
    
    
    
    
    
    
    return (
        
        <Form onSubmit={handleSubmit}>
        <Header as='h3' dividing>
        Add A Tasty Snack Below!
      </Header>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Concession Name' placeholder='Insert concession name...' value={formData.name} type="text" name="name" onChange={handleChange}></Form.Input>
          <Form.Input fluid label='Concession Image' placeholder='Image URL...' value={formData.image} type="text" name="image" onChange={handleChange} />
          <Form.Input fluid label='Concession Price:' placeholder='$...' value={formData.price} type="number" name="price" onChange={handleChange} />
          <Form.Button type='submit'>Submit</Form.Button>
          </Form.Group>
          </Form>        
        
        // <form onSubmit={handleSubmit}>
        //     <h2>Add New Concession</h2>
        //     <label>Concession Name:</label>
        //     <input value={formData.name} type="text" name="name" placeholder="Concession's Name" onChange={handleChange}></input>
        //     <label>Concession Image:</label>
        //     <input value={formData.image} type="text" name="image" placeholder="Concession's Image" onChange={handleChange}></input>
        //     <label>Concession Price:</label>
        //     <input value={formData.price} type="number" name="price" placeholder="Concession's Price" onChange={handleChange}></input>
        //     <button type="submit">Add Concession</button>
        // </form>
    )
}










export default NewConcessionForm;