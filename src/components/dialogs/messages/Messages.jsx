
const Messages = (props) => {
    let msgs = props.messages.map(m => <p> {m.text} <span>{m.author}</span></p>)

    let changeNewText = (e) => {
        let text = e.target.value;
        props.changeNewText(text)
    } 

    let addMsg = () => {
        props.addMsg();
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