import './App.css';
import logo from './logo.png'
import Profile from './components/profile/Profile';
import Navigation from './components/navigation/Navigation'
import {Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import DatingContainer from './components/dating/DatingContainer';

function App(props) {
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
            <Route path='/dating' element={<DatingContainer/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
