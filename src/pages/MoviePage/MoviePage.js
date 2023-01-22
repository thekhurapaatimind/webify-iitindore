import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './MoviePage.css'
import data from '../../data/data.json';

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
    }, [])

    const getBackground = (genre) => {
        switch (genre) {
            case 'animation':
                return '/assets/images/Animation.jpg';
            case 'action':
                return '/assets/images/Action.jpg';
            case 'horror':
                return '/assets/images/Horror.jpg';
            case 'mystery':
                return '/assets/images/Mystery.jpg';
            case 'romcom':
                return '/assets/images/RomCom.jpg';
            default:
                return '/assets/images/Animation.jpg';
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
                                {movie && <h3>{movie.year}</h3>}
                            </div>
                            {movie && <p>{movie.fullDescription}</p>}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MoviePage