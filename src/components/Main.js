import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {Navbar,Nav, Container, Row,Col, Image} from "react-bootstrap";
import Home from "./Home";
import Concept from "./Concept";
import Content from "./Content";
import Hosts from "./Hosts";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        
        
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div><Navbar.Brand href="/">
        <Container>
          <Row>
            <Col xs={6} md={4}>
               <Image src="../public/images/logo.png" rounded />
            </Col>
            </Row>
        </Container>
        </Navbar.Brand>
        </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/concept">Concept</NavLink>
                    <NavLink to="/content">Content</NavLink>
                    <NavLink to="/hosts">Hosts</NavLink>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/concept" component={Concept}/>
            <Route path="/content" component={Content}/>
            <Route path="/hosts" component={Hosts}/>  
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;