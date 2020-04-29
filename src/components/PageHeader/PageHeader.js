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
import React, {useState} from "react";

// reactstrap components
import { Container, Progress, Button } from "reactstrap";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import ChangingProgressProvider from "./ChangingProgressProvider";

let captions=[
"Also known as Zenul_Abidin.",
"I am a hero.",
"I make tools with unlimited power.",
"Half-synthetic robot man.",
"I still don't have double displays.",
"Computer hacker who took the red pill.",
"I'm psychic.",
"Spock approves of this slogan.",
"I am the game.",
"Just your friendly robot.",
"Vengance is mine.",
]


class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      percentage: 0,
      opacity: 1,
      interval: 100,
      inc: 5
    };
  }

  updateOpacity() {
    switch (this.state.percentage) {
      case 5:
      case 95:
        this.setState({opacity: 0.5});
        break;
      case 0:
        this.setState({opacity: 0});
        break;
      default:
        this.setState({opacity: 1});
        break;
     }
   }

   goNext() {
     this.setState({percentage: 0, index: (this.state.index+1) % captions.length})
     this.updateOpacity();
   }

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({percentage: this.state.percentage + this.state.inc})
      if (this.state.percentage === 100) {
        this.setState({percentage: 0, index: (this.state.index+1) % captions.length})
      }
      this.updateOpacity()
    }, this.state.interval);
    return () => clearInterval(timer);
    }

  render() {
    return (
      <div className="page-header header-filter">
        <div className="page-header background-1">
           <Container>
             <div className="content-center brand">
               <h1 className="h1-seo">I am <b>Ali Sherief</b>,</h1>
               <h3 className="d-sm-block" style={{ opacity: this.state.opacity }}>
                 {captions[this.state.index]}
               </h3>
               <div style={{display: "flex", flexDirection: "column"}}>
                 <div style={{ alignSelf: "center", width: "10%" }}>
                   <Progress value={this.state.percentage} />
                     <Button className="btn-link" color="primary" onClick={() => this.goNext()}>
                       <i className="tim-icons icon-double-right"></i>
                     </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default PageHeader;
