import BlogList from "./BlogList";
import "./Blog.css";
import Card from "./UI/Card";
import { useState } from 'react';

const Blog = (props) => {

    const [error, setError] = useState(null);
    const [allBlogs, setAllBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllBlogsHandler = async () => {
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                headers: {
                    'Accept-Language': 'en-US,en;q=0.9'
                }
            });
            setIsLoading(true);
            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const allBlogsData = await response.json();
            setAllBlogs(allBlogsData);

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    };

    let blogContent = <p>No blogs to load.</p>
    if (isLoading) {
        blogContent = <p>Loading...</p>
    }
    if (allBlogs.length > 0) {
        blogContent = <BlogList allBlogs={allBlogs}></BlogList>
    }
    if (error) {
        blogContent = <p>{error}</p>
    }


    return (
        <Card className="blog">
            <button onClick={fetchAllBlogsHandler}>Load Blog</button>
            {blogContent}
        </Card>
    );
}

export default Blog;