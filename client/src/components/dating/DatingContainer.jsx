import { Component } from "react";
import Dating from "./Dating";
import axios from "axios";


class DatingContainer extends Component {

    componentDidMount = () => {
        axios.get('http://localhost:5000/users')
        .then((data)=> {
            console.log(data);
        })
    }

    render() {
        return <Dating users={[]}/>
    }

}

export default DatingContainer;