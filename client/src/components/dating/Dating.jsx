import classes from './Dating.module.css';


const Dating = (props) => {
    let users = props.users.map(u => 
    <div key={u.login}><img width='200' src={u.photoURL} alt="ava"/><h3>{u.name}</h3></div>);
    return (
        <div className={classes.dating}>
            <h2>Dating</h2>
            {users}
        </div>
    )
}

export default Dating;