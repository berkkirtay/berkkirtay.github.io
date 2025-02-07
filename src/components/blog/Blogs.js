// Copyright(c) 2024 Berk Kirtay

import Footer from "../footer/Footer";
import BlogTask from "./BlogsTask";
import BlogList from "./blogs/BlogsList";

const Blogs = () => {
    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <ul style={{ paddingTop: "1%" }}>
                    {BlogList.slice(0).reverse().map((blog) => (
                        <BlogTask blog={blog} key={parseInt(blog._id.substring(0, 10), 16)} />
                    ))}
                </ul>
            </div >
            <Footer />
        </div >
    )
}

export default Blogs
