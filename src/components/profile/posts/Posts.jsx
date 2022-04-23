import classes from './Posts.module.css'
import Post from './post/Post'


const addPost = () => {
    alert("Post Added")
}

const Posts = (props) => {
    let posts = props.posts.map((p)=>{
        return <Post text={p.text}/>
    })
    return (
        <div>
           <h1>Posts</h1> 
           <form>
                <textarea className={classes.new_post}></textarea>
                <input className={classes.submit} type="submit" value="Send" onClick={addPost} />
           </form>
           <div className={classes.posts}>
                {posts}
           </div>
        </div>
    );
}

export default Posts;