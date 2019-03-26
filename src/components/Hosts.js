import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

class Hosts extends Component{
  render(){
    return(
     // <Container>
      <Carousel>
        <Carousel.Item>
          <img
            height="400" 
            width="200"
            className="d-block w-100"
            src="https://www.sdaglobal.com/images/~100BGC%20SDAG%200002-800x400%20black%20%20%20%282%29.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Steven McCord</h3>
            <p>Picture of Steven McCord with Bio</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400" 
            width="200"
            className="d-block w-100"
            src="https://www.sdaglobal.com/images/~100BGC%20SDAG%200002-800x400%20black%20%20%20%282%29.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Joey McCord</h3>
            <p>Picture of Joey McCord with Bio</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400" 
            width="200"
            className="d-block w-100"
            src="https://www.sdaglobal.com/images/~100BGC%20SDAG%200002-800x400%20black%20%20%20%282%29.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3>Steven and Joey McCord</h3>
            <p>Picture of the Brothers McCord with Bio</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      //</Container>
    )
}
}
export default Hosts;