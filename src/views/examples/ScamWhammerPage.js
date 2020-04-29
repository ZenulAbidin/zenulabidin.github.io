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


class ScamWhammerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }

  componentDidMount() {
    document.title = "ScamWhammer - Ali Sherief"
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
                <h1>ScamWhammer</h1>
                <img alt="..."  src={require("assets/img/scamwhammer.png")} />
              </div>
              <br/>
              <br/>
              <p className="profile-description" className="text-padding">
                ScamWhammer is a filter list for adblockers containing a nearly-exhaustive list of domains being used for scams and HYIPs.
                The list is not limited to domain names and also contains Telegram links, Medium pages, Youtube videos, and other social engineering and phishing pages.
                For maximum effectiveness it should be imported into your adblocker of choice, though I intend to get this filter included in adblockers by default.
              </p>
              <p className="profile-description" className="text-padding">
                There are thousands of scammers in the bitcoin universe and very frequently, like highwaymen, they prey on newbies who have no prior knowledge to the
                legitimacy of the site they are using. A new person in this ecosystem does not know that things like bitcoin generators are actually fake and are snare traps in disguise.
                We could continue preaching to avoid similar-looking sites to them when someone comes forward with a scam accusation, but some people need an additional hand to guide them
                what are scams and what is real. Because this is a tiring procedure for mentors I decided to offload the work to the adblocker.
              </p>
              <p className="profile-description" className="text-padding">
                When you visit one of these sites with this filter list, the adblocker will display a prominent page announcing that the site has been blocked. The exact page shown depends
                on the adblocker you are using, but generally, the name of the filter list should be there, which is aptly named &quot;NotATether&apos;s Cryptocurrency Scams List (ScamWhammer)&quot;.
              </p>
              <p className="profile-description" className="text-padding">
                This list doesn&apos;t only include bitcoin scams but it also includes scams related to other altcoins.
              </p>
              <p className="profile-description" className="text-padding">
                <em>Sucessful projects are not maintained by one person. I&apos;m looking for contributors who can maintain this list in the long run. If you would like to contribute to the
                    elimination of scams, submit a Github pull request with aditional blocked sites that you have found. If you are trying to block a page, merely listing the URL is not enough,
                    you need to put ^$document at the end of the URL so that it can be blocked.</em>
              </p>
              <br/>
              <br/>
              <div className="text-center">
                <Button
                  className="btn-simple"
                  color="info"
                  href="https://github.com/ZenulAbidin/scamwhammer"
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

export default ScamWhammerPage;
