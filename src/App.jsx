import './App.css';
import logo from './logo.png'
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs'
import Navigation from './components/navigation/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="left_col">
          <img className="logo" src={logo} alt="Robocode dating" />
          <Navigation />
        </div>
        <div className="right_col">
          <Routes>
            <Route path='/profile' element={<Profile state={props.state} />}/>
            <Route path='/dialogs' element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
