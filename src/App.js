import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator/Calculator';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
);

export default App;
