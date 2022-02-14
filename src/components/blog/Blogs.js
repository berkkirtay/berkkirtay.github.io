import { Link } from "react-router-dom"
import BlogTask from "./BlogsTask"
const Blogs = ({ blogs }) => {

    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>
                    <h1 style={{ display: "inline", marginBottom: "5px" }}>My Blog</h1>
                </Link>
                <Link to="/" style={{ display: "inline", float: "right", color: "white" }}><button className="button" >Go back</button></Link>
                <hr id="bloghr" />
                <ul>
                    {blogs.slice(0).reverse().map((blog) => (
                        <BlogTask blog={blog} />
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default Blogs
