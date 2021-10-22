import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import crypto from "crypto"
import Contact from "./components/Contact";
import Home from "./components/Home"
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Header from "./components/Header";

const App = () => {
  var blogs = [
    {
      "id": crypto.createHash("SHA1").update("Why I love cryptography" + "blabla").digest('base64').toLowerCase(),
      "title": "Why I love cryptography",
      "text": "...",
      "date": new Date().toDateString()
    }
  ]

  document.addEventListener('DOMContentLoaded', () => {
    if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0) {
      var parent = document.getElementById("parent");
      if (parent)
        parent.style.width = "90%";

      var footer = document.getElementById("footer");
      if (footer)
        footer.style.zoom = "2";

      var contact = document.getElementsByClassName("contactForm")[0];
      if (contact)
        contact.style.width = "95%";

      var blog = document.getElementsByClassName("projectLinksList")[0];
      if (blog)
        blog.style.width = "95%";

    }
  }, false);

  return (
    <div id="parent">
      <Router>
        <Switch>
          <Route path="/blogs/:id">
            <Blog blogs={blogs} />
          </Route>

          <Route path="/blogs">
            <Blogs blogs={blogs} />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
