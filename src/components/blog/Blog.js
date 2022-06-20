import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogFooter from "./blogComponents/BlogFooter"
import BlogList from './blogs/BlogsList';

const Blog = () => {
    const [blog, setBlog] = useState(undefined);
    const { _id } = useParams();

    useEffect(() => {
        const blog = BlogList.find((blog) => blog._id === _id);
        setBlog(blog);
    }, [_id])

    return (
        <div className='blog'>
            {blog !== undefined &&
                <div className='blogBlock'>
                    <h1 style={{ color: "rgb(41, 161, 103)" }}>{blog.title}</h1>
                    <div >
                        {blog.content}
                        <hr />
                        <BlogFooter blog={blog} />
                    </div>
                </div>
            }
        </div>
    )
}


export default Blog
