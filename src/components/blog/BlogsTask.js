// Copyright(c) 2024 Berk Kirtay

import { Link } from "react-router-dom";

const BlogsTask = ({ blog }) => {
    return (
        <li style={{ paddingBottom: "0.5%" }} >
            <Link to={"/blog/" + blog._id} >
                <h4 style={{ display: "inline" }}>{blog.title}<span style={{ float: "right", overflow: "hidden" }}>{blog.date}</span></h4>
                <p style={{ width: "75%", color: "rgb(2, 129, 68)" }}>{blog.text.slice(0, 200)}...</p></Link>
        </li>
    );
};

export default BlogsTask;
