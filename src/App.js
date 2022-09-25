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
      <img className="footer-img" src="https://www.pngplay.com/wp-content/uploads/14/Fungus-Transparent-Images.png"/>
    </div>
  );
}

export default App;
