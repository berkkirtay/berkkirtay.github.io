// Copyright(c) 2023 Berk Kırtay

const BlogFooter = ({ blog }) => {
    return (
        <div className="blogFooter" style={{ paddingBottom: "2%" }}>
            <i style={{ float: "right", margin: "0.5%" }}>{blog.date}</i>
            <i style={{ float: "left", margin: "0.5%" }}>© Berk Kırtay</i>
        </div>
    )
}

export default BlogFooter