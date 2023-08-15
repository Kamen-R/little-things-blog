import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Newsletter = () => {
    const {id} = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/newsletters/' + id);
    const navigate = useNavigate();

    return (
        <div className="newsletter-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.preview}</div>
                </article>
            )}
        </div>
    );
}
 
export default Newsletter;