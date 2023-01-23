import React from 'react'
import { Container } from 'react-bootstrap'
import './Donut.css'

function Donut(props) {
    // set the percentages of the donut from props ratings array
    const ratings = props.ratings;

    return (
        <div className='mb-5'>
            <h1 className="display-6 text-center">Movie Ratings</h1>
            <Container className='d-flex justify-content-center align-items-center flex-wrap'>
                <div className="svg-item">
                    <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                        <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#202631"></circle>
                        <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
                        <circle className="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray={`${ratings[0]} ${100 - ratings[0]}`} strokeDashoffset="25"></circle>
                        <g className="donut-text donut-text-1">

                            <text y="50%" transform="translate(0, 2)">
                                <tspan x="50%" textAnchor="middle" className="donut-percent">{ratings[0]}%</tspan>
                            </text>
                            <text y="60%" transform="translate(0, 2)">
                                <tspan x="50%" textAnchor="middle" className="donut-data">Metacritic</tspan>
                            </text>
                        </g>
                    </svg>
                </div>
                <div className="svg-item">
                    <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                        <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#202631"></circle>
                        <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
                        <circle className="donut-segment donut-segment-3" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray={`${ratings[1]} ${100 - ratings[1]}`} strokeDashoffset="25"></circle>
                        <g className="donut-text donut-text-2">

                            <text y="50%" transform="translate(0, 2)">
                                <tspan x="50%" textAnchor="middle" className="donut-percent">{ratings[1]}%</tspan>
                            </text>
                            <text y="60%" transform="translate(0, 2)">
                                <tspan x="50%" textAnchor="middle" className="donut-data">IMDb</tspan>
                            </text>
                        </g>
                    </svg>
                </div>

                <div className="svg-item">
                    <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                        <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#202631"></circle>
                        <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
                        <circle className="donut-segment donut-segment-4" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray={`${ratings[2]} ${100 - ratings[2]}`} strokeDashoffset="25"></circle>
                        <g className="donut-text donut-text-3">

                            <text y="50%" transform="translate(0, 2)">
                                <tspan x="50%" textAnchor="middle" className="donut-percent">{ratings[2]}%</tspan>
                            </text>
                            <text y="60%" transform="translate(0, 2)">
                                <tspan x="50%" textAnchor="middle" className="donut-data">Rotten Tomatoes</tspan>
                            </text>
                        </g>
                    </svg>
                </div>
            </Container>
        </div>
    )
}

export default Donut
