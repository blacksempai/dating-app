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
            case 'ADD_POST' : 
                let post = {
                    id: this._state.posts.length,
                    text: this._state.newPostText,
                    like: 0
                };
                this._state.posts.push(post);
                this._state.newPostText = "";
            break;

            case 'ADD_LIKE': 
                this._state.posts[action.id].like++;
                break;

            case 'NEW_POST_TEXT': 
                this._state.newPostText = action.text;
                break;

            default: break;
        } 
        this._notifySubscriber();
    } 

}

export default store;