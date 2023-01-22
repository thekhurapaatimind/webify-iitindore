import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./Slides.css";
import data from "../../data/data.json";

const Slides = (props) => {
  const {id, name, imageLink, shortDescription} = props;
  const [genre, setGenre] = useState("");
  useEffect(() => {
    let requiredGenre = null;
    Object.keys(data).forEach((genre) => {
      data[genre].forEach((movie) => {
        if (movie.id === id) {
          requiredGenre = genre;
        }
      });
    });
    setGenre(requiredGenre);
  }, [id]);

  return (
    <>
      <div className="slides-section">
        <Container className="m-4 p-3">
          <Card
            className="text-end shadow cardelement"
            text="white"
            style={{ width: "15rem", background: "#f1f1f1", border: "none", borderRadius:"15px" }}
          >
            <div className="overlay">
                  <Button variant="outline-light" className="readmore" as={Link} to={`/movie/${id}`}>Read More</Button>
                  <p className="mt-3" style={{fontSize:"12px"}}>{shortDescription}</p>
                </div>
            <Card.Img variant="top" src={imageLink} style={{borderRadius:"inherit"}}></Card.Img>
            <Card.ImgOverlay>
            
              <Card.Body className="p-0" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}>
                {/* <div className="align-items-end"> */}
                <Card.Subtitle as="h6" style={{ marginTop: "115px", textTransform: "uppercase" }}>
                  {genre}
                </Card.Subtitle>
                <Card.Title as="h1">{name && name.length>20?name.substring(0,20)+"...":name}</Card.Title>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Slides;