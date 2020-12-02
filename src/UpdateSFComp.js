// import React, { Component } from 'react'
// import ScheduleService from './ScheduleService';

// class UpdateSFComp extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             entryNo: this.props.match.params.entryNo,
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

//         this.updateEmployee = this.updateEmployee.bind(this);
//     }

//     componentDidMount(){
//         ScheduleService.getScheduledFlightById(this.state.id).then( (res) =>{
//             let scheduledflig = res.data;
//             this.setState({flightModel: scheduledflig.flightModel,
//                 sourceAirport: scheduledflig.sourceAirport,
//                 destinationAirport: scheduledflig.destinationAirport,
//                 arrivalTime: scheduledflig.arrivalTime,
//                 departureTime: scheduledflig.departureTime,
//                 arrivalDate: scheduledflig.arrivalDate
//             });
//         });
//     }

//     updateScheduledFlight = (e) => {
//         e.preventDefault();
//         let scheduledflig = {flightModel: this.state.flightModel, sourceAirport : this.state.sourceAirport, destinationAirport: this.state.destinationAirport, arrivalTime: this.state.arrivalTime,
//             departureTime : this.state.departureTime, arrivalDate: this.state.arrivalDate};
//         console.log('scheduledflig => ' + JSON.stringify(scheduledflig));
//         console.log('id => ' + JSON.stringify(this.state.id));
//         ScheduleService.updateScheduledFlight(scheduledflig, this.state.id).then( res => {
//             this.props.history.push('/scheduledFlight');
//         });
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

//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 <h3 className="text-center">Update Schedule Flight</h3>
//                                 <div className = "card-body">
//                                 <form>
//                                         <div className = "form-group">
//                                             <label> Flight Model: </label>
//                                             <input placeholder="Flight Model" name="FlightModel" className="form-control" 
//                                                 value={this.state.flightModel} onChange={this.changeFlightModelHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Source Airport: </label>
//                                             <input placeholder="Source Airport" name="SourceAir" className="form-control" 
//                                                 value={this.state.sourceAirport} onChange={this.changeSourceAirHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Destination Airport: </label>
//                                             <input placeholder="Destination Airport" name="DestAir" className="form-control" 
//                                                 value={this.state.destinationAirport} onChange={this.changeDestAirHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Arrival Time: </label>
//                                             <input placeholder="Arrival Time" name="ArrivalTime" className="form-control" 
//                                                 value={this.state.arrivalTime} onChange={this.changeArrivalTimeHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Departure Time: </label>
//                                             <input placeholder="Departure Time" name="departureTime " className="form-control" 
//                                                 value={this.state.departureTime} onChange={this.changeDeptTimerHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Arrival Date: </label>
//                                             <input placeholder="Arrival Date" name="arrivalDate" className="form-control" 
//                                                 value={this.state.arrivalDate} onChange={this.changeArrivalDateHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.updateScheduledFlight}>Save</button>
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

// export default UpdateSFComp
