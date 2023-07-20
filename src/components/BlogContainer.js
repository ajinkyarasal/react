import './BlogContainer.css';
import Card from './UI/Card';


const BlogContainer = (props) => {
    return (
        <li>
        <Card className="blog-item">
        <div className="blog-item__description">
            <h2>{props.blogData.title}</h2>
            <p>{props.blogData.body}</p>
        </div>
        </Card>
        </li>
    );
}

export default BlogContainer;