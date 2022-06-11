import classes from './Profile.module.css'
import ProfileInfo from './profile-info/ProfileInfo';
import PostsContainer from './posts/PostsContainer';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
}

export default Profile;