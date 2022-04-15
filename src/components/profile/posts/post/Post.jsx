import classes from './Post.module.css'
import logo from './../../../../logo.png'

const Post = () => {
    return (
        <div className={classes.post}>
            <img src={logo} alt="ava" className={classes.ava}/>
            <p className={classes.text}>Hello!</p>
        </div>
    );
}

export default Post;