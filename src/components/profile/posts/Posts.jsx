import classes from './Posts.module.css'
import Post from './post/Post'

const Posts = () => {
    return (
        <div>
           <h1>Posts</h1> 
           <form>
                <textarea className={classes.new_post}></textarea>
                <input className={classes.submit} type="submit" value="Send"/>
           </form>
           <div className={classes.posts}>
                <Post />
                <Post />
                <Post />
           </div>
        </div>
    );
}

export default Posts;