import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Photo from "../Images/photo.png";
import Photo2 from "../Images/photo2.png";
import "./Info.css";

export default function Info() {
  return (
    <Row className='info'>
      <Col sm={4}>
        <Card className='infocard'>
          <Card.Img variant='top' src={Photo} />
          <Card.Body>
            <Card.Text>
              Launch campaigns but also find new customers. Our unique platform
              handles campaigns from start to end.
            </Card.Text>
            <Card.Text style={{ color: "#4ba87d", fontWeight: "800" }}>
              Learn more {">"}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card className='infocard' id='infocard2'>
          <Card.Img variant='top' src={Photo2} />
          <Card.Body>
            <Card.Text>
              Start building and sharing with your team today. NinjaMail is
              renowned for its industry leading team collaboration tools.
            </Card.Text>
            <Card.Text style={{ color: "#4ba87d", fontWeight: "800" }}>
              Learn more {">"}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} className='col3'>
        <div className='col3div'>
          <h2 className='h2'>
            The source for proven, engaging email campaigns
          </h2>
          <p className='ptxt'>
            Whether you’re a startup, small business, e-commerce store, or want
            to promote your app, NinjaMail has the feature set tailored for your
            business.
          </p>
        </div>
      </Col>
    </Row>
  );
}
