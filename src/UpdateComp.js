import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import ScheduleService from "./ScheduleService";
import { withRouter } from "react-router";

class UpdateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entryNo: this.props.match.params.entryNo,
        flightModel: '',
        sourceAirport: '',
        destinationAirport: '',
        arrivalTime: '',
        departureTime:'',
        arrivalDate:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate(values) {
    // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
    let errors = {}
    // const letters = /^[A-Za-z]+$/;
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
  onSubmit(values) {
      let scheduledF = {
        entryNo: this.state.entryNo,
        flightModel: values.flightModel, 
        sourceAirport: values.sourceAirport,
        destinationAirport: values.destinationAirport, 
        arrivalTime: values.arrivalTime,
        departureTime: values.departureTime, 
        arrivalDate: values.arrivalDate
      }
    if (this.state.entryNo === null) {
      ScheduleService.createScheduledFlight(scheduledF)
      .then(() => this.props.history.push('/update'))
      console.log(values);
    } else {
      ScheduleService.updateScheduledFlight(this.state.entryNo, scheduledF)
        .then(() => this.props.history.push('/update'))
      console.log(values);
    }
  }
  componentDidMount() {
    if (this.state.entryNo === null) {
        return
      } else {
        ScheduleService.getScheduledFlightById(this.state.entryNo)
        .then(
            response =>
                // console.log(response)
                this.setState({
                  
                  flightModel: response.data.flightModel, 
                  sourceAirport: response.data.sourceAirport,
                  destinationAirport: response.data.destinationAirport, 
                  arrivalTime: response.data.arrivalTime,
                  departureTime: response.data.departureTime, 
                  arrivalDate: response.data.arrivalDate                })
        )
      }
  }

  render() {
    let {flightModel, sourceAirport, destinationAirport, arrivalTime, departureTime, arrivalDate} = this.state;
    // let airportLocation = this.state.airportLocation;
    return(
        <div>
          <h1>Update Schedule Flight</h1>
          <div className="container">
            <Formik
                initialValues={{flightModel, sourceAirport, destinationAirport, arrivalTime, departureTime, arrivalDate}}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
                onSubmit={this.onSubmit}>
              {
                (props => (
                    <Form>
                      <ErrorMessage name="sourceAirport" component="div" className="alert alert-warning"/>
                      <ErrorMessage name="destinationAirport" component="div" className="alert alert-warning"/>
                      <fieldset className="form-group">
                        <label>Flight Model</label>
                        <Field className="form-control" type="text" name="flightModel"/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Source Airport</label>
                        <Field className="form-control" type="text" name="sourceAirport"/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Destination Airport</label>
                        <Field className="form-control" type="text" name="destinationAirport"/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Arrival Time</label>
                        <Field className="form-control" type="text" name="arrivalTime"/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Departure Time</label>
                        <Field className="form-control" type="text" name="departureTime"/>
                      </fieldset>
                      <fieldset className="form-group">
                        <label>Arrival Date</label>
                        <Field className="form-control" type="text" name="arrivalDate"/>
                      </fieldset>
                      <button className="btn btn-success" type="submit">Save</button>
                    </Form>
                ))
              }
            </Formik>
          </div>
          <div>Update Schedule Flight for entryNo - {this.props.match.params.entryNo}</div>
        </div>
          );
  }
}
export default withRouter(UpdateComp);