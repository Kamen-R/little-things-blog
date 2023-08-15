import { Link } from "react-router-dom";

const BlogList = ({newsletters}) => {

    return ( 
        <div className="blog-list">
            <h2>issues:</h2>
            {newsletters.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/little-things-blog/newsletters/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Date: {blog.date}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;