import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import crypto from "crypto"
import Contact from "./components/contact/Contact";
import Home from "./components/Home"
import Blogs from "./components/blog/Blogs";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";


const App = () => {
  var blogs = [
    {
      "_id": crypto.createHash("SHA1").update("On Cryptography").digest("hex"),
      "title": "On Cryptography",
      "text": " Cryptography has a long history. The story starts with Caesar himself. He created the first known encryption method called Caesar Cipher. He used this method to send secret messages to his legions on the battlefield. Long story short, you can say his method was so easily breakable",
      "date": "November 04, 2021"
    },
    {
      "_id": crypto.createHash("SHA1").update("My Thoughts on Genetic Algorithms").digest('hex'),
      "title": "My Thoughts on Genetic Algorithms",
      "text": " Nowadays, everyone talks about artificial intelligence. We can say AI is almost the most hyped area of computer science. What about how AI works? What kind of algorithms do we use to make our computers perform those intelligent things?",
      "date": "November 19, 2021"
    }
  ]

  return (
    <div id="parent">
      <Router>
        <Switch>
          <Route path="/blog/:_id">
            <Blog blogs={blogs} />
          </Route>

          <Route path="/blog">
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
