import logo from './logo.svg';
import './App.scss';
import MyComponent  from './Example/MyComponent';
import TodoList from './Example/TodoList';

/**
 *  2 components: class component / function component( function, arrow)
 */


function App() {
 // const App = () => { arrow
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
