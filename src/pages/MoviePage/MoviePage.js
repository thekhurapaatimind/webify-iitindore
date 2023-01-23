import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './MoviePage.css'
import data from '../../data/data.json';
import Slides from '../../components/SwiperComponent/Slides';
import Donut from '../../components/Donut/Donut';

function MoviePage() {
    const params = useParams();
    const movieId = params.movieId;
    const [movie, setMovie] = useState(null);
    const [movieGenre, setMovieGenre] = useState(null);
    useEffect(() => {
        let requiredMovie = null;
        let requiredMovieCategory = null;
        Object.keys(data).forEach((genre) => {
            data[genre].forEach((movie) => {
                if (movie.id === movieId) {
                    requiredMovie = movie;
                    requiredMovieCategory = genre;
                }
            })
        })
        setMovie(requiredMovie);
        setMovieGenre(requiredMovieCategory);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [movieId])

    // get all movies of the same genre except the current movie
    const [relatedMovies, setRelatedMovies] = useState([]);
    useEffect(() => {
        if (movieGenre && movieId) {
            const movies = data[movieGenre].filter((movie) => movie.id !== movieId);
            setRelatedMovies(movies);
        }
    }, [movieGenre, movieId])


    const getBackground = (genre) => {
        switch (genre) {
            case 'animation':
                return '/assets/images/genres/Animation.jpg';
            case 'action':
                return '/assets/images/genres/Action.jpg';
            case 'horror':
                return '/assets/images/genres/Horror.jpg';
            case 'mystery':
                return '/assets/images/genres/Mystery.jpg';
            case 'romcom':
                return '/assets/images/genres/RomCom.jpg';
            default:
                return '/assets/images/genres/Animation.jpg';
        }
    }

    return (
        <div>
            <div className="m-hero-section">
                {/* <div className="hero-text">
                    <h1>Animation</h1>
                </div> */}
                <div className="m-hero-image">
                    <img src={getBackground(movieGenre)} alt="hero" />
                </div>
            </div>

            <Card className='m-page-content m-auto'>
                {/* <Card.Img> */}
                {/* Trailer Youtube video iframe */}
                {movie &&
                    <iframe
                        title='trailer'
                        className="youtube"
                        width="100%"
                        src={movie.trailerLink}
                        allowFullScreen
                    />}
                {/* </Card.Img> */}
                <Card.Body>
                    <Row className='m-movie-row movie-left align-items-center'>
                        <Col className='movie-thumb'>
                            {movie && <img src={movie.imageLink} alt="thumb" />}
                        </Col>
                        <Col className='movie-info movie-left-info'>
                            <div className='title'>
                                {movie && <h1>{movie.name}</h1>}
                                {movie && 
                                    <div>
                                        <h3>{movie.year}</h3>
                                        <h5>Duration: {movie.duration}</h5>
                                    </div>
                                }
                            </div>
                            {movie && <p>{movie.fullDescription}</p>}
                        </Col>
                    </Row>
                    <Donut ratings={movie && movie.ratings ? movie.ratings : [0,0,0]}/>
                    <Card.Subtitle className='text-center display-6'>Cast</Card.Subtitle>
                    <div className='d-flex justify-content-center flex-wrap my-5'>
                        {movie && movie.cast && movie.cast.map((cast) => {
                            return (
                                <div className='m-cast-card' key={cast.name}>
                                    <h5 style={{color:"rgb(0, 187, 255)"}}>{cast.name}</h5>
                                    <h6>{cast.role}</h6>
                                </div>
                            )
                        })}
                    </div>
                    <Card.Subtitle className='text-center display-6'>Where To Watch</Card.Subtitle>
                    <div className='d-flex justify-content-center flex-wrap my-5'>
                        {movie && movie.whereToWatch && movie.whereToWatch.map((link) => {
                            return (
                                <div className='m-link-card' key={link.link+movie}>
                                    <a href={link.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >   
                                        <img src={link.imageLink} alt={link.name} />
                                        <h6>{link.name}</h6>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <Card.Subtitle className='text-center display-6'>Similar Movies</Card.Subtitle>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {relatedMovies.map((movie) => {
                            return (
                                <Slides key={movie.id} {...movie} />
                            )
                        })}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MoviePage