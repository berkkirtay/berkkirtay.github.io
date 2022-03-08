import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogFooter from "./blogComponentes/BlogFooter"

import Blog1 from './blogs/blog1/Blog1';
import Blog2 from './blogs/blog2/Blog2';
import Blog3 from './blogs/blog3/Blog3';

const Blog = ({ blogs }) => {
    const [blog, setBlog] = useState(undefined);
    const [content, setContent] = useState(undefined);
    const { _id } = useParams();

    useEffect(() => {
        const blog = blogs.find((blog) => blog._id === _id);
        setBlog(blog);

        if (blog.title === "On Cryptography") {
            setContent(<Blog1 />);

        }
        else if (blog.title === "My Thoughts on Genetic Algorithms") {
            setContent(<Blog2 />);
        }
        else if (blog.title === "Web2 vs Web3 and Privacy") {
            setContent(<Blog3 />);
        }
    }, [])
    return (
        <div className='blog'>
            {blog !== undefined &&
                <div>
                    <h1 style={{ display: "inline", color: "rgb(41, 161, 103)" }}>{blog.title}</h1>

                    <Link to="/blog" style={{ display: "inline", float: "right", color: "white" }} >
                        <button className="button">Go back</button>
                    </Link>
                    <hr id='bloghr' />
                    <div className='blogBlock' style={{ padding: "1%" }}>
                        {content}
                        <hr />
                        <BlogFooter blog={blog} />
                    </div>

                </div>
            }
        </div>
    )
}


export default Blog
