/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">Ali Sherief</h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sitemap">
                    Sitemap
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/keys">
                    PGP Keys
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink href="/about-me#contact">
                    Contact me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about-me">
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://dev.to/zenulabidin">
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow me:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/Zenul_Abidin"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow me
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/ZenulAbidin"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Follow me
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <p className="text-center">Template by <a href="https://demos.creative-tim.com/blk-design-system-react/#/">BLK• Design System React</a></p>
        <p className="text-center">Tips: bc1q4djl6pxt90nfs8fufdul26ufxukxxrczsfjj0h</p>
      </footer>
    );
  }
}

export default Footer;
