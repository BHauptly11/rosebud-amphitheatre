import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ConcessionsList from "./ConcessionsList"
import ConcertList from './ConcertList'
import ShowConcert from './ShowConcert';
import NewConcessionForm from './NewConcessionForm';
import EditConcessionForm from './EditConcessionForm';

const concessionUrl = "http://localhost:3000/concessions"
const concertsUrl = "http://localhost:3000/concerts"




function App() {
  
  const [concessions, setConcessionList] = useState([])
  const [concerts, setConcerts] = useState([])
  
  // const navigate = useNavigate()

  const onConcessionFormSubmit = (newConcession) => {
    fetch(concessionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newConcession)
    })
    .then(res => res.json())
    .then((updatedConcessionList) => {
      updateConcessions(updatedConcessionList)
    })
  }

  const updateConcessions = (newConcession) => {
    setConcessionList((concessions) => ([...concessions, newConcession]))
  }

  const deleteConcession = (deletedConcession) => {
    fetch(concessionUrl + `/${deletedConcession.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
    .then(res => res.json())
    .then( getConcessions )
  }

  const getConcessions = () => {
    fetch(concessionUrl)
    .then(res => res.json())
    .then((setConcessionList))
  }

  const getConcerts = () => {
    fetch(concertsUrl)
    .then(res => res.json())
    .then(setConcerts)
  }
  
  const onEditConcession = (editedConcession) => {
    fetch(concessionUrl + `/${editedConcession.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: editedConcession.name,
        image: editedConcession.image,
        price: editedConcession.price
      })
    })
    .then(res => res.json())
    .then((updatedConcession) => {console.log(updatedConcession)
    updateConcessions()})
  }


  useEffect (() => {
    getConcessions()
    getConcerts()
  }, [])

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Login /> */}
      <Routes>
        <Route exact path="/" element={<ConcertList concerts={concerts} />} />
        <Route path="/concessions" element={<ConcessionsList concessions = {concessions} deleteConcession = {deleteConcession} />} />
        <Route path="/concert/:id" element={<ShowConcert />} />
       {/* <Route path="/newconcert" element={<NewConcertForm />} /> */}
        <Route path="/newconcession" element={<NewConcessionForm onConcessionFormSubmit={onConcessionFormSubmit}/>} />
        {/* <Route path="signup" element={<NewUserSignup />} /> */}
        <Route path='/concession/:id/EditForm' element={<EditConcessionForm onEditConcession={onEditConcession}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
