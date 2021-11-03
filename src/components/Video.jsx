import React from "react";
import Videoimg from "../Images/videoimg.png";
import { Row, Button, Col } from "react-bootstrap";
import "./Video.css";

export default function Video() {
  return (
    <Row id='video' className='videotxt '>
      <div className='videocol'>
        <h1 className='videoh1'>Reach More Customers</h1>
        <button className='btn learnhow'>LEARN HOW</button>
      </div>
    </Row>
  );
}
