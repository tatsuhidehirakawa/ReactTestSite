import logo from './logo.svg';
import './App.css';
import Pager from './Pager.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Pager />
      </header>
    </div>
  );
}

export default App;
