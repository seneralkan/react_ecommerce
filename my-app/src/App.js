import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Products from './pages/Products';


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <div id="content">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Signup} />
          
        </Switch>
      </div>
    </div>
  </Router>
  );
}


export default App;
