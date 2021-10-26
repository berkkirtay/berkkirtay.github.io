import { Link } from "react-router-dom"

const Blogs = ({ blogs }) => {

    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
                    <h1 style={{ display: "inline" }}>My Blog</h1>
                </Link>
                <Link to="/" style={{ display: "inline", float: "right", marginTop: "1.8%", color: "white" }}><button className="button" >Go back</button></Link>
                <hr />
                <ul>
                    {blogs.map((blog) => (
                        <li style={{ paddingBottom: "1.5%" }} key={blog.id}> <Link to={"/blogs/" + blog.id}>{blog.title}</Link></li>
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default Blogs
