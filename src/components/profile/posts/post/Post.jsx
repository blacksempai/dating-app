import classes from './Post.module.css'
import logo from './../../../../logo.png'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={logo} alt="ava" className={classes.ava}/>
            <p className={classes.text}> {props.text} </p>
        </div>
    );
}

export default Post;