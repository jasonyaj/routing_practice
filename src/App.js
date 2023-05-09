import './App.css';
import {
  Link,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Text from './components/Text';
import Color from './components/Color';


function App() {
  return (
    <div className="App">
      <header>
        *Use these header links for defaulted shortcuts*
        <Link to='/home' className='m-3' >
          Home
        </Link>
        <Link to='/4' className='m-3' >
          Number 
        </Link>
        <Link to='/hello' className='m-3' >
          Word
        </Link>
        <Link to='/hello/blue/red' className='m-3' >
          Word-Background-Colored
        </Link>
      </header>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:text' element={<Text/>} />
        <Route path='/:word/:tColor/:bColor' element={<Color/>} />
      </Routes>
    </div>
  );
}

export default App;
