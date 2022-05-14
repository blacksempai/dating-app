import { newTextActionCreator, addMsgActionCreator } from "../../../redux/dialogsReducer";


const Messages = (props) => {
    let msgs = props.messages.map(m => <p> {m.text} <span>{m.author}</span></p>)

    let changeNewText = (e) => {
        let text = e.target.value;
        let action = newTextActionCreator(text);
        props.dispatch(action);
    } 

    let addMsg = () => {
        let action = addMsgActionCreator();
        props.dispatch(action);
    }

    return (
        <div>
            {msgs}
            <div>
                <input type="text"  value={props.newText} onChange={changeNewText}/>
                <button onClick={addMsg}>Send</button>
            </div>
        </div>
    )
}

export default Messages;