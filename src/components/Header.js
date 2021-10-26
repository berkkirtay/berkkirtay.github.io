import { Link } from "react-router-dom"
const Header = () => {
    /*
                <Link style={{ display: "inline", float: "right", marginTop: "3%", color: "white" }} to="/personal/contact">Contact me</Link>

            <Link style={{ display: "inline", float: "right", marginTop: "3%", marginRight: "1%", color: "white" }} to="/personal/blogs">My Blog</Link>
            */
    return (
        <header>
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"
            />
            <Link to="/" style={{ textDecoration: "none", color: "black" }} >
                <h1 style={{ display: "inline", color: "white" }} >Berk Kırtay</h1>
            </Link>



            <hr />
        </header>
    )
}

export default Header
