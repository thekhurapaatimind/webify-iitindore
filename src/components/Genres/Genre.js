import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Genre.css'

function Genre() {
    return (
        <div style={{
            background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,1) 100%)",
        }}
        >
            <Container className="screen-view" style={{ height: "120vh", padding: "50px" }}>
                <Row className='h-100' >
                    <Col sm={12} lg={2} className="h-100">
                        {/* write GENRE veritcally */}
                        <div className="d-flex align-items-center justify-content-center genres" style={{


                        }}>
                            G<b />E<b />N<b />R<b />E<b />S
                        </div>
                    </Col>
                    <Col className='h-100 p-2' style={{}} sm={12} lg={3} as={Link} to={'/genre/animation'}>
                        <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                            <div className='overlay-gradient og1'>
                                <div className='text-class' style={{ writingMode: "vertical-lr", transform: "rotate(180deg)", fontSize: "3rem" }}>
                                    ANIMATION
                                </div>
                            </div>
                            <img alt="thumb" className='thumbnails' src="./assets/images/Animation.jpg" />
                        </div>
                    </Col>
                    <Col className='h-100' style={{}} sm={12} lg={7} as={Link} to={'/genre/mystery'}>
                        <Row className='h-50' style={{}}>
                            <Col className='h-100 p-2' style={{}} sm={12} lg={8}>
                                <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                                    <div className='overlay-gradient og2'>
                                        <div className='text-class'>MYSTERY</div>
                                    </div>
                                    <img alt="thumb" className='thumbnails' src="./assets/images/Mystery.jpg" />
                                </div>
                            </Col>
                            <Col className='h-100 p-2' style={{}} sm={12} lg={4} as={Link} to={'/genre/romcom'}>
                                <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                                    <div className='overlay-gradient og3'>
                                        <div className='text-class' style={{ writingMode: "vertical-lr", fontSize: "2rem" }}>ROM-COM</div>
                                    </div>
                                    <img alt="thumb" className='thumbnails' src="./assets/images/RomCom.jpg" />
                                </div>
                            </Col>
                        </Row>
                        <Row className='h-50' style={{}}>
                            <Col className='h-100 p-2' style={{}} lg={6} as={Link} to={'/genre/horror'}> 
                                <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                                    <div className='overlay-gradient og4'>
                                        <div className='text-class'>HORROR</div>
                                    </div>
                                    <img alt="thumb" className='thumbnails' src="./assets/images/Horror.jpg" />
                                </div>
                            </Col>
                            <Col className='h-100 p-2' style={{}} lg={6} as={Link} to={'/genre/action'}>
                                <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                                    <div className='overlay-gradient og5'>
                                        <div className='text-class'>ACTION</div>
                                    </div>
                                    <img alt="thumb" className='thumbnails' src="./assets/images/Action.jpg" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className='mobile-view'>
                <Row className='p-2 w-100 text-center genres'>
                    <h1>GENRES</h1>
                </Row>
                <Container className='w-100 mobile-items' as={Link} to={'/genre/action'}>
                    <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                        <div className='overlay-gradient og1'>
                            <div className='text-class'>ACTION</div>
                        </div>
                        <img alt="thumb" className='thumbnails' src="./assets/images/Action.jpg" />
                    </div>
                </Container>
                <Container className='w-100 mobile-items' as={Link} to={'/genre/animation'}>
                    <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                        <div className='overlay-gradient og2'>
                            <div className='text-class'>ANIMATION</div>
                        </div>
                        <img alt="thumb" className='thumbnails' src="./assets/images/Animation.jpg" />
                    </div>
                </Container>
                <Container className='w-100 mobile-items' as={Link} to={'/genre/horror'}>
                    <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                        <div className='overlay-gradient og3'>
                            <div className='text-class'>HORROR</div>
                        </div>
                        <img alt="thumb" className='thumbnails' src="./assets/images/Horror.jpg" />
                    </div>
                </Container>
                <Container className='w-100 mobile-items' as={Link} to={'/genre/mystery'}>
                    <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                        <div className='overlay-gradient og4'>
                            <div className='text-class'>MYSTERY</div>
                        </div>
                        <img alt="thumb" className='thumbnails' src="./assets/images/Mystery.jpg" />
                    </div>
                </Container>
                <Container className='w-100 mobile-items' as={Link} to={'/genre/romcom'}>
                    <div className='h-100 w-100 bg-dark' style={{ position: "relative" }}>
                        <div className='overlay-gradient og5'>
                            <div className='text-class'>ROM-COM</div>
                        </div>
                        <img alt="thumb" className='thumbnails' src="./assets/images/RomCom.jpg" />
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Genre        