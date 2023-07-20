import BlogContainer from "./BlogContainer";
import './BlogList.css';

const BlogList = (props) =>
{
    return (
        <ul className="blog-list">
            {props.allBlogs.map(blog => {
               return  <BlogContainer  key = {blog.id} blogData = {blog}></BlogContainer>
            })}
        </ul>
    );
}

export default BlogList;