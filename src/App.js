
import './App.css';
import './Components/Sidebar';
import './Components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import { Navbar } from 'react-bootstrap';
import Products from './Components/Products'; 
import SidebarProducts from './Components/SidebarProducts'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="myColor" variant="dark">
          <Navbar.Brand href="#">ProductosPY</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#">Ana Rivas</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Sidebar></Sidebar>
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-lg-2">
            <SidebarProducts></SidebarProducts>
          </div>
            <div class="col-xs-6 col-sm-8 col-lg-10">
              <Products></Products></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
