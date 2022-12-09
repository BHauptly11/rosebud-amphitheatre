import {useState} from 'react';
import { Form, Header, Button } from 'semantic-ui-react'



const NewBandForm = ({onBandFormSubmit}) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((formData) => ({...formData, [name]: value}))
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onBandFormSubmit(formData)
    }

    return (
        
        <Form onSubmit={handleSubmit}>
        <Header as='h3' dividing>
        Add A New Band Below!
      </Header>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Band Name' placeholder='Insert band name...' value={formData.name} type="text" name="name" onChange={handleChange}></Form.Input>
          <Form.Input fluid label='Band Image' placeholder='Image URL...' value={formData.image} type="text" name="image" onChange={handleChange} />
          <Form.Input fluid label='Band Description' placeholder='Tell us about the band...' value={formData.description} type="text" name="description" onChange={handleChange} />
          <Form.Button type='submit'>Submit</Form.Button>
          </Form.Group>
          </Form>


        
        // <form onSubmit={handleSubmit}>
        //     <h2>Add New Band</h2>
        //     <label>Band Name:</label>
        //     <input value={formData.name} type="text" name="name" placeholder="Band's Name" onChange={handleChange}></input>
        //     <label>Band Image:</label>
        //     <input value={formData.image} type="text" name="image" placeholder="Band's Image" onChange={handleChange}></input>
        //     <label>Band Description:</label>
        //     <input value={formData.description} type="text" name="description" placeholder="Band's Description" onChange={handleChange}></input>
        //     <button type="submit">Add Band</button>
        // </form>
    )




}
















export default NewBandForm;