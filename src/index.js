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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
//import LandingPage from "views/examples/LandingPage.js";
//import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import QuotesPage from "views/examples/QuotesPage.js";
import KeysPage from "views/examples/KeysPage.js";
import SitemapPage from "views/examples/SitemapPage.js";
import ZGLShapesPage from "views/examples/ZGLShapesPage.js";
import ScamWhammerPage from "views/examples/ScamWhammerPage.js";
import NotFoundPage from "views/examples/NotFoundPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Index {...props} />} />
      <Route exact
        path="/about-me"
        render={props => <ProfilePage {...props} />}
      />
      <Route exact
        path="/quotes"
        render={props => <QuotesPage {...props} />}
      />
      <Route exact
        path="/keys"
        render={props => <KeysPage {...props} />}
      />
      <Route exact
        path="/sitemap"
        render={props => <SitemapPage {...props} />}
      />
      <Route exact
        path="/zglshapes"
        render={props => <ZGLShapesPage {...props} />}
      />
      <Route exact
        path="/scamwhammer"
        render={props => <ScamWhammerPage {...props} />}
      />
      <Route
        render={props => <NotFoundPage {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
