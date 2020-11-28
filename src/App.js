import './App.css';
import Nav from './Pages/Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" >
            <Home />



          </Route>
        </Switch>


      </Router>






    </div>
  );
}

export default App;
