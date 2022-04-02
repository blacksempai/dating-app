import './App.css';
import logo from './logo.png'
import Profile from './components/profile/Profile';
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <div className="container">
      <div className="left_col">
        <img className="logo" src={logo} alt="Robocode dating" />
        <Navigation />
      </div>
      <div className="right_col">
        <Profile />
      </div>
    </div>
  );
}

export default App;
