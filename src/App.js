//import { useState, useCallback, useEffect} from 'react'
import './App.css';
import CreateBlog from './components/CreateBlog/CreateBlog';
import Blog from './components/Blog';

function App() {


  

// const fetchAllPostsHandler = useCallback(async () => {
//   setError(null);
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//       headers :{
//         'Accept-Language':'en-US,en;q=0.9'
//       }
//     });
//     setIsLoading(true);
//   if(!response.ok){
//     throw new Error('something went wrong!');
//   }
//   const allBlogsData = await response.json();
//   setAllBlogs(allBlogsData);

//   }catch(error){
//     setError(error.message);
//   }
// setIsLoading(false);
// },[]);

// useEffect(() => {
//   fetchAllPostsHandler();
// }, [fetchAllPostsHandler]);






async function createNewBlogHandler (newBlogData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(newBlogData),
    header:{
      'Content-Type' : 'application/json'
    }
  });

  const data = await response.json();

}

  return (
    <div>
      <CreateBlog onCreateBlog= {createNewBlogHandler}></CreateBlog>
      <Blog></Blog>
    </div>
  );
}

export default App;
