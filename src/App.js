import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom'
import Animated from './components/Genres/Animated';
import Action from './components/Genres/Action';
import Horror from './components/Genres/Horror';
import Mystery from './components/Genres/Mystery';
import Romantic from './components/Genres/Romantic';
import Navbar from './components/NavbarComponent/Navbar';
import GenrePage from './pages/GenrePage/GenrePage';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/genre' element={<GenrePage/>} />
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
