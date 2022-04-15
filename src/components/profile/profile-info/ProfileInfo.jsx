import classes from './ProfileInfo.module.css'
import logo from '../../../logo.svg'

const ProfileInfo = () => {
    return (
        <div className={classes.ProfileInfo}>
            <img width="200" src={logo} alt="ava" className={classes.ava} />
            <div className="details">
                <h3 className={classes.item}>Andriy Moskalenko</h3>

                <p className={classes.item}>
                    Date of birth: 4 April
                </p>
                <p className={classes.item}>
                    City: Reshetylivka
                </p>
                <p className={classes.item}>
                    Education: KNUTD CS Master
                </p>
                <p className={classes.item}>
                    Web site: undefined
                </p>
            </div>
        </div>
    );
}

export default ProfileInfo;