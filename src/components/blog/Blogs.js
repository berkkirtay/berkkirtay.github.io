import { Link } from "react-router-dom"
import BlogTask from "./BlogsTask"
const Blogs = ({ blogs }) => {

    return (
        <div className="blogs" >
            <div className="projectLinksList">
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
