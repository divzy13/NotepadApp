import { useSelector, useDispatch} from 'react-redux';
import './App.css';
import Notepad from './components/notepad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notepad></Notepad>
      </header>
    </div>
  );
}

export default App;
