const NEW_TEXT = 'NEW_TEXT';
const ADD_MSG = 'ADD_MSG';

let initialState = {
    dialogs: [
        {id: 0 , user: "Andriy"},
        {id: 1 , user: "Sasha"},
        {id: 2 , user: "Denis"}
    ],
    messages: [
        {id: 0 , text: "Hello", author: 'Andriy'},
        {id: 1 , text: "Hi", author: 'Sasha'},
        {id: 2 , text: "Express > React", author: 'Sasha'}
    ],
    newText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TEXT:
            return {
                ...state,
                newText: action.text
            }

        case ADD_MSG:
            let msg = {id: state.messages.length , text: state.newText, author: 'Sasha'}
            return {
                ...state,
                messages: [...state.messages, msg]
            }

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