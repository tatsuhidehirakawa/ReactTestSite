import logo from './logo.svg';
import './App.css';
import O_SIGNIN_A from './components/Lv5_pg/O_Signin_a.jsx';

function App() {
  return (
    <div className="App">ß
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>
          Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0
        </p>
        <O_SIGNIN_A />
      </header>
    </div>
  );
}

export default App;
