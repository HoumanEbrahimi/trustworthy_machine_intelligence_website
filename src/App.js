import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
//import "./components/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route , Navigate} from 'react-router-dom';
import "bootstrap/js/src/collapse.js";

// test


import Main from './Pages/mainPage.jsx';
import Team from './Pages/team.jsx'; // Assuming this is where your /team route is defined
import Layout from './Pages/Layout.js';
import Projects from './Pages/projects.jsx';
import Contact from './Pages/contact.jsx'
import Events from './Pages/events.jsx';
import Opportunities from './Pages/opportunities.jsx'
import Newsletter from './Pages/newsletter.jsx'

/*
<img
    
src="https://github.com/HoumanEbrahimi/Lol/blob/main/TMI.png?raw=true"
alt=""
width="45"
height="45"

/>
*/
function App() {
  return (
    <div className="App"> 
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
&nbsp;&nbsp;
  <a class="navbar-brand  mr-auto" style={{ marginRight: '10px',display:"inline-flex !important"}} to="/">
  <img 
  style={{position:"absolute",left:"10px",top:"5px"}}
    
    src="https://github.com/HoumanEbrahimi/Lol/blob/main/TMI.png?raw=true"
    alt=""
    width="50"
    height="50"
    
    />   
  </a>

  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div style={{marginLeft:"30px"}} class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a  class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/team" >Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/events" >Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/projects" >Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/newsletter"  >Newsletter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/opportunities" >Opportunities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/opportunities' element={<Opportunities/>} />
        <Route path='/newsletter' element={<Newsletter />} />

      </Routes>
      </BrowserRouter>

    </div> 

  );
}

export default App;
