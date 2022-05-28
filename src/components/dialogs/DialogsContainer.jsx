import { connect } from 'react-redux';
import { addMsgActionCreator, newTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        state: state.dialogsState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => { dispatch(addMsgActionCreator()) },
        newText: (text) => { dispatch(newTextActionCreator(text)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;