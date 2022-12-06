import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConcessionsList from "./ConcessionsList"

const concessionUrl = "http://localhost:3000/concessions"





function App() {
  
  const [concessions, setConcessionList] = useState([])


  const getConcessions = () => {
    fetch(concessionUrl)
    .then(res => res.json())
    .then((setConcessionList))
  }
  
  useEffect (() => {
    getConcessions()
  }, [])


  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Login /> */}
      <Routes>
        {/* <Route exact path="/" element={<ConcertList />} /> */}
        <Route path="/concessions" element={<ConcessionsList concessions = {concessions} />} />
       {/* <Route path="/newconcert" element={<NewConcertForm />} /> */}
        {/* <Route path="/newconcession" element={<NewConcessionForm />} /> */}
        {/* <Route path="signup" element={<NewUserSignup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
