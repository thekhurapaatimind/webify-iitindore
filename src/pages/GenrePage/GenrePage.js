import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import './GenrePage.css'

function GenrePage() {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Animation</h1>
                </div>
                <div className="hero-image">
                    <img src="./assets/images/hero.webp" alt="hero" />
                </div>
            </div>

            <Card className='page-content m-auto'>
                <Card.Body>
                    <Row className='movie-row movie-left'>
                        <Col className='movie-thumb'>
                            <img src="./assets/images/Animation.jpg" alt="thumb" />
                        </Col>
                        <Col className='movie-info movie-left-info'>
                            <div className='title'>
                                <h1>Animation</h1>
                                <h4>Year</h4>
                            </div>
                            <p>Animation is a method in which pictures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. ... Computer animation processes generating animated images with the general term computer-generated imagery (CGI).</p>
                            <Button variant="primary" className='read'>Read More</Button>
                        </Col>
                    </Row>
                    <Row className='movie-row movie-right'>
                        <Col className='movie-thumb'>
                            <img src="./assets/images/Animation.jpg" alt="thumb" />
                        </Col>
                        <Col className='movie-info movie-right-info'>
                            <div className='title'>
                                <h1>Animation</h1>
                                <h4>Year</h4>
                            </div>
                            <p>Animation is a method in which pictures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. ... Computer animation processes generating animated images with the general term computer-generated imagery (CGI).</p>
                            <Button variant="primary" className='read'>Read More</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GenrePage