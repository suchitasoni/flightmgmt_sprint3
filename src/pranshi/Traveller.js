import React from 'react';
import './Traveller.css';
import BookingForm from './BookingForm';


class Traveller extends React.Component{
 
  
    render()
    {
        return(
           
            <div className="Booking">
            <header className="Booking-Header">
            <br/>
            <h4 className="headerTitle">Traveller Details</h4>
            <br/>
            </header>
            <br/>
            
            <div className="row-inline">
            <div className="col-md-8">
            <h5 className="text-white">Booking Details</h5>     
          </div>
         
           </div>
    <div className="row">
    <div className="col-md-8">
        <div className='card-group'>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
      
          <span className="card-title">New Delhi-Mumbai</span>
          <p>(DEL-BOM)</p>
        </div>
        </div>
     </div>
    </div>
  </div>
          <div className="col-md-8">
           <h5 className="text-white">Fares Details</h5>
           <div className="card blue-grey darken-1">
           <div className="card-content white-text">
           <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <p>
                        Basic Fare:
                        </p>
                        </div>
                        <div className="col-md-4">
                        <p className="text-right">3241</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3">
                        <p>
                        Charges:
                        </p>
                        </div>
                        <div className="col-md-4">
                        <p className="text-right">241</p>
                        </div>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                <p className="text-right">3482</p>
                  </div>
                        </div> 
                        
                        
                        
         
        </div>
           </div>
          </div>
              
           
  <div className="col-md-8">
        <h5 className="text-white">Passenger Details</h5>     
        </div>
    <div className="row">
    <div className="col-md-8">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
      
          <div className="card-title"><div className="col-md-3 ">
			<h6>Contact Details:</h6>
	      </div>
      <form className="form-inline">
         <label for="email" className="mr-sm-4">Email address:</label>
         <input type="email" className="form-control mb-2 mr-sm-4" placeholder="Enter email" id="email"></input>
         <label for="mobile" className="mr-sm-4">Mobile No.:</label>
        <input type="text" className="form-control mb-2 mr-sm-4" placeholder="Enter number" id="num"></input>
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
    <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo">Additional Information</button>
    <div id="demo" className="collapse">
      <br/>
      <BookingForm/>
    </div>
    
         </div> 
    </div>
    </div></div></div>

            
        );
    }
}
export default Traveller;