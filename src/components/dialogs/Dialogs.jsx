import classes from './Dialogs.module.css'
import DialogList from './dialog-list/DialogList';
import Messages from './messages/Messages';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.left}>
                <DialogList dialogs={props.state.dialogs}  dispatch={props.dispatch}/>
            </div>
            <div className={classes.right}>
                <Messages messages={props.state.messages} newText={props.state.newText} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Dialogs;