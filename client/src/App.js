import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConcessionsList from "./ConcessionsList"
import ConcertList from './ConcertList'
import ShowConcert from './ShowConcert';

const concessionUrl = "http://localhost:3000/concessions"
const concertsUrl = "http://localhost:3000/concerts"




function App() {
  
  const [concessions, setConcessionList] = useState([])
  const [concerts, setConcerts] = useState([])


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
        <Route path="/concessions" element={<ConcessionsList concessions = {concessions} />} />
        <Route path="/concert/:id" element={<ShowConcert />} />
       {/* <Route path="/newconcert" element={<NewConcertForm />} /> */}
        {/* <Route path="/newconcession" element={<NewConcessionForm />} /> */}
        {/* <Route path="signup" element={<NewUserSignup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
