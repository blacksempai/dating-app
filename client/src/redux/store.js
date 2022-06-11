import postsReducer from "./postsReducer";
import dialogsReducer from './dialogsReducer'

const store = {

    _notifySubscriber() {
        console.log("no subscriber")
    },

    subscribe(callback) {
        this._notifySubscriber = callback;
    },
    
    getState() {
        return this._state;
    },
    
    _state: {
        postsState: {
            posts: [
                { id:0, text: "Hello my friend!", like: 0 },
                { id:1, text: "How are You?", like: 2 },
                { id:2, text: "I am fine", like: 5 }
            ],
            newPostText: ""
        },
        dialogsState: {
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
    },

    dispatch(action) {
        this._state.postsState = postsReducer(this._state.postsState, action);
        this._state.dialogsState = dialogsReducer(this._state.dialogsState, action);
        this._notifySubscriber();
    } 

}

export default store;