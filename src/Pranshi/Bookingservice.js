import axios from 'axios';
class Bookingservice {

  getScheduledBooking(){
      return axios.get( 'http://localhost:8080/flightmgmt/passengers/all');
  }

  getScheduledBookingById(pnrNumber){
      return axios.get(`http://localhost:8080/flightmgmt/passengers/getPassenger/${pnrNumber}`);
  }

  createBooking(passenger){
      return axios.post('http://localhost:8080/flightmgmt/passengers/newpassenger', passenger);
  }

  updatepassenger(passenger, pnrNumber){
          return axios.put(`http://localhost:8080/flightmgmt/passengers/updatePassenger/${pnrNumber}` , passenger);
  }

   deletepassenger(pnrNumber){
      return axios.delete(`http://localhost:8080/flightmgmt/passengers/deletePassengers/${pnrNumber}`);
  }
}

export default new Bookingservice()