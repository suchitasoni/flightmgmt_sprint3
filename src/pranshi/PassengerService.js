import axios from 'axios';

class PassengerService {
  // addBooking(resp)
  // {
  //   return axios.post('http://localhost:8080/flightmgmt/bookings/createBooking', resp);
  // }
   addPassenger(resp) {
     return axios.post('http://localhost:8080/flightmgmt/passengers/newpassenger', resp);
   }
}
export default new PassengerService();