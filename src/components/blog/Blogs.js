import Footer from "../footer/Footer";
import BlogTask from "./BlogsTask"
const Blogs = ({ blogs }) => {

    return (
        <div className="blogs" >
            <div className="projectLinksList">
                <ul>
                    {blogs.slice(0).reverse().map((blog) => (
                        <BlogTask blog={blog} />
                    ))}
                </ul>
            </div >
            <Footer />
        </div >
    )
}

export default Blogs
