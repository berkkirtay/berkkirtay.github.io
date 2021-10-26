import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Blog = ({ blogs }) => {

    const { id } = useParams();
    const blog = blogs.find((blog) => blog.id === id);

    return (
        <div className='blog'>
            <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
                <h1 style={{ display: "inline" }}>My Blogs</h1>
            </Link>
            <Link to="/blogs" style={{ display: "inline", float: "right", marginTop: "1.8%", color: "white" }} ><button className="button">Go back</button></Link>
            <hr />
            <div className='blogBlock' style={{ padding: "1%" }}>
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
                <hr />
                <p style={{ textAlign: "right", margin: "0.5%" }}>{blog.date}</p>
            </div>
        </div>
    )
}

export default Blog
