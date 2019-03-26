import React, { Component } from "react";
import {Jumbotron,Container} from "react-bootstrap";
 
class Home extends Component {
  render() {
    return (
      <Jumbotron fluid>
      <Container>
        <h1>Modular CTO</h1>
        <h2>Our Mission</h2>
        <p>
        To leverage our network of product and technology leaders to grow the product and technology community within the DMV by creating an environment of collaboration, partnership and community
        </p>
          <h2>Our Values</h2>
            <li>Designed for Public Consumption</li>
            <li>Be the Initializer</li>
            <li>Deconstruct Everything</li>
            <li>Everyone has a Potential Input/Output</li>
            <li>Remain Self Contained</li>
      </Container>
    </Jumbotron>
    );
  }
}
 
export default Home;