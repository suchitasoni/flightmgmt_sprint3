import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import CreateFlightComp from './FlightComponent/CreateFlightComp';
import UpdateFlightComponent from './FlightComponent/UpdateFlightComp';
import ListFlight from './FlightComponent/ListFlight';





function App() {
  return (
    <div className="App">

   <Router>
      <Switch>
      <Route  path="/createFlight" component={CreateFlightComp}/>
              <Route exact path="/updateFlight/:flightId" component={UpdateFlightComponent}/>


            <Route exact path="/updateFlight" component={()=><div style={{height:"2000px"}}><ListFlight/></div>}/>
            </Switch>
            </Router>

      </div>
  );
}

export default App;
