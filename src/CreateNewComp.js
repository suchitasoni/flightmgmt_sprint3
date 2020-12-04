import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import ScheduleService from "./ScheduleService";
import { withRouter } from "react-router";

class CreateNewComp extends Component {
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

  validate(event) {
        // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
        let errors = {}
        // const letters = /^[A-Za-z]+$/;
        const letters = /^[A-Za-z ]+$/;
        if (!this.state.airportName) {
          errors.airportName = 'Enter a description'
        } else if (!this.state.airportName.match(letters)) {
          errors.airportName = 'Sorry! Airport name should be alphabetical, please try again!'
        }
        if (!this.state.airportName1) {
          errors.airportName1 = 'Enter a description'
        } else if (!this.state.airportName1.match(letters)) {
          errors.airportName1 = 'Sorry! Airport Location should be alphabetical, please try again!'
        }
        return errors
      }


onSubmit(e){
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
console.log(scheduledF)
console.log(this.state)

    ScheduleService.createScheduledFlight(scheduledF)
      .then(() => this.props.history.push("/update"));
      console.log(e);
    
}

onChange= (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.name,event.target.value)
}

  render() {
    let {airportName,airportName1} = this.state;

    return(
        <div >
          <h1><i>Add Schedule Flight</i></h1><br/>
          <h6 align="left">*Date and Time format should be strictly followed. Time should be in the format "YYYY-MM-DD'T'hh:mm:ss". For example- 2020-12-06T02:30:59</h6>
          <br/>
          <Formik
            initialValues={{airportName,airportName1}}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
                onSubmit={this.onSubmit}>
              {
                (props => (
                  <Form  onSubmit={this.onSubmit}>
                  <ErrorMessage name="airportName" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="airportName1" component="div" className="alert alert-warning"/>
                  <fieldset className="form-group">
                    <label>Flight Id</label>
                    <Field className="form-control" type="number" name="flightId" value= {this.state.flightId} onChange={this.onChange} />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Carrier Name</label>
                    <Field className="form-control" type="text" name="carrierName" value= {this.state.carrierName} onChange={this.onChange}/>
                  </fieldset>
                  
                  <fieldset className="form-group">
                    <label>Flight Model</label>
                    <Field className="form-control" type="text" name="flightModel" value= {this.state.flightModel} onChange={this.onChange}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Seat Capacity </label>
                    <Field className="form-control" type="number" name="seatCapacity" value= {this.state.seatCapacity} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Available seats </label>
                    <Field className="form-control" type="number" name="availableSeats" value= {this.state.availableSeats} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Source Airport Id </label>
                    <Field className="form-control" type="number" name="airportId" value= {this.state.airportId} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Source Airport Name </label>
                    <Field className="form-control" type="text" name="airportName" value= {this.state.airportName} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Source Airport Location </label>
                    <Field className="form-control" type="text" name="airportLocation" value= {this.state.airportLocation} onChange={this.onChange}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Destination Airport Id </label>
                    <Field className="form-control" type="number" name="airportId1" value= {this.state.airportId1} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Destination Airport Name </label>
                    <Field className="form-control" type="text" name="airportName1" value= {this.state.airportName1} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Destination Airport Location </label>
                    <Field className="form-control" type="text" name="airportLocation1" value= {this.state.airportLocation1} onChange={this.onChange}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Arrival Time*</label>
                    <Field className="form-control" placeHolder="YYYY-MM-DD'T'hh:mm:ss" type="text" name="arrivalTime" value= {this.state.arrivalTime} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Departure Time*</label>
                    <Field className="form-control" placeHolder="YYYY-MM-DD'T'hh:mm:ss" type="text" name="departureTime" value= {this.state.departureTime} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Arrival Date*</label>
                    <Field className="form-control" placeHolder="DD-MM-YYYY" type="text" name="arrivalDate" value= {this.state.arrivalDate} onChange={this.onChange}/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Fares </label>
                    <Field className="form-control" type="number" name="fares" value= {this.state.fares} onChange={this.onChange}/>
                  </fieldset>
                  <button className="btn btn-success" type="submit">Save</button>
                  <button className="btn btn-danger" type="cancel">Cancel</button>

                </Form>
                
          ))
        }
      </Formik>
        </div>
          );
  }
}

export default withRouter(CreateNewComp);