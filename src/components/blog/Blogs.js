import Footer from "../footer/Footer";
import BlogTask from "./BlogsTask";
import BlogList from "./blogs/BlogsList";

const Blogs = () => {
    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <ul>
                    {BlogList.slice(0).reverse().map((blog) => (
                        <BlogTask blog={blog} />
                    ))}
                </ul>
            </div >
            <Footer />
        </div >
    )
}

export default Blogs
