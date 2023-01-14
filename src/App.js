import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import { Routes, Route } from 'react-router-dom'
import Animated from './components/Genres/Animated';
import Action from './components/Genres/Action';
import Horror from './components/Genres/Horror';
import Mystery from './components/Genres/Mystery';
import Romantic from './components/Genres/Romantic';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/anime' element={<Animated/>} />
        <Route exact path='/action' element={<Action/>} />
        <Route exact path='/horror' element={<Horror/>} />
        <Route exact path='/mystery' element={<Mystery/>} />
        <Route exact path='/romantic' element={<Romantic/>} />
      </Routes>
    </div>
  );
}

export default App;
