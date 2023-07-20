import CreateBlogForm from "./CreatBlogForm";
import { useState } from "react";
import './CreateBlog.css'

const CreateBlog = (props) => {

    const[showBlogForm, setShowBlogForm] = useState(false);
    const saveBlogDataHandler = (newBlogData) => 
    {
        const enrichedNewBlogData = {
            ...newBlogData,
            id: Math.random(),
        };
        setShowBlogForm(false);
        props.onCreateBlog(enrichedNewBlogData);
    }

    const showBlogFormHandler = () => {
        setShowBlogForm(true);
      }

      const formCancelHandler = () => {
        setShowBlogForm(false);
      }

    return (<div className="new-blog">
    {!showBlogForm && <button onClick = {showBlogFormHandler}>Create New Blog</button>}
    {showBlogForm && <CreateBlogForm onSaveBlogData = {saveBlogDataHandler} onCancel={formCancelHandler}></CreateBlogForm>}
    </div>);

}

export default CreateBlog;