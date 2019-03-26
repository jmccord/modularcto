import React, { Component } from "react";
import {Jumbotron,Container} from "react-bootstrap";
 
class Concept extends Component {
  render() {
    return (
      <Jumbotron fluid>
      <Container>
        <h2>Our Mission</h2>
        <p>Building a family approach to creating an inclusive product and technology community across the DMV</p>
        <h2>Background</h2>
        <p>The McCord brothers have spent almost 20 years building products, technology teams and companies throughout the DMV.  This has allowed them to form a unique network of product and technology talent, perspectives on how products should be built, views on how teams should run and opinions on how the product and technology function fits in an organization.  Add this to the brothers inclusive personalities, they have always been able to create an inviting environment to create and learn.<br></br><br></br>

        They plan on using these aspects to advance a platform approach to building the DMV product and technology community.  Today's technology community is accustomed to consuming content on their terms.  The Modular CTO will use this to their advantage by using Podcasts, Blogs and Social Media to cultivate an active community with the DMV.  The inclusive nature of the brothers will present voices from all throughout the community to highlight different ways to think about creating, building and collaborating.</p>
        <h2>Why?</h2>
          <li>The combination of Executive leadership and Technology create a large barrier to entry for most talented individuals.  An independent platform is needed to highlight and grow the prevue of the community.</li>
          <li>Throughout our careers a common set of feedback has been prevalent in both brother's evaluations, their ability to communicate and motivate across any organization.  Bringing this to a public venue with help to breakdown many myths about product and technology leaders.</li>
          <li>From a personal standpoint, grabbing ahold of our career narrative and expressing our overall value to employers/investors has been a struggle.  This platform will be a step toward taking greater ownership of both.</li>
      </Container>
    </Jumbotron>
    );
  }
}
 
export default Concept;