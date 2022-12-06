import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <h2>Add New Concession</h2>
            <label>Concession Name:</label>
            <input value={formData.name} type="text" name="name" placeholder="Concession's Name" onChange={handleChange}></input>
            <label>Concession Image:</label>
            <input value={formData.image} type="text" name="image" placeholder="Concession's Image" onChange={handleChange}></input>
            <label>Concession Price:</label>
            <input value={formData.price} type="number" name="price" placeholder="Concession's Price" onChange={handleChange}></input>
            <button type="submit">Add Concession</button>
        </form>
    )
}










export default NewConcessionForm;