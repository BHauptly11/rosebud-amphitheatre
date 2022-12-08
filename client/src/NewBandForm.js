import {useState} from 'react';


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
        <form onSubmit={handleSubmit}>
            <h2>Add New Band</h2>
            <label>Band Name:</label>
            <input value={formData.name} type="text" name="name" placeholder="Band's Name" onChange={handleChange}></input>
            <label>Band Image:</label>
            <input value={formData.image} type="text" name="image" placeholder="Band's Image" onChange={handleChange}></input>
            <label>Band Description:</label>
            <input value={formData.description} type="text" name="description" placeholder="Band's Description" onChange={handleChange}></input>
            <button type="submit">Add Band</button>
        </form>
    )




}
















export default NewBandForm;