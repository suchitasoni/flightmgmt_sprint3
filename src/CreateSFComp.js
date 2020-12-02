// import React, { Component } from 'react'
// import ScheduleService from './ScheduleService';
// import { withRouter } from "react-router";

// class CreateSFComp extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // step 2
//             entryNo: 0,
//             flightModel: '',
//             sourceAirport: '',
//             destinationAirport: '',
//             arrivalTime: '',
//             departureTime:'',
//             arrivalDate:''
//         }
//         this.changeFlightModelHandler = this.changeFlightModelHandler.bind(this);
//         this.changeSourceAirHandler = this.changeSourceAirHandler.bind(this);
//         this.changeDestAirHandler = this.changeDestAirHandler.bind(this);
//         this.changeArrivalTimeHandler = this.changeArrivalTimeHandler.bind(this);
//         this.changeDeptTimerHandler = this.changeDeptTimerHandler.bind(this);
//         this.changeArrivalDateHandler = this.changeArrivalDateHandler.bind(this);

//         this.saveOrUpdateSF = this.saveOrUpdateSF.bind(this);
//     }

//     // step 3
//     componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             ScheduleService.getScheduledFlight(this.state.id).then( (res) =>{
//                 let scheduledflig = res.data[0];
//                 this.setState({flightModel: scheduledflig.flight.flightModel,
//             sourceAirport: scheduledflig.schedule.sourceAirport.airportLocation,
//             destinationAirport: scheduledflig.schedule.destinationAirport.airportLocation,
//             arrivalTime: scheduledflig.schedule.arrivalTime,
//             departureTime: scheduledflig.schedule.departureTime,
//             arrivalDate: scheduledflig.schedule.arrivalDate
//                 });
//             });
//         }        
//     }
//     saveOrUpdateSF = (e) => {
//         e.preventDefault();
//         let scheduledflig = {flightModel: this.state.flightModel, sourceAirport: this.state.sourceAirport, destinationAirport: this.state.destinationAirport, arrivalTime: this.state.arrivalTime,
//                             departureTime: this.state.departureTime, arrivalDate: this.state.arrivalDate};
//         console.log('scheduledflig => ' + JSON.stringify(scheduledflig));

//         // step 5
//         if(this.state.id === '_add'){
//             ScheduleService.createScheduledFlight(scheduledflig).then(res =>{
//                 this.props.history.push('/scheduledFlight');
//             });
//         }else{
//             ScheduleService.updateScheduledFlight(scheduledflig, this.state.id).then( res => {
//                 this.props.history.push('/scheduledFlight');
//             });
//         }
//     }
    
//     changeFlightModelHandler= (event) => {
//         this.setState({flightModel: event.target.value});
//     }

//     changeSourceAirHandler= (event) => {
//         this.setState({sourceAirport: event.target.value});
//     }

//     changeDestAirHandler= (event) => {
//         this.setState({destinationAirport: event.target.value});
//     }

//     changeArrivalTimeHandler= (event) => {
//         this.setState({arrivalTime: event.target.value});
//     }

//     changeDeptTimerHandler= (event) => {
//         this.setState({departureTime: event.target.value});
//     }

//     changeArrivalDateHandler= (event) => {
//         this.setState({arrivalDate: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/scheduledFlight');
//     }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Schedule Flight</h3>
//         }else{
//             return <h3 className="text-center">Update Schedule Flight</h3>
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> Flight Model: </label>
//                                             <input placeholder="flightModel" name="flightModel" className="form-control" 
//                                                 value={this.state.flightModel} onChange={this.changeFlightModelHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Source Airport: </label>
//                                             <input placeholder="sourceAirport" name="sourceAirport" className="form-control" 
//                                                 value={this.state.sourceAirport} onChange={this.changeSourceAirHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Destination Airport: </label>
//                                             <input placeholder="Destination Airport" name="destinationAirport" className="form-control" 
//                                                 value={this.state.destinationAirport} onChange={this.changeDestAirHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Arrival Time: </label>
//                                             <input placeholder="Arrival Time" name="arrivalTime" className="form-control" 
//                                                 value={this.state.arrivalTime} onChange={this.changeArrivalTimeHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Departure Time: </label>
//                                             <input placeholder="Departure Time" name="departuretime" className="form-control" 
//                                                 value={this.state.departureTime} onChange={this.changeDeptTimerHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Arrival Date: </label>
//                                             <input placeholder="Arrival Date" name="arrivalDate" className="form-control" 
//                                                 value={this.state.arrivalDate} onChange={this.changeArrivalDateHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.saveOrUpdateSF}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }

// export default CreateSFComp;
