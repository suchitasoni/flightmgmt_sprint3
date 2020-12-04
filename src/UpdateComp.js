import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import ScheduleService from "./ScheduleService";
import { withRouter } from "react-router";

class UpdateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryNo: this.props.match.params.entryNo,
      flightId: '',
      carrierName:'',
      flightModel:'',
      seatCapacity:'',
      availableSeats: '',
      airportId: '',
      airportName:'',
      airportLocation:'',
      airportId1: '',
      airportName1:'',
      airportLocation1:'',
      arrivalTime: '',
      departureTime: '',
      arrivalDate: '',
      fares: ''
}

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  validate(values) {
    // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
    let errors = {}
    const letters = /^[A-Za-z ]+$/;
    if (!values.sourceAirport) {
      errors.sourceAirport = 'Enter a description'
    } else if (!values.sourceAirport.match(letters)) {
      errors.sourceAirport = 'Sorry! Airport name should be alphabetical, please try again!'
    }
    if (!values.destinationAirport) {
      errors.destinationAirport = 'Enter a description'
    } else if (!values.destinationAirport.match(letters)) {
      errors.destinationAirport = 'Sorry! Airport Location should be alphabetical, please try again!'
    }
    return errors
  }
  onSubmit(e) {
      let scheduledF = {
        entryNo: this.state.entryNo,
                flight: {
                    flightId: this.state.flightId,
                    carrierName: this.state.carrierName,
                    flightModel: this.state.flightModel,
                    seatCapacity: this.state.seatCapacity
                },
                availableSeats: this.state.availableSeats,
                schedule: {
                    sourceAirport: {
                        airportId: this.state.airportId,
                        airportName: this.state.airportName,
                        airportLocation: this.state.airportLocation
                    },
                    destinationAirport: {
                        airportId: this.state.airportId1,
                        airportName: this.state.airportName1,
                        airportLocation: this.state.airportLocation1
                    },
                    arrivalTime: this.state.arrivalTime,
                    departureTime: this.state.departureTime,
                    arrivalDate: this.state.arrivalDate
                },
                fares: this.state.fares
      }
    if (this.state.entryNo === null) {
      ScheduleService.createScheduledFlight(scheduledF)
      .then(() => this.props.history.push('/update'))
      console.log(e);
    } else {
      ScheduleService.updateScheduledFlight(this.state.entryNo, this.state)
        .then(() => this.props.history.push('/update'))
      console.log(e);
    }
  }
  // componentDidMount() {
  //   if (this.state.entryNo === null) {
  //       return
  //     } else {
  //       ScheduleService.getScheduledFlightById(this.state.entryNo)
  //       .then(
  //           response =>
  //               this.setState({
                
  //                 flightId: response.data.flightId,
  //                 carrierName:response.data.carrierName,
  //                 flightModel:response.data.flightModel,
  //                 seatCapacity:response.data.seatCapacity,
  //                 availableSeats: response.data.availableSeats,
  //                 airportId: response.data.airportId,
  //                 airportName:response.data.airportName,
  //                 airportLocation:response.data.airportLocation,
  //                 airportId1: response.data.airportId1,
  //                 airportName1:response.data.airportName1,
  //                 airportLocation1:response.data.airportLocation1,
  //                 arrivalTime: response.data.arrivalTime,
  //                 departureTime: response.data.departureTime,
  //                 arrivalDate: response.data.arrivalDate,
  //                 fares: response.data.fares              
  //           })
            
  //       )

  //     }
  // }

  onChange= (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.name,event.target.value)
}

  render() {
    let {flightModel, airportName, airportName1, arrivalTime, departureTime, arrivalDate} = this.state;
    // let airportLocation = this.state.airportLocation;
    return(
        <div>
          <h1><i>Update Schedule Flight</i></h1><br/>
          <div>Update Schedule Flight for entryNo - {this.props.match.params.entryNo}</div><br/>

          <div className="container">
            <Formik
                initialValues={{flightModel, airportName,airportName1, arrivalTime, departureTime, arrivalDate}}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
                onSubmit={this.onSubmit}
            >
              {
                (props => (
                    <Form onSubmit={this.onSubmit}>
                      {/* <ErrorMessage name="sourceAirport" component="div" className="alert alert-warning"/>
                      <ErrorMessage name="destinationAirport" component="div" className="alert alert-warning"/> */}
                      <div className="form-group">
                    <label>Flight Id</label>
                    <Field className="form-control" type="number" name="flightId" value= {this.state.flightId} onChange={this.onChange} />
                    
                  </div>

                  <div className="form-group">
                    <label>Carrier Name</label>
                    <select className="form-control" type="text" name="carrierName" value= {this.state.carrierName} onChange={this.onChange} >
                    <option>IndiGo</option>
                      <option>SpiceJet</option>
                      <option>Air India</option>
                      <option>GoAir</option>
                      <option>Vistara</option>
                      <option>Air Deccan</option>
                      <option>Air India Express</option>
                      <option>Star India</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Flight Model</label>
                    <Field className="form-control" type="text" name="flightModel" value= {this.state.flightModel} onChange={this.onChange}/>
                  </div>

                  <div className="form-group">
                    <label>Seat Capacity </label>
                    <Field className="form-control" type="number" name="seatCapacity" value= {this.state.seatCapacity} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Available seats </label>
                    <Field className="form-control" type="number" name="availableSeats" value= {this.state.availableSeats} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Source Airport Id </label>
                    <Field className="form-control" type="number" name="airportId" value= {this.state.airportId} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Source Airport Name </label>
                    <select className="form-control" type="text" name="airportName" value= {this.state.airportName} onChange={this.onChange} >
                    <option>Ambikapur Airport</option>
                      <option>Bhuj Airport</option>
                      <option>Chandigarh Airport</option>
                      <option>Cochin Airport</option>
                      <option>Devi Ahilya Bai Holkar Airport</option>
                      <option>Hyderabad Airport</option>
                      <option>Goa Airport</option>
                      <option>Jaipur International Airport</option>
                      <option>Pune Airport</option>
                      <option>Sheikhul Aalam International Airport</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Source Airport Location </label>
                    <select className="form-control" type="text" name="airportLocation" value= {this.state.airportLocation} onChange={this.onChange} >
                    <option>Ambikapur</option>
                    <option>Bhuj Gujrat</option>
                      <option>Chandigarh Punjab</option>
                      <option>Cochin Kerala</option>
                      <option>Indore M.P</option>
                      <option>Hyderabad Telangana</option>
                      <option>Goa </option>
                      <option>Jaipur Rajasthan</option>
                      <option>Pune Maharashtra</option>
                      <option>Srinagar Jammu & Kashmir</option>

                    </select>
                  </div>

                  <div className="form-group">
                    <label>Destination Airport Id </label>
                    <Field className="form-control" type="number" name="airportId1" value= {this.state.airportId1} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Destination Airport Name </label>
                    <select className="form-control" type="text" name="airportName1" value= {this.state.airportName1} onChange={this.onChange} >
                    <option>Ambikapur Airport</option>
                      <option>Bhuj Airport</option>
                      <option>Chandigarh Airport</option>
                      <option>Cochin Airport</option>
                      <option>Devi Ahilya Bai Holkar Airport</option>
                      <option>Hyderabad Airport</option>
                      <option>Goa Airport</option>
                      <option>Jaipur International Airport</option>
                      <option>Pune Airport</option>
                      <option>Sheikhul Aalam International Airport</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Destination Airport Location </label>
                    <select className="form-control" type="text" name="airportLocation1" value= {this.state.airportLocation1} onChange={this.onChange} >
                    <option>Ambikapur</option>
                    <option>Bhuj Gujrat</option>
                      <option>Chandigarh Punjab</option>
                      <option>Cochin Kerala</option>
                      <option>Indore M.P</option>
                      <option>Hyderabad Telangana</option>
                      <option>Goa </option>
                      <option>Jaipur Rajasthan</option>
                      <option>Pune Maharashtra</option>
                      <option>Srinagar Jammu & Kashmir</option>
                    
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Arrival Time*</label>
                    <Field className="form-control" placeHolder="YYYY-MM-DD'T'hh:mm:ss" type="text" name="arrivalTime" value= {this.state.arrivalTime} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Departure Time*</label>
                    <Field className="form-control" placeHolder="YYYY-MM-DD'T'hh:mm:ss" type="text" name="departureTime" value= {this.state.departureTime} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Arrival Date*</label>
                    <Field className="form-control" placeHolder="DD-MM-YYYY" type="text" name="arrivalDate" value= {this.state.arrivalDate} onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label>Fares </label>
                    <Field className="form-control" type="number" name="fares" value= {this.state.fares} onChange={this.onChange}/>
                  </div>
                      <button className="btn btn-success" type="submit">Update</button>
                      <button className="btn btn-danger" type="cancel">Cancel</button>
                    </Form>
                ))
              }
            </Formik>
          </div>
        </div>
          );
  }
}
export default withRouter(UpdateComp);