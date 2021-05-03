import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Careers from "./pages/Careers/Careers";
import Packages from "./pages/Packages/Packages";
import Goals from "./pages/Goals/Goals";
import Contact from "./pages/Contact/Contact";
import SingleTeam from "./pages/SingleTeam/SingleTeam";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Services" exact component={Services} />
          <Route path="/Careers" exact component={Careers} />
          <Route path="/Packages" exact component={Packages} />
          <Route path="/Goals" exact component={Goals} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/SingleTeam" exact component={SingleTeam} />
       
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
