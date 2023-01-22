import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavbarComponent/Navbar';
import GenrePage from './pages/GenrePage/GenrePage';
import MoviePage from './pages/MoviePage/MoviePage';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/genre/:genreId' element={<GenrePage/>} />
        <Route exact path='/movie/:movieId' element={<MoviePage/>} />
      </Routes>
    </div>
  );
}

export default App;
