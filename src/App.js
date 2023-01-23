import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  );
}

export default App;
