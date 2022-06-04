import './App.css';
import logo from './logo.png'
import Profile from './components/profile/Profile';
import Navigation from './components/navigation/Navigation'
import {Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Dating from './components/dating/Dating';

function App(props) {
  let users = [
    {id:0,name: 'Pikachu',photoURL:'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg'},
    {id:1,name: 'Charizard',photoURL:'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg'}
  ]
  return (
      <div className="container">
        <div className="left_col">
          <img className="logo" src={logo} alt="Robocode dating" />
          <Navigation />
        </div>
        <div className="right_col">
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dialogs' element={<DialogsContainer/>} />
            <Route path='/dating' element={<Dating users={users}/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
