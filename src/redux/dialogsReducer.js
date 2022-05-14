const NEW_TEXT = 'NEW_TEXT';
const ADD_MSG = 'ADD_MSG';

const dialogsReducer = (action, state) => {
    switch(action.type) {
        case NEW_TEXT:
            state.newText = action.text
            break;

        case ADD_MSG:
            let msg = {id: state.messages.length , text: state.newText, author: 'Sasha'}
            state.messages.push(msg)    
            break;

        default: break;
    }
    return state;
}

export default dialogsReducer;

export const addMsgActionCreator = () => {
    return  { type: ADD_MSG }
}

export const newTextActionCreator = (text) => {
    return  { type: NEW_TEXT, text: text }
}