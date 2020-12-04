import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {Link} from "react-router-dom";
import React, { Component } from 'react'
import Bookingservice from './Bookingservice'
import { withRouter } from "react-router";

class BookingList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                passenger : [{
                  "pnrNumber": 2,
                  "passengerName": "Piya",
                  "age": 21,
                  "gender": "Female",
                  "passengerUIN": 435678923421,
                  "luggage": 12.0,
                  "booking": {
                      "bookingId": 1111,
                      "userId": null,
                      "bookingDate": "2020-12-09",
                      "passengerList": [],
                      "ticketCost": 4321.0,
                      "flight": {
                          "flightId": 3211,
                          "carrierName": "Spicejet",
                          "flightModel": "G5-124",
                          "seatCapacity": 111
                      },
                      "noOfPassengers": 2
                  }
              }
          ],
        }
        this.addpassenger = this.addpassenger.bind(this);
        this.editpassenger = this.editpassenger.bind(this);
        this.deletepassenger = this.deletepassenger.bind(this);

        
    }

    deletepassenger(pnrNumber){
        Bookingservice.deletepassenger(pnrNumber).then( res => {
            this.setState({message: `Delete of id ${pnrNumber} is successful`})
            this.refreshSF()
          });
    }
    
    editpassenger(pnrNumber){
        this.props.history.push(`/flightmgmt/passengers/updatePassenger/${pnrNumber}`);
    }

    componentDidMount(){
        this.refreshSF();
      
    }

    addpassenger(){
        this.props.history.push(`/update/-1`);
    }

    refreshSF() {
        Bookingservice.getpassenger()
        .then(
            res=>
            {
              // console.log(response)
              this.setState({passenger : res.data})
            })
      }
  
  
    render(){         
         return(  
          <div>
          <h2 className="text-center">Scheduled Flight List</h2>
          <div className = "row">
             <Button variant="contained" color="secondary" onClick={this.addpassenger}> Add Scheduled Flight</Button>
          </div>
          <br></br>
          <div className = "row">
                 <Table >

                     <TableHead>
                         <TableRow>
                             {/* <TableCell> Flight Id</TableCell> */}
                             <TableCell> pnrNumber</TableCell>
                             <TableCell> passengerName</TableCell>
                             <TableCell> age</TableCell>
                             <TableCell> gender</TableCell>
                             <TableCell> passengerUIN </TableCell>
                             <TableCell> luggage</TableCell>
                             <TableCell> Actions</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody> 
                         {
                             this.state.passenger.map(
                                 scheduledBooking =>{
                                     console.log(JSON.stringify(scheduledBooking))
                                     return(<TableRow key = {scheduledBooking.pnrNumber}>
                                      <TableCell> {scheduledBooking.passenger.passengerName} </TableCell>
                                      <TableCell> {scheduledBooking.passenger.age} </TableCell>
                                      <TableCell> {scheduledBooking.passenger.gender}</TableCell>
                                      <TableCell> {scheduledBooking.passenger.passengerUIN}</TableCell>
                                      <TableCell> {scheduledBooking.passenger.luggage}</TableCell>
                                      
                                      <TableCell>
                                          <Button variant="contained" color="success" onClick={ () => {this.editpassenger(scheduledBooking.pnrNumber)}}>Update </Button>
                                          <Button variant="contained" color="secondary" style={{marginLeft: "10px"}} onClick={ () => {this.deletepassenger(scheduledBooking.pnrNumber)}} >Delete </Button>
                                          {/* <Button variant="contained" color="primary" style={{marginLeft: "10px"}} onClick={ () => this.viewpassenger(scheduledBooking.id)} >View </Button> */}
                                      </TableCell>
                                 </TableRow>
                                     );
                                 } 
                                 
                             )
                         }
                     </TableBody>
                 </Table>

          </div>

     </div>

 );
}
}


export default withRouter(BookingList);