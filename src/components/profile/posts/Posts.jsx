import classes from './Posts.module.css'
import Post from './post/Post'
import React from 'react'
import { addPostActionCreator, newTextActionCreator  } from '../../../redux/postsReducer'

const Posts = (props) => {
    let textRef = React.createRef(); 
    const addPost = (e) => {
        e.preventDefault();
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    const newText = () => {
        let action = newTextActionCreator(textRef.current.value);
        props.dispatch(action);
    }

    let posts = props.posts.map((p)=>{
        return <Post text={p.text} like={p.like} id={p.id} dispatch={props.dispatch}/>
    })
    return (
        <div>
           <h1>Posts</h1> 
           <form onSubmit={addPost}>
                <textarea className={classes.new_post} ref={textRef} onChange={newText} value={props.newPostText} />
                <input className={classes.submit} type="submit" value="Send" />
           </form>
           <div className={classes.posts}>
                {posts}
           </div>
        </div>
    );
}

export default Posts;