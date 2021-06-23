import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Careers from "./pages/Careers/Careers";
import Packages from "./pages/Packages/Packages";
import Mission from "./pages/Mission/Mission";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import TechConsult from "./pages/Services/TechConsult";
import WebDev from "./pages/Services/WebDev";
import MobileDev from "./pages/Services/MobileDev";
import TechTraining from "./pages/Services/TechTraining";
import CyberSecurity from "./pages/Services/CyberSecurity";
import Automation from "./pages/Services/Automation";

function App() {

  return (
    <>
      <BrowserRouter>
      {/* Routes are written in alphabetical order for easy access and readability */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Automation" exact component={Automation} />
          <Route path="/Careers" exact component={Careers} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/CyberSecurity" exact component={CyberSecurity} />
          <Route path="/Mission" exact component={Mission} />
          <Route path="/MobileDev" exact component={MobileDev} />
          <Route path="/Packages" exact component={Packages} />
          <Route path="/Portfolio" exact component={Portfolio} />
          <Route path="/Services" exact component={Services} />
          <Route path="/TechConsult" exact component={TechConsult} />
          <Route path="/TechTraining" exact component={TechTraining} />
          <Route path="/WebDev" exact component={WebDev} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
