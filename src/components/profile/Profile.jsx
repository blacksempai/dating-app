import './Profile.css'
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = () => {
    return (
        <div className='profile'>
            <h1>Profile</h1>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Profile;