import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavbarComponent/>
      <LandingPage/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/anime' element={<LandingPage/>} />
        <Route exact path='/action' element={<LandingPage/>} />
        <Route exact path='/horror' element={<LandingPage/>} />
        <Route exact path='/mystery' element={<LandingPage/>} />
        <Route exact path='/romantic' element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
