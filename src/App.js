import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/nav.js';
import Home from './pages/homepage.js';
import Footer from './components/footer.js';
import Login from './pages/loginsignup.js';
import Payment from './pages/payment.js';
import Frame from './pages/frame.js';
import About from './pages/about.js';
import HotImage from './pages/hotImage.js';



function App() {
  return (
    <Router>
    <div className="App poppins-regular">
    <Nav/>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Login/>} />
      <Route path="/pay" element={<Payment/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/hot" element={<HotImage/>} />
      </Routes>          
    </div>
    <Frame/>
    <Footer/>
    
  </div>
  </Router>
  );
}

export default App;
