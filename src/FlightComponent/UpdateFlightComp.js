import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { Container,Row,Col } from 'react-bootstrap';
import { withRouter } from "react-router";
import FlightService from './FlightService';
class UpdateFlightComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flightId : this.props.match.params.flightId,
      carrierName : '',
      flightModel: '',
      seatCapacity: ''

    }
    this.onSubmit = this.onSubmit.bind(this);
    // this.validate = this.validate.bind(this);
  }
//   validate(values) {
//     // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
//     let errors = {}
//     // const letters = /^[A-Za-z]+$/;
//     const letters = /^[A-Za-z ]+$/;
//     if (!values.carrierName) {
//       errors.carrierName = 'Enter a description'
//     } else if (!values.carrierName.match(letters)) {
//       errors.carrierName = 'Sorry! Airport name should be alphabetical, please try again!'
//     }
//     if (!values.airportLocation) {
//       errors.flightModel= 'Enter a description'
//     } else if (!values.airportLocation.match(letters)) {
//       errors.flightModel= 'Sorry! Airport Location should be alphabetical, please try again!'
//     }
//     return errors
//   }
validate(values) {
  //     // let errors = {airportName: 'Airport Name should be Alphabetical', airportLocation: 'Airport Location should be Alphabetical'}
      let errors = {}

      const letters = /^[A-Za-z ]+$/;
      const modelno = /^[A-Z0-9]{2}[-][0-9]{3,4}$/;


   if (!values.carrierName.match(letters)) {
        errors.carrierName = 'Sorry! Carrier Name should be alphabetical, please try again!'
      }
    if (!values.flightModel.match(modelno)) {
        errors.flightModel = 'Sorry! Flight Model No.  should be in format AA-1111 or 1A-111, please try again!'
      }

     return errors
    }
  onSubmit(values) {
    let flight = {
      flightId: this.state.flightId,
      carrierName: values.carrierName,
      flightModel: values.flightModel,
      seatCapacity:values.seatCapacity
    }
    if (this.state.flightId === null) {
      FlightService.createFlight(flight)
      .then(() => {
        alert("Flight Added Successfully");
        this.props.history.push('/updateflight')})
      console.log(values);
    } else {
      FlightService.updateFlight(this.state.flightId, flight)
      .then(() => {
        alert("Flight Updated Successfully");
        this.props.history.push('/updateflight')})
      console.log(values);
    }
  }
  componentDidMount() {
    if (this.state.flightId === null) {
      return
    } else {
      FlightService.retrieveFlight(this.state.flightId)
      .then(
          response =>
              // console.log(response)
              this.setState({
                carrierName : response.data.carrierName,
                flightModel: response.data.flightModel,
                seatCapacity: response.data.seatCapacity,

              })
      )
    }
  }

  render() {
    let {carrierName, flightModel,seatCapacity} = this.state;
    // let flightModel= this.state.flightModel;
    return(
      <div>
      <div className="btn-info" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
      <Container>
      <h1 >Add Flight</h1>
      <Row>
      <Col sm={4}>
        <Formik
            initialValues={{carrierName,flightModel,seatCapacity}}
            validate={this.validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
            onSubmit={this.onSubmit}>
          {
            (props => (
                <Form>
                  <ErrorMessage name="carrierName" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="flightModel" component="div" className="alert alert-warning"/>
                  <fieldset className="form-group">

                     <label htmlFor="carrierName"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter Carrier Name</span></label>

                     <Field id="carrierName" className="form-control" type="text" name="carrierName" required="true"/>

                   </fieldset><br/>
                   <fieldset className="form-group">


                     <label htmlFor="flightModel"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter FlightModel No.</span></label>&nbsp;&nbsp;

                     <Field id="flightModel" className="form-control" type="text" name="flightModel" required="true"/>

                   </fieldset> <br />
                   <fieldset className="form-group">

                     <label htmlFor="seatCapacity"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter Seat Capacity</span></label>&nbsp;&nbsp;

                     <Field id="seatCapacity" className="form-control" type="text" type="number" size="6" name="seatCapacity" required="true"/>

                   </fieldset>
                   <button className="btn btn-danger" type="submit">Save</button>
                </Form>
            ))
          }
        </Formik>
        </Col>
    </Row>
    </Container>



    </div>
    <div>Update Flight for id - {this.props.match.params.flightId}</div>
    </div>
          );
  }
}
export default withRouter(UpdateFlightComp);