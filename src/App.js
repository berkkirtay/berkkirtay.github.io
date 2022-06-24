import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from "./components/contact/Contact";
import Home from "./components/Home"
import Blogs from "./components/blog/Blogs";
import Blog from "./components/blog/Blog";
import ScrollToTop from "./components/tools/ScrollToTop"
import { Nav } from "./components/Nav";

const App = () => {
  return (
    <div id="parent" >
      <Router>
        <ScrollToTop />
        <Nav />
        <Switch>
          <Route path="/blog/:_id">
            <Blog />
          </Route>

          <Route path="/blog">
            <Blogs />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
