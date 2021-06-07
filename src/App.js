import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Modal from "react-modal";

// components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServicesTwo from "./pages/Services/ServicesTwo";
import ServicesThree from "./pages/Services/ServicesThree";
import Careers from "./pages/Careers/Careers";
import Packages from "./pages/Packages/Packages";
import Goals from "./pages/Goals/Goals";
import Contact from "./pages/Contact/Contact";
import SingleTeam from "./pages/SingleTeam/SingleTeam";
import CaseStudy from "./pages/Case Study/CaseStudy";

function App() {

  // useEffect(() => {
  //   Modal.setAppElement(App);
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Services" exact component={Services} />
          <Route path="/ServicesTwo" exact component={ServicesTwo} />
          <Route path="/ServicesThree" exact component={ServicesThree} />
          <Route path="/Careers" exact component={Careers} />
          <Route path="/Packages" exact component={Packages} />
          <Route path="/Goals" exact component={Goals} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/SingleTeam" exact component={SingleTeam} />
          <Route path="/CaseStudy" exact component={CaseStudy} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
