import {useState} from 'react'

function NewConcertForm() {
    const [formData, setFormData] = useState({headline: "", subtitle: "", image: "", date: "", doors: "", start_time: "", ticket_price: 0})

    function saveConcert() {
        const newConcert = {
            headline: formData["headline"],
            subtitle: formData["subtitle"],
            image: formData["image"],
            date: formData["date"],
            doors: formData["doors"],
            start_time: formData["start_time"],
            ticket_price: formData["ticket_price"]
        }
        
        // fetch to post the data, get ID back, then assign bands to that ID in concert_bands
        // OR have the return pop up an "assign bands to concert" page...
        console.log(newConcert)
    }

    return (
        <>
            <h2>Add a Concert</h2>
            <label for="headline">Title/Headline </label>
            <input type="text" name="headline" id="headline" value={formData["headline"]} onChange={(e) => setFormData({...formData, headline: e.target.value})} ></input><br />
            <label for="subtitle">Subtitle </label>
            <input type="text" name="subtitle" id="subtitle" value={formData["subtitle"]} onChange={(e) => setFormData({...formData, subtitle: e.target.value})} ></input><br />
            <label for="image">Image URL </label>
            <input type="text" name="image" id="image" value={formData["image"]} onChange={(e) => setFormData({...formData, image: e.target.value})} ></input><br />
            <label for="date">Date DD/MM/YYYY </label>
            <input type="text" name="date" id="date" value={formData["date"]} onChange={(e) => setFormData({...formData, date: e.target.value})} ></input><br />
            <label for="doors">Doors HH:MM AM/PM </label>
            <input type="text" name="doors" id="doors" value={formData["doors"]} onChange={(e) => setFormData({...formData, doors: e.target.value})} ></input><br />
            <label for="image">Concert Start Time HH:MM AM/PM </label>
            <input type="text" name="start_time" id="start_time" value={formData["start_time"]} onChange={(e) => setFormData({...formData, start_time: e.target.value})} ></input><br />
            <label for="image">Ticket Price </label>
            <input type="number" name="ticket_price" id="ticket_price" value={formData["ticket_price"]} onChange={(e) => setFormData({...formData, ticket_price: e.target.value})} ></input><br />
            <label for="band1">Band #1 (Id number) </label>
            <input type="number" name="band1" id="band1" value={formData["band1"]} onChange={(e) => setFormData({...formData, band1: e.target.value})} ></input><br />
            <label for="band2">Band #2 (Id number) </label>
            <input type="number" name="band2" id="band2" value={formData["band2"]} onChange={(e) => setFormData({...formData, band2: e.target.value})} ></input><br />
            <button onClick={() => saveConcert()}>Save Concert</button>
        </>
    )
}

export default NewConcertForm