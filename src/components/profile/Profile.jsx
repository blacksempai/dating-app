import classes from './Profile.module.css'
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo />
            <Posts posts={props.state.posts} addPost={props.addPost} addLike={props.addLike} newPostText={props.state.newPostText} changeNewPostText={props.changeNewPostText}/>
        </div>
    );
}

export default Profile;