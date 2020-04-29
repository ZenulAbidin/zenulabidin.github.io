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


class SitemapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }

  componentDidMount() {
    document.title = "Sitemap - Ali Sherief"
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
            <div style={{"text-align": "center"}}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Container>
              <Row>
                <Col md="12">
                  <h1 className="text-center">Sitemap</h1>
                 <Button color="primary" href="/">
                    Homepage
                  </Button>
                  <Button color="info" href="/about-me">
                    About me
                  </Button>
                  <Button color="success" href="/quotes">
                    Quotes
                  </Button>
                  <Button color="warning" href="/keys">
                    PGP Keys
                  </Button>
                  <Button color="danger" href="/sitemap">
                    Sitemap
                  </Button>
                </Col>
              </Row>
              <br/>
              <br/>
              <Row>
                <Col md="12">
                 <h2 className="text-center">Projects</h2>
                 <Button color="primary" href="/zglshapes">
                    ZGLshapes
                  </Button>
                  <Button color="info" href="/scamwhammer">
                    ScamWhammer
                  </Button>
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

export default SitemapPage;
