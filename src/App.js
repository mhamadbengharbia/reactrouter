 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
  import Home from'./component/Home'
import Movies from'./component/movies'
import Series from'./component/series'
 import {Navbar,Nav,Container} from'react-bootstrap';
 import Description from './component/Description'
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

function App() {

   return (
  <Router>
    
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand Link as={Link} to="/">Mov/Series</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Movies">Movies</Nav.Link>
      <Nav.Link as={Link} to="/Series">Series</Nav.Link>
      
    </Nav>
    </Container>
 
  </Navbar>

    </div>
        <div className="content">
 
           <Switch>
             
  <Route path="/" as component={Home} exact / >  
  <Route path="/Movies" as component={Movies} />  
  <Route path="/Series" as component={Series} />  
  <Route path="/Description" as component={Description} />  
 
</Switch> 
        </div>
        </Router>
    
  );
}

export default App;
