import React, {Component} from 'react';

import PassengerService from "./PassengerService";
import './style.css';

class CreateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passenger: {
        //  pnrNumber: this.props.match.params.pnrNumber,
          passenger: {
              passengerName: '',
              age: '',
              gender: '',
              passengerUIN: '',
              luggage:''
          },
          booking: {
            bookingId: '',
            userId: '',
            bookingDate: '',
            passengerList: '',
            ticketCost: '',
              },
              flight: {
                flightId: '',
                carrierName: '',
                flightModel: '',
                seatCapacity: ''
            },
            noOfPassengers: ''
              
}
,
  }
  this.onSubmit = this.onSubmit.bind(this);
  this.validate = this.validate.bind(this);
  this.onChange = this.onChange.bind(this);
}
   validate(values) {
        let errors = {}
  //   // const letters = /^[A-Za-z]+$/;
    const letters = /^[A-Za-z ]+$/;
  //   if (!values.passengerName) {
  //     errors.sourceAirport = 'Enter a description'
   if (!values.passengerName.match(letters)) {
       errors.passengerName = 'Sorry!  name should be alphabetical, please try again!'
    }
  // }
  //   if (!values.destinationAirport) {
  //     errors.destinationAirport = 'Enter a description'
  //   } else if (!values.destinationAirport.match(letters)) {
  //     errors.destinationAirport = 'Sorry! Airport Location should be alphabetical, please try again!'
  //   }
    return errors
   }
 

onSubmit(e){ e.preventDefault(); 
   console.log("hii")
      
    let passenger = {

        pnrNumber: this.state.passenger.pnrNumber,
            passenger:{
              pnrNumber:this.state.passenger.pnrNumber,
              passengerName:this.state.passenger.passengerName,
              age:this.state.passenger.age,
              gender:this.state.passenger.gender,
              passengerUIN:this.state.passenger.passengerUIN,
              luggage:this.state.passenger.luggage
            },
        
            booking: {
              bookingId: this.state.passenger.booking.bookingId,
              userId: this.state.passenger.booking.userId,
              bookingDate: this.state.passenger.booking.bookingDate,
              passengerList: this.state.passenger.booking.passengerList,
              ticketCost: this.state.passenger.booking.ticketCost
                },
        
        flight: {
                flightId: this.state.passenger.flight.flightId,
                carrierName: this.state.passenger.flight.carrierName,
                flightModel: this.state.passenger.flight.flightModel,
                seatCapacity: this.state.passenger.flight.seatCapacity
            },
            availableSeats: this.state.passenger.availableSeats
            
    }
        
console.log(passenger)
    PassengerService.addPassenger(this.state)
   //   .then(() => this.props.history.push("/update"));
      console.log(e);
 console.log(passenger)  
//     PassengerService.addBooking(this.state) 
//  PassengerService.addPassenger(passenger).then(()=>alert("457"));
//      console.log(e);
}
  

onChange= (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.name,event.target.value)
}

render() {
 
  return(
    
    <div class="booking-form-box">
       
    <div class="booking-form">
        
        <form
         validate={this.validate}
         validateOnChange={false}
         onSubmit ={this.onSubmit}>
          <label>
          Passenger Name</label>
          <input name= 'passengerName' onChange={this.onChange} value={this.state.passengerName} />
          <div class="input-grp">
          <label>
          Age</label>
          <input name= 'age' onChange={this.onChange} value={this.state.age} />
          </div>
          <div class="input-grp">
          <label>
          Gender</label>
          <input name= 'gender' onChange={this.onChange} value={this.state.gender} />
          </div><div class="input-grp">
          <label>
          Aadhar Number</label>
          <input name= 'passengerUIN' onChange={this.onChange} value={this.state.passengerUIN} />
          </div>
          <div class="input-grp">
          <label>
          Luggage</label>
          <input name= 'luggage' onChange={this.onChange} value={this.state.luggage} />
          </div>
          {/* <div class="input-grp">
          <label>
          BookingId</label>
          <input name= 'bookingId' onChange={this.onChange} value={this.state.bookingId} />
          </div>
          <div class="input-grp">
          <label>
          userid</label>
          <input name= 'userId' onChange={this.onChange} value={this.state.userId} />
          </div>
          <div class="input-grp">

          <label>
          Date</label>
          <input name= 'bookingDate' onChange={this.onChange} value={this.state.bookingDate} />
          </div>
          <div  class="input-grp">
          <label>
          List</label>
          <input name= 'passengerList' onChange={this.onChange} value={this.state.passengerList} />
          </div>
          <div  class="input-grp">
          <label>
          cost</label>
          <input name= 'ticketCost' onChange={this.onChange} value={this.state.ticketCost} />
          </div>
          
         <div  class="input-grp"> 
          <label>
          Total</label>
          <input name= 'noofPassengers' onChange={this.onChange} value={this.state.noOfPassengers} />
          </div> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
        );
  }
}


export default CreateComp;