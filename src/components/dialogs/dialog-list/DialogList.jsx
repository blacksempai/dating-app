import classes from './DialogList.module.css'

const DialogList = (props) => {
    let dialogs = props.dialogs.map(d => <li>{d.user}</li>)
    return (
        <div>
            <ul>
                {dialogs}
            </ul>
        </div>
    )
}

export default DialogList;