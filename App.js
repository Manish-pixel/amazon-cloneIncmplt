// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Switch , Route}
from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
        <Route path="/checkout">
          {/* header */}
          {/* <Header/> */}
          <Checkout />
          {/* home */}
           {/* <Home /> */}
           
           
        </Route>
        <Route path="/">
            {/* header */}
            {/* <Header/> */}
           {/* home */}
            <Home />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
// with npm

