import { BrowserRouter, Link } from "react-router-dom"

import githubIco from "./img/github.png"
import linkedinIco from "./img/linkedin.png"


const Footer = () => {
    return (
        <footer id="footer">
            <Link style={{ display: "inline", float: "left", marginTop: "0.5%", color: "white" }} to="/contact"><button className="button" >Contact me</button></Link>

            <Link style={{ display: "inline", float: "left", marginTop: "0.5%", marginLeft: "2%", color: "white" }} to="/blogs"><button className="button" >My Blog</button></Link>
            <a href="https://github.com/berkkirtay"><img src={githubIco} width="40" height="40" /></a>
            <a href="https://www.linkedin.com/in/berkkirtay/"><img src={linkedinIco} width="40" height="40" style={{ backgroundColor: "#3c3f4b" }} /></a>
        </footer>
    )
}

export default Footer
