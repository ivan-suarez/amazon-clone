import './App.css';
import Header from './Header';
import Home from './Home'; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        {/** Header */}
      <Header/>
      {/** Home */}
      <p>I'm a checkout</p>
      </Route>

      <Route path="/">
        {/** Header */}
      <Header/>
      {/** Home */}
      <Home/>
      </Route>
      </Switch>
      
    </div>
    </Router>

  );
}

export default App;
