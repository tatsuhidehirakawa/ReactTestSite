import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MAIN from './components/Lv4_page/Main.jsx';
import Page404 from './components/Lv4_page/Page404.tsx';
import ApiFetch from './hooks/ApiFetch.jsx';

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

        <BrowserRouter>
          <Link to='/ViewPackageSummary' className='App-link'>View Package Summary</Link>
            <Route path="./components/Lv4_page/Main.jsx">
              <MAIN />
            </Route>
            <Route path="*S">
              <Page404 />
            </Route>
        </BrowserRouter>

      </header>
      <ApiFetch />

    </div>
  );
}

export default App;
