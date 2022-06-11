const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const NEW_POST_TEXT = 'NEW_POST_TEXT';

let initialState = {
    posts: [
        { id:0, text: "Hello my friend!", like: 0 },
        { id:1, text: "How are You?", like: 2 },
        { id:2, text: "I am fine", like: 5 }
    ],
    newPostText: ""
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let post = {
                id: state.posts.length,
                text: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, post]
            }

        case ADD_LIKE: 
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.id ? { ...p, like: p.like+1 } : p )
            }

        case NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.text
            }

        default:
            return state;
    } 
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