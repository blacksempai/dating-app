const state = {
    posts: [
        { text: "Hello my friend!" },
        { text: "How are You?" },
        { text: "I am fine" }
    ],
    dialogs: [],
    messages: []
}

export const addPost = (newText) => {
    let post = {
        text: newText
    };
    state.posts.push(post); 
}

export default state;