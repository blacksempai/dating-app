let notifySubscriber = () => {
    console.log("no subscriber")
}

export const subscribe = (callback) => {
    notifySubscriber = callback;
}

const state = {
    posts: [
        { id:0,  text: "Hello my friend!", like: 0 },
        { id:1, text: "How are You?", like: 2 },
        { id:2, text: "I am fine", like: 5 }
    ],
    newPostText: "",
    dialogs: [],
    messages: []
}

export const addPost = () => {
    let post = {
        id: state.posts.length,
        text: state.newPostText,
        like: 0
    };
    state.posts.push(post);
    state.newPostText = "";
    notifySubscriber();
}

export const changeNewPostText = (text) => {
    state.newPostText = text;
    notifySubscriber();
}


export const addLike = (id) => {
    state.posts[id].like++;
    notifySubscriber();
} 

export default state;