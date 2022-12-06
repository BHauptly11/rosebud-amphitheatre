import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <Routes>
        <Route exact path="/" element={<ConcertList />} />
        <Route path="/concessions" element={<ConcessionsList />} />
        <Route path="/newconcert" element={<NewConcertForm />} />
        <Route path="/newconcession" element={<NewConcessionForm />} />
        <Route path="signup" element={<NewUserSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
