import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { Container,Row,Col } from 'react-bootstrap';
import { withRouter } from "react-router";
import Bookingservice from './Bookingservice';
class BookingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pnrNumber:this.props.match.params.pnrNumber,
               passengerName:"",
               age:"",
               gender:"",
               passengerUIN:"",
               luggage:""

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
//       errors.passengerModel= 'Enter a description'
//     } else if (!values.airportLocation.match(letters)) {
//       errors.passengerModel= 'Sorry! Airport Location should be alphabetical, please try again!'
//     }
//     return errors
//   }
  onSubmit(values) {
    let passenger = {
      pnrNumber: this.state.pnrNumber,
      carrierName: values.carrierName,
      passengerModel: values.passengerModel,
      seatCapacity:values.seatCapacity
    }
    if (this.state.pnrNumber === null) {
      Bookingservice.createBooking(passenger)
      .then(() => this.props.history.push('/updatepassenger'))
      console.log(values);
    } else {
      Bookingservice.updatepassenger(this.state.pnrNumber, passenger)
      .then(() => this.props.history.push('/updatepassenger'))
      console.log(values);
    }
  }
  componentDidMount() {
    if (this.state.pnrNumber === null) {
      return
    } else {
      Bookingservice.retrievepassenger(this.state.pnrNumber)
      .then(
          response =>
              // console.log(response)
              this.setState({
                passengerName : response.data.passengerName,
                age: response.data.age,
                gender: response.data.gender,
                passengerUIN: response.data.passengerUIN,
                luggage: response.data.luggage
              })
      )
    }
  }

  render() {
    let {passengerName,age,gender,passengerUIN,luggage} = this.state;
    // let passengerModel= this.state.passengerModel;
    return(
      <div>
      <div className="btn-info" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
      <Container>
      <h1 >Add passenger</h1>
      <Row>
      <Col sm={4}>
        <Formik
            initialValues={{passengerName,age,gender,passengerUIN,luggage}}
            // validate={this.validate}
            // validateOnChange={false}
            // validateOnBlur={false}
            enableReinitialize={true}
            onSubmit={this.onSubmit}>
          {
            (props => (
                <Form>
                  {/* <ErrorMessage name="carrierName" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="passengerModel" component="div" className="alert alert-warning"/> */}
                  <fieldset className="form-group">
                    <label >Enter Passenger Name</label>
                    <Field className="form-control" type="text" name="passengerName" required="true"/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Enter Age</label>
                    <Field className="form-control" type="text" name="age" required="true"/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Enter Gender</label>
                    <Field className="form-control" type="text" name="gender" required="true"/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Enter Aadhar Number</label>
                    <Field className="form-control" type="text" name="passengerUIN" required="true"/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Enter Luggage</label>
                    <Field className="form-control" type="text" name="luggage" required="true"/>
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
    <div>Update passenger for id - {this.props.match.params.pnrNumber}</div>
    </div>
          );
  }
}
export default withRouter(BookingForm);