import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.left}>
                Dialog1<br/>
                Dialog2<br/>
                Dialog3<br/>
                Dialog4<br/>
                Dialog5<br/>
            </div>
            <div className={classes.right}>
                Hello!<br/>
                Hello, I am cat!!<br/>
                Message<br/>
                Message<br/>
                Message<br/>
            </div>
        </div>
    )
}

export default Dialogs;