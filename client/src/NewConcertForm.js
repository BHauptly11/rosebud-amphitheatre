import {useState} from 'react'
import { Form, Header, Button, Input } from 'semantic-ui-react'


function NewConcertForm({getConcerts}) {
    const [formData, setFormData] = useState({headline: "", subtitle: "", image: "", date: "", doors: "", start_time: "", ticket_price: 0, band1: 0, band2: 0})

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
        onNewConcertSubmit(newConcert)

    }

    const onNewConcertSubmit = (newConcert) => {
        fetch('http://localhost:3000/concerts', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(newConcert)
        })
        .then(res => res.json())
        .then(r => newConcertBands(r))
    }

    const newConcertBands = (newConcert) => {
        fetch('http://localhost:3000/concert_bands', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({concert_id: newConcert.id, band_id: [formData.band1, formData.band2]})
        })
        .then(getConcerts())
// we need to call state so ConcertList rerenders.
    }

    return (
        <>
            <Header as='h3' dividing>
                Add A New Concert Below!
            </Header>
            <Input label='Headline' placeholder='Concert Headline...' type="text" name="headline" id="headline" value={formData["headline"]} onChange={(e) => setFormData({...formData, headline: e.target.value})} />
            <br/>
            <Input label='Subtitle' placeholder='Concert Subtitle...' type="text" name="subtitle" id="subtitle" value={formData["subtitle"]} onChange={(e) => setFormData({...formData, subtitle: e.target.value})} />
            <br/>
            <Input label='Image' placeholder='Image URL...' type="text" name="image" id="image" value={formData["image"]} onChange={(e) => setFormData({...formData, image: e.target.value})} />
            <br/>
            <Input label='Date' placeholder='DD/MM/YYYY' type="text" name="date" id="date" value={formData["date"]} onChange={(e) => setFormData({...formData, date: e.target.value})} />
            <br/>
            <Input label='Doors' placeholder='Doors open at...' type="text" name="date" id="date" value={formData["date"]} onChange={(e) => setFormData({...formData, date: e.target.value})} />
            <br/>
            <Input label='Start Time' placeholder='HH:MM APM/PM...' type="text" name="start_time" id="start_time" value={formData["start_time"]} onChange={(e) => setFormData({...formData, start_time: e.target.value})} />
            <br/>
            <Input label='Ticket Price' placeholder='$...' type="number" name="ticket_price" id="ticket_price" value={formData["ticket_price"]} onChange={(e) => setFormData({...formData, ticket_price: e.target.value})} />
            <br/>
            <Input label='Band 1 ID' placeholder='Band #1' type="number" name="band1" id="band1" value={formData["band1"]} onChange={(e) => setFormData({...formData, band1: e.target.value})} />
            <br/>
            <Input label='Band 2 ID' placeholder='Band #2' type="number" name="band2" id="band2" value={formData["band2"]} onChange={(e) => setFormData({...formData, band2: e.target.value})} />
            <br/>
            <Button animated='fade' onClick={() => saveConcert()}>
                <Button.Content visible>Save Concert</Button.Content>
                <Button.Content hidden>Let's do it!</Button.Content>
            </Button>
            {/* <label for="headline">Title/Headline </label>
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
            <button onClick={() => saveConcert()}>Save Concert</button> */}
        </>
    )
}

export default NewConcertForm