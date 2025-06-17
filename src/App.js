import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            こんにちは！初めてのReactアプリです！
          </p>
          <p>
            現在の時刻: {new Date().toLocaleString()}
          </p>
          Reactを学ぼう
        </a>
      </header>
    </div>
  );
}

export default App;