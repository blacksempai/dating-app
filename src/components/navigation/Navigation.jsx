import './Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li className='item'><NavLink to="/profile">Profile</NavLink></li>
                <li className='item'><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li className='item'><NavLink to="/datings">Dating</NavLink></li>
                <li className='item'><NavLink to="/likes">Likes</NavLink></li>
                <li className='item'><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;