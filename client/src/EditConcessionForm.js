import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditConcessionForm = ({onEditConcession}) => {
    const {id} = useParams()
    const [formData, setFormData] = useState({
        id: id,
        name: "",
        image:"",
        price: 0
    })

    useEffect(() => {
        fetch(`http://localhost:3000/concessions/${id}`)
        .then(res => res.json())
        .then(concessionInfo => {
            setFormData(concessionInfo)
        })
    },[])

    const handleChange = (event) => {
        let {name, value} = event.target
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEditConcession(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Edit Concession:</h1>
                <label>Concession Name</label>
                <input value={formData.name} type="text" name="name" placeholder="Concession's Name" onChange={handleChange}/>
                <label>Concession Image</label>
                <input value={formData.image} type="text" name="image" placeholder="Concession's Image URL" onChange={handleChange}/>
                <label>Concession Price</label>
                <input value={formData.price} type="number" name="price" placeholder="Concession's Price" onChange={handleChange}/>
                <button type="submit">Edit Concession</button>
            </form>
        </>
    )
}

export default EditConcessionForm;