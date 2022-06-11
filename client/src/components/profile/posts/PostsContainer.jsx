import { connect } from "react-redux";
import { addPostActionCreator, newTextActionCreator, addLikeActionCreator } from "../../../redux/postsReducer";
import Posts from './Posts';

let mapStateToProps = (state) => {
    return {
        posts: state.postsState.posts,
        newPostText: state.postsState.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        addLike: (id) => { dispatch(addLikeActionCreator(id)) },
        newText: (text) => { dispatch(newTextActionCreator(text)) }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;