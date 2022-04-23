let notifySubscriber = () => {
    console.log("no subscriber")
}

export const subscribe = (callback) => {
    notifySubscriber = callback;
}

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
    notifySubscriber();
}

export default state;