import './App.css';
import Header from './Header';
import Home from './Home'; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout'

function App() {
  return (
    <Router>
    <div className="app">
    <Header/>
      <Switch>
        <Route path="/checkout">
        {/** Header */}
      
      {/** Home */}
      
      <Checkout/>
      </Route>

      <Route path="/">
        {/** Header */}
      
      {/** Home */}
      <Home/>
      </Route>
      </Switch>
      
    </div>
    </Router>

  );
}

export default App;
