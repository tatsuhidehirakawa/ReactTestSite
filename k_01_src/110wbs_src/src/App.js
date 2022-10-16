import logo from './logo.svg';
import './App.css';
import SampleModal from './components/SampleModal.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0
        </p>
        {/* <a
          className="App-link"
          href="https://www.yahoo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Package Summary
        </a> */}
        <SampleModal />
      </header>
    </div>
  );
}

export default App;
