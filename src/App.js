import logo from './logo.svg';
import './App.css';
import Members from './components/Members';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="section-container">
        <div style={{backgroundColor: "red", height: 100+"px"}}>
          sei
        </div>
      </div>
      <div className="section-container">
        <Members />
      </div>
    </div>
  );
}

export default App;