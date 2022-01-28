import Navbar from './components/Navbar/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js'
import Contact from './components/Pages/Contact.js'
import Foot from './components/Foot/Foot.js'
import Suits from './components/Pages/Suits.js'
function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/gimenez" element={<Home />}/>
          <Route exact path ="/gimenez/about/" element={<About />}/>
          <Route extact path="/gimenez/contact" element={<Contact />} />
          <Route exact path="/gimenez/suits" element={<Suits />} />
        </Routes>
      <Foot />
      </Router>
    </div>
  );
}

export default App;
