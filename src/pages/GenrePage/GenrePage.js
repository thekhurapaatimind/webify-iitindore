import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'
import './GenrePage.css'
import data from '../../data/data.json';

function GenrePage() {
    const params = useParams();
    const genreId = params.genreId;

    const getHeader = (genre) => {
        switch (genre) {
            case 'animation':
                return 'Animation';
            case 'action':
                return 'Action';
            case 'horror':
                return 'Horror';
            case 'mystery':
                return 'Mystery';
            case 'romcom':
                return 'RomCom';
            default:
                return 'Animation';
        }
    }

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
            <div className="hero-section">
                <div className="hero-text">
                    <h1>
                        {getHeader(genreId)}
                    </h1>
                </div>
                <div className="hero-image">
                    <img src={getBackground(genreId)} alt="hero" />
                </div>
            </div>

            <Card className='page-content m-auto'>
                <Card.Body>
                    {data[genreId].map((movie, index) => {
                        if (index % 2 === 0) {
                            return (
                                <Row className='movie-row movie-left' key={movie.id}>
                                    <Col className='movie-thumb'>
                                        <img src={movie.imageLink} alt="thumb" />
                                    </Col>
                                    <Col className='movie-info movie-left-info'>
                                        <div className='title'>
                                            <h1>
                                                {movie.name}
                                            </h1>
                                            <h4>
                                                {movie.year}
                                            </h4>
                                        </div>
                                        <p>
                                            {movie.shortDescription}
                                        </p>
                                        <Button
                                            variant="primary"
                                            className='read'
                                            as={Link}
                                            to={`/movie/${movie.id}`}
                                        >
                                            Read More
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        } else {
                            return (
                                <Row className='movie-row movie-right' key={movie.id}>
                                    <Col className='movie-thumb'>
                                        <img src={movie.imageLink} alt="thumb" />
                                    </Col>
                                    <Col className='movie-info movie-right-info'>
                                        <div className='title'>
                                            <h1>
                                                {movie.name}
                                            </h1>
                                            <h4>
                                                {movie.year}
                                            </h4>
                                        </div>
                                        <p>
                                            {movie.shortDescription}
                                        </p>
                                        <Button variant="primary" className='read' 
                                            as={Link}
                                            to={`/movie/${movie.id}`}>Read More</Button>
                                    </Col>
                                </Row>
                            )
                        }
                    })}
                </Card.Body>
            </Card>
        </div>
    )
}

export default GenrePage