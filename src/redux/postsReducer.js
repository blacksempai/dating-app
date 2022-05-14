const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const NEW_POST_TEXT = 'NEW_POST_TEXT';

const postsReducer = (action, state) => {
    switch(action.type) {
        case ADD_POST: 
            let post = {
                id: state.posts.length,
                text: state.newPostText,
                like: 0
            };
            state.posts.push(post);
            state.newPostText = "";
        break;

        case ADD_LIKE: 
            state.posts[action.id].like++;
            break;

        case NEW_POST_TEXT: 
            state.newPostText = action.text;
            break;

        default: break;
    } 
    return state;
}   

export default postsReducer;

export const addPostActionCreator = () => {
    return  { type: ADD_POST }
}

export const addLikeActionCreator = (id) => {
    return  { type: ADD_LIKE, id: id}
}

export const newTextActionCreator = (text) => {
    return  { type: NEW_POST_TEXT, text: text}
}
