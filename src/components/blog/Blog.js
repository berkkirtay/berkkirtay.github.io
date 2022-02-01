import { useParams, Link } from 'react-router-dom';

import Blog1 from './blogs/blog1/Blog1';
import Blog2 from './blogs/blog2/Blog2';

const Blog = ({ blogs }) => {

    const { _id } = useParams();
    const blog = blogs.find((blog) => blog._id === _id);

    if (blog.title === "On Cryptography") {
        return (
            <Blog1 blog={blog} />
        )
    }
    else if (blog.title === "My Thoughts on Genetic Algorithms") {
        return (
            <Blog2 blog={blog} />
        )
    }
    else {
        return (
            <div className='blog'>
                <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
                    <h1 style={{ display: "inline" }}>My Blogs</h1>
                </Link>
                <Link to="/blogs" style={{ display: "inline", float: "right", marginTop: "1.8%", color: "white" }} ><button className="button">Go back</button></Link>
                <hr />
                <div className='blogBlock' style={{ padding: "1%" }}>
                    <h3>{blog.title}</h3>
                    {blog.text.map((text) => (
                        <p>{text}</p>
                    ))}
                    <hr />
                    <p style={{ textAlign: "right", margin: "0.5%" }}>{blog.date}</p>
                </div>
            </div>
        )
    }
}

export default Blog
