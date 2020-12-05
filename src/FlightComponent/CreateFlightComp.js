import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { withRouter } from "react-router";
import FlightService from './FlightService';
import { Container,Row,Col } from 'react-bootstrap';
class CreateFlightComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flightId : this.props.match.params.flightId,
      carrierName : '',
      flightModel : '',
      seatCapacity : ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }


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
      seatCapacity: values.seatCapacity
    }
      FlightService.createFlight(flight)
      .then(() => {
        alert("Flight Added Successfully");
        this.props.history.push('/updateflight')})
      console.log(values);
    }
  // componentDidMount() {
  //   if (this.state.id === null) {
  //     return
  //   } else {
  //     AirportService.retrieveAirport(this.state.id)
  //     .then(
  //         response =>
  //             // console.log(response)
  //             this.setState({
  //               carrierName : response.data.airportName,
  //               airportLocation : response.data.airportLocation
  //             })
  //     )
  //   }
  // }

  render() {
    let {carrierName, flightModel,seatCapacity} = this.state;
    // let airportLocation = this.state.airportLocation;
    return(
        <div className="btn-info" style={{display: 'flex',  alignItems:'center', height: '100vh'}}>
          <Container>
          <h1 >Add Flight</h1>
          <Row>
          <Col sm={5}>
            <Formik
                initialValues={{carrierName,flightModel,seatCapacity}}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}
                onSubmit={this.onSubmit}>
              {
                (props => (
                  <center>
                    <Form >
                       <ErrorMessage name="carrierName" component="div" className="alert alert-warning"/>
                      <ErrorMessage name="flightModel" component="div" className="alert alert-warning"/>

                      <fieldset className="form-group">

                        <label htmlFor="carrierName"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter Carrier Name</span></label>

                        <Field id="carrierName"  className="form-control" type="text" name="carrierName" required="true"/>

                      </fieldset><br/>
                      <fieldset className="form-group">


                        <label htmlFor="flightModel"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter FlightModel No.</span></label>&nbsp;&nbsp;

                        <Field id="flightModel" className="form-control" type="text" name="flightModel" required="true"/>

                      </fieldset> <br />
                      <fieldset className="form-group">

                        <label htmlFor="seatCapacity"><span style={{fontFamily:"Serif",fontSize:"1.5em"}}>Enter Seat Capacity</span></label>&nbsp;&nbsp;

                        <Field id="seatCapacity" className="form-control" type="number" size="6" name="seatCapacity" required="true"/>

                      </fieldset>
                      <button className="btn btn-danger" type="submit">Save</button>
                    </Form>
                    </center>
                ))
              }
            </Formik>
            </Col>
        </Row>
        </Container>



        </div>


    );
  }
}

export default withRouter(CreateFlightComp);