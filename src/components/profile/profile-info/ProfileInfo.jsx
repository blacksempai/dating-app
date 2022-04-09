import './ProfileInfo.css'
import logo from '../../../logo.svg'

const ProfileInfo = () => {
    return (
        <div className='ProfileInfo'>
            <img width="200" src={logo} alt="" />
            <div className="details">
                <p className='item'>
                    Date of birth: 4 April
                </p>
                <p className='item'>
                    City: Reshetylivka
                </p>
                <p className='item'>
                    Education: KNUTD CS Master
                </p>
                <p className='item'>
                    Web site: undefined
                </p>
            </div>

        </div>
    );
}

export default ProfileInfo;