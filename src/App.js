import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
