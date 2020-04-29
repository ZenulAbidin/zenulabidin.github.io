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
import React, { useState } from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
//import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;


class ZGLShapesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }

  componentDidMount() {
    document.title = "ZGLshapes - Ali Sherief"
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("quotes-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("quotes-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header" style={{"max-height": "none"}}>
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Container>
              <Row>
                <Col md="12">
                  <div className="text-center">
                    <h1>ZGLshapes</h1>
                    <img alt="..."  src={require("assets/img/zglshapes.png")} />
                  </div>
              <br/>
              <br/>
              <p className="profile-description" className="text-padding">
                ZGLshapes is a C++ utility library for creating and manipulating 2D and 3D shapes. It is intended to solve the problem of &quot;many math libraries, not enough routines&quot;
                that is prevalent in the most popular math libraries. When it&apos;s completed, it will also include special functions, linear algebra routines and functions from other mathematical disciplines.
              </p>
              <p className="profile-description" className="text-padding">
                ZGLshapes is currently under development, hence experimental. Here&apos;s a non-exhaustive list of math branches that ZGLshapes will contain when it&apos;s finished:
                <ul>
                  <li>Special functions</li>
                  <li>Matrix and tensor classes</li>
                  <li>Linear algebra</li>
                  <li>Random numbers</li>
                  <li>Optimization functions, minimization and root finding</li>
                  <li>Statistical functions</li>
                  <li>Fourier transforms</li>
                  <li>Numerical integration, and differentiation</li>
                  <li>Ordinary differantial equations and partial differential equations</li>
                  <li>Classes for 2D and 3D primitives</li>
                  <li>Annotation of shapes with TeX</li>
                </ul>
              </p>
              <p className="profile-description" className="text-padding">
                At this time, the shapes can only be drawn to Qt5, however I have plans to make drawing support for general OpenGL programs as well.
              </p>
              <br/>
              <br/>
              <div className="text-center">
                <Button
                  className="btn-simple"
                  color="info"
                  href="https://github.com/ZenulAbidin/ZGLshapes"
                >
                 <i className="tim-icons icon-bulb-63" /> View on Github
                </Button>
              </div>
              <br/>
              <br/>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ZGLShapesPage;
