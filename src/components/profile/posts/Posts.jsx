import classes from './Posts.module.css'
import Post from './post/Post'
import React from 'react'

const Posts = (props) => {

    let textRef = React.createRef(); 

    const addPost = (e) => {
        e.preventDefault();
        props.addPost(textRef.current.value)
    }

    let posts = props.posts.map((p)=>{
        return <Post text={p.text}/>
    })
    return (
        <div>
           <h1>Posts</h1> 
           <form onSubmit={addPost}>
                <textarea className={classes.new_post} ref={textRef}></textarea>
                <input className={classes.submit} type="submit" value="Send" />
           </form>
           <div className={classes.posts}>
                {posts}
           </div>
        </div>
    );
}

export default Posts;