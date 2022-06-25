import { Component } from "react";
import Dating from "./Dating";
import axios from "axios";


class DatingContainer extends Component {

    state = {
        users: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/users')
        .then((data)=> {
            this.setState({users: data.data});
        })
    }

    render() {
        return <Dating users={this.state.users}/>
    }

}

export default DatingContainer;