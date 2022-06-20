import { Link } from "react-router-dom";

const BlogsTask = ({ blog }) => {
    /*
    const [move, setMove] = useState(true);
    const onMove = () => {
        setMove(true);
    }

    const onLeave = () => {
        setMove(false);
    }
    onMouseEnter={onMove} onMouseLeave={onLeave}
    {move && <p style={{ width: "75%", color: "rgb(2, 129, 68)" }}>{blog.text.slice(0, 200)}...</p>}
    */

    return (
        <li style={{ paddingBottom: "0.5%" }} key={parseInt(blog._id.substring(0, 4), 16)}>
            <Link to={"/blog/" + blog._id} >
                <h4>{blog.title}<span style={{ float: "right", overflow: "hidden" }}>{blog.date}</span></h4>
                <p style={{ width: "75%", color: "rgb(2, 129, 68)" }}>{blog.text.slice(0, 200)}...</p></Link>
        </li>
    );
};

export default BlogsTask;
