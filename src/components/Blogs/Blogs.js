import { Link } from "react-router-dom"

const Blogs = ({ blogs }) => {

    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
                    <h1 style={{ display: "inline" }}>My Blog</h1>
                </Link>
                <Link to="/" style={{ display: "inline", float: "right", marginTop: "1.4%", color: "white" }}><button className="button" >Go back</button></Link>
                <hr />
                <ul>
                    {blogs.slice(0).reverse().map((blog) => (
                        <li style={{ paddingTop: "2.5%" }} key={blog.id}> <Link to={"/blogs/" + blog.id}>{blog.title}</Link><span style={{ float: "right" }}>{blog.date}</span></li>
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default Blogs
