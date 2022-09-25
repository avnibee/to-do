import logo from './logo.svg';
import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to your to-do list! 
        </p>
      </header>
      <ToDoList/>
    </div>
  );
}

export default App;
