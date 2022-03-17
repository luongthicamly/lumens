import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import Notification from './components/page/Notification';
import NavigationBar from './components/includes/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/card" element={<Home />} />
          <Route path="/profile" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
