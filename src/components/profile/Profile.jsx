import classes from './Profile.module.css'
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo />
            <Posts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;