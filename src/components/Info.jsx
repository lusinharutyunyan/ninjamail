import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Photo from "../Images/photo.png";
import Photo2 from "../Images/photo2.png";
import "./Info.css";

export default function Info() {
  return (
    <Row className='info'>
      <Col sm={4} className='img-col1'>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant='top' src={Photo} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text style={{ color: "#4ba87d", fontWeight: "800" }}>
              Learn more {">"}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} className='img-col2'>
        <img src={Photo2} alt='pic' className='girlpic'></img>
        <div className='firstcol'>
          <p className='longtxt'>
            Start building and sharing with your team today. NinjaMail is
            renowned for its industry leading team collaboration tools.
          </p>
          <p style={{ color: "#4BA87D" }} className='shorttxt'>
            Learn More {" > "}
          </p>
        </div>
      </Col>
      <Col sm={4} className='noimg-col3'>
        <h2 className='colh2'>
          The source for proven, engaging email campaigns
        </h2>
        <p className='txt2'>
          Whether you’re a startup, small business, e-commerce store, or want to
          promote your app, NinjaMail has the feature set tailored for your
          business.
        </p>
      </Col>
    </Row>
  );
}
