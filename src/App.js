
import './App.css';
import './Components/Sidebar';
import './Components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import { Navbar } from 'react-bootstrap';
import Products from './Components/Products'; 

function App() {
  return (
    
      <div className="App">
        <Navbar bg="myColor" variant="dark">
  
          <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           Signed in as: <a href="#">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        
        </Navbar>
        <Sidebar></Sidebar>
        <Products></Products>

      </div>
  );
}

export default App;
