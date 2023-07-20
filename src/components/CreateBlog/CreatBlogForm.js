import './CreateBlogForm.css';
import { useState } from 'react';


const CreateBlogForm = (props) => 
{

const[blogTitle, setTitle] = useState('');
const[blogText, setBlogText] = useState('');

const blogFormSubmitHandler = (event) => {
    event.preventDefault();

    const blogData = {
        title: blogTitle,
        body: blogText,
        userId: 1
    }

    props.onSaveBlogData(blogData);

    setTitle('');
    setBlogText('');
}

const inputTitleHandler = (event) => {
    setTitle(event.target.value);
}

const inputTextHandler = (event) => {
    setBlogText(event.target.value);
}

    return(
        <form onSubmit={blogFormSubmitHandler} className = "new-blog__controls">
            <div className="new-blog__control">
            <label>Blog title : </label>
            <input type="text" value={blogTitle} onChange={inputTitleHandler}></input>
            </div>
            <div className="new-blog__control">
            <label>Blog Post : </label>
            <textarea value={blogText} onChange={inputTextHandler}></textarea>
            </div>
            <div className="new-blog__actions">
            <button type="submit">Post</button>
            </div>
            <div className="new-blog__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default CreateBlogForm;