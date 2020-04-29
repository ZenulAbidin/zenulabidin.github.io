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
import "assets/css/nucleo-icons.css";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-black"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              tag="a"
              href="/"
              id="navbar-brand"
            >
              <span>Ali Sherief</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="/">
                    Ali Sherief
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/ZenulAbidin"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow me on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://discordhub.com/profile/660905245987307520"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Chat with me on Discord"
                >
                  <i className="fab fa-discord" />
                  <p className="d-lg-none d-xl-none">Discord</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/ZenulAbidin"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="View my projects on Github"
                >
                  <i className="fab fa-github" />
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://bitcointalk.org/index.php?action=profile;u=2739424"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="View my Bitcointalk profile"
                >
                  <i className="fab fa-bitcoin" />
                  <p className="d-lg-none d-xl-none">Bitcointalk</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-link d-lg-none d-xl-none" />
                  Links
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem tag="a" href="/about-me">
                    <i className="tim-icons icon-single-02" />
                    About me
                  </DropdownItem>
                  <DropdownItem tag="a" href="/about-me#projects">
                    <i className="tim-icons icon-minimal-right" />
                    Projects
                  </DropdownItem>
                  <DropdownItem tag="a" href="/quotes">
                    <i className="tim-icons icon-minimal-right" />
                    Quotes
                  </DropdownItem>
                  <DropdownItem tag="a" href="/keys">
                    <i className="tim-icons icon-minimal-right" />
                    PGP keys
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
               <Button
                 className="nav-link d-none d-lg-block"
                 color="primary"
                 target="_blank"
                 href="https://dev.to/zenulabidin"
               >
                 Blog
               </Button>
             </NavItem>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  href="/about-me#contact"
                >
                  <i className="tim-icons icon-send" /> Contact me
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
