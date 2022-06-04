import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul className={classes.list}>
                <li className={classes.item}><NavLink to="/profile">Profile</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li className={classes.item}><NavLink to="/dating">Dating</NavLink></li>
                <li className={classes.item}><NavLink to="/likes">Likes</NavLink></li>
                <li className={classes.item}><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;