import './ProfileInfo.css'
import logo from '../../../logo.svg'

const ProfileInfo = () => {
    return (
        <div>
            <img width="200" src={logo} alt="" />
            <p>
                Date of birth: 4 April <br />
                City: Reshetylivka <br />
                Education: KNUTD CS Master <br />
                Web site: undefined <br />
            </p>
        </div>
    );
}

export default ProfileInfo;