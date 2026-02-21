import logo from './logo.svg';
import { FeelingsForm } from './app/components/form.tsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo.src} className="App-logo" alt="logo" />
                <FeelingsForm />
            </header>
        </div>
    );
}

export default App;
