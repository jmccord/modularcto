import React, { Component } from "react";
import {Jumbotron,Container, ListGroup} from "react-bootstrap";

class Content extends Component {
  render() {
    return (
      <Jumbotron fluid>
      <Container>
        <ListGroup as="ul">
          <ListGroup.Item target="_blank" action href="#link1">PodCast</ListGroup.Item>
        <ListGroup.Item  target="_blank" action href="#link1">Blog</ListGroup.Item>
        <ListGroup.Item target="_blank" action href="https://www.instagram.com/modularcto/">Instagram </ListGroup.Item>
      </ListGroup>
      </Container>
    </Jumbotron>
    );
  }
}
 
export default Content;