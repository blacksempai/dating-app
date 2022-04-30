import classes from './Post.module.css'
import logo from './../../../../logo.png'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={logo} alt="ava" className={classes.ava}/>
            <p className={classes.text}> {props.text} </p>
            <span>{props.like}</span>
            <button>👍</button>
        </div>
    );
}

export default Post;