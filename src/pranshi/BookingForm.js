import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { Container,Row,Col } from 'react-bootstrap';
import { withRouter } from "react-router";
import Bookingservice from './Bookingservice';
import './style.css';
import axios from 'axios';
const apiUrl="http://localhost:8080";

class BookingForm extends React.Component{
      constructor(props)
      {
          super(props);
         
          this.intialState={
               pnrNumber:this.props.match.params.pnrNumber,
               passengerName:"",
               age:"",
               gender:"",
               passengerUIN:"",
               luggage:""
          }
          
        
          this.onSubmit = this.onSubmit.bind(this);
          onSubmit(values) {
            let passenger = {
              pnrNumber: this.state.pnrNumber,
              passengerName: values.passengerName,
              age: values.age,
              gender:values.gender,
              passengerUIN: values.passengerUIN,
              luggage: values.luggage
            }
            if (this.state.pnrNumber === null) {
              FlightService.createBooking(passenger)
              .then(() => this.props.history.push('/updateflight'))
              console.log(values);
            } else {
              FlightService.updateFlight(this.state.pnrNumber,passenger)
              .then(() => this.props.history.push('/updateflight'))
              console.log(values);
            }
          }
          componentDidMount() {
            if (this.state.pnrNumber === null) {
              return
            } else {
              Bookingservice.retrieveBooking(this.state.pnrNumber)
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
        }  
        
      
        render() {  
             
          
          
    
    return(

        <form onSubmit={this.handleSubmit}>  
    <div class="booking-form-box">
       
        <div class="booking-form">
        <label>pnrNumber</label>
            <input type="text" className="form-control" value={this.state.pnrNumber} onChange={this.handleChange} placeholder="Number"></input>
            <label>passengerName</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="Name"></input>
            <label>age</label>
            <input type="text" className="form-control"  value={this.state.age} onChange={this.handleChange} placeholder="Age"></input>
            <label>gender</label><br/>
            <input type="radio" id="male" name="gender" value="male"></input>
            <label for="male">Male</label><br/>
            <input type="radio" id="female" name="gender" value="female"></input>
            <label for="female">Female</label><br/>
            <input type="radio" id="other" name="gender" value="other"></input>
             <label for="other">Other</label>
            <div class="input-grp">
                <label>passengerUIN</label>
                <input type="text" className="form-control" value={this.state.passengerUIN} onChange={this.handleChange} placeholder="Aadhar Number"></input>
            </div>
            <div class="input-grp">
                <label>luggage</label>
                <input type="text" className="form-control" value={this.state.luggage} onChange={this.handleChange}></input>
                
            </div>
             <button type="submit" class="btn btn-primary mb-2" onsubmit={this.handleSubmit}>Submit</button>
            </div>
            </div>
            </form>
            
            
           );
        }
    }

    
    export default BookingForm; 