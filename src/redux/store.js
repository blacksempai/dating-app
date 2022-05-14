const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const NEW_POST_TEXT = 'NEW_POST_TEXT';

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
        posts: [
            { id:0, text: "Hello my friend!", like: 0 },
            { id:1, text: "How are You?", like: 2 },
            { id:2, text: "I am fine", like: 5 }
        ],
        newPostText: "",
        dialogs: [],
        messages: []
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST: 
                let post = {
                    id: this._state.posts.length,
                    text: this._state.newPostText,
                    like: 0
                };
                this._state.posts.push(post);
                this._state.newPostText = "";
            break;

            case ADD_LIKE: 
                this._state.posts[action.id].like++;
                break;

            case NEW_POST_TEXT: 
                this._state.newPostText = action.text;
                break;

            default: break;
        } 
        this._notifySubscriber();
    } 

}


export const addPostActionCreator = () => {
    return  { type: ADD_POST }
}

export const addLikeActionCreator = (id) => {
    return  { type: ADD_LIKE, id: id}
}

export const newTextActionCreator = (text) => {
    return  { type: NEW_POST_TEXT, text: text}
}

export default store;