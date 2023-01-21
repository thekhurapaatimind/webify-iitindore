import { Card, Button, Badge, Container } from "react-bootstrap";
import  "./Slides.css";

const Slides = (props) => {
  const {name, genre, badge, img} = props;
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
                  <Button variant="outline-light" className="mb-3 readmore">Read More</Button>
                  <p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate sunt qui ut, sed eligendi non voluptatem tenetur consequatur facere tempore, aut, id nisi placeat ipsa vero nostrum natus quidem et quam officiis asperiores. Facere facilis accusantium, quam libero laboriosam earum distinctio officiis ipsum, sed commodi architecto nam incidunt culpa.</p>
                </div>
            <Card.Img variant="top" src={img} style={{borderRadius:"inherit"}}></Card.Img>
            <Card.ImgOverlay>
            
              <Card.Body className="p-0" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}>
                
                <div className="text-start">
                  <h5>
                    {badge ? (
                      <Badge bg="warning">{badge}</Badge>
                    ) : (
                      <br />
                    )}
                  </h5>
                </div>
                {/* <div className="align-items-end"> */}
                <Card.Subtitle as="h6" style={{ marginTop: "115px" }}>
                  {genre}
                </Card.Subtitle>
                <Card.Title as="h1">{name.length>20?name.substring(0,20)+"...":name}</Card.Title>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Slides;