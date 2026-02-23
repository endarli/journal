import logo from './logo.svg';
import { FeelingsForm } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <img src={logo.src} className="appLogo" alt="logo" />
      </header>
      <FeelingsForm />
    </div>
  );
}

export default App;
