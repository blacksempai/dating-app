import classes from './Dating.module.css';


const Dating = (props) => {
    let users = props.users.map(u => 
        <div key={u.login} className={classes.user}>
            <h2>{u.name}</h2>
            <h3>{u.login}</h3>
            <img src={u.photoURL} alt="" width="100" height="100"/>
            <p>Likes: {u.like}</p>
        </div>
    );
    return (
        <div className={classes.dating}>
            <h2>Dating</h2>
            {users}
        </div>
    )
}

export default Dating;