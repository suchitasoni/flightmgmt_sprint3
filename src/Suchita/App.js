import './App.css';
import TabPanel from '../TabPanel';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import HorizontalLabelPositionBelowStepper from '../Stepper';
import { makeStyles } from '@material-ui/core';
import ListViewComp from './ListViewComp';
import CreateSFComp from './CreateSFComp';
import UpdateComp from './UpdateComp';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // background: 'linear-gradient(45deg, #e0f7fa, #b2dfdb)',
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Airplane22.png'})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
//   },
// }));

function App() {  
  return (
    <div  className="App" > 
      {/* <TabPanel /> */}
      <Router>
      <Switch>
        <Route exact path="/updateFlight/:entryNo" component={UpdateComp}/>
        <Route exact path="/update" component={()=><div style={{height:"2000px"}}><ListViewComp/></div>}/> 
        <Route exact path="/update/add" component={CreateSFComp}/>
      </Switch>
      </Router>

      {/* <ListViewComp /> */}
      {/* <UpdateComp /> */}
    </div>
  );
}

export default App;
