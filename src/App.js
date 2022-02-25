import logo from './logo.svg';
import './App.css';
import ExercUsecounter from './components/Exerc_useCounter';
import ExercUselist from './components/Exerc_useList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExercUsecounter />
        {/* <ExercUselist /> */}
      </header>
    </div>
  );
}

export default App;
