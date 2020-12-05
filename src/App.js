import './App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
// import { BrowserRouter, Route, Switch} from 'react-router-dom';


// import BookingForm from './pranshi/BookingForm';
import CreateComp from './pranshi/CreateComp';





function App() {
  return (
    <div className="App">

   {/* <Router>
      <Switch>
  <Route  path="/addPasenger" component={CreateComp}/>
              <Route exact path="/updatePassenger/:pnrNumber" component={BookingForm}/> 


            <Route exact path="/updatePassenger" component={()=><div style={{height:"2000px"}}><BookingList/></div>}/>
            </Switch>
            </Router> */}
            {/* <BookingList /> */}
            
            <CreateComp />

      </div>
  );
}

export default App;