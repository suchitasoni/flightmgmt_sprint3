import { Button, IconButton, Table, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import FlightIcon from '@material-ui/icons/Flight';
import  AccountBalanceWalletIcon  from '@material-ui/icons/AccountBalanceWallet';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
class HomeComp extends React.Component{
    constructor(props){
        super(props);
}

render(){
    return(
        <div >
            <h1><i>Welcome to EaseMyFlight</i></h1>
            
            <h2 align="center" ><i>Top Flight Routes</i> </h2><br/>
            <Table style={{color:'white'}} >
                <TableRow >
                    <TableCell> Delhi to Mumbai (DEL-BOM)</TableCell>
                    <TableCell><Button color="secondary" variant="contained">
                        Search Flight
                    </Button></TableCell>
                </TableRow>
                <TableRow >
                    <TableCell> Mumbai to Delhi (BOM-DEL)</TableCell>
                    <TableCell><Button color="secondary" variant="contained" >
                        Search Flight
                    </Button></TableCell>
                </TableRow>
                <TableRow >
                    <TableCell> Delhi to Bangalore (DEL-BLR)</TableCell>
                    <TableCell><Button color="secondary" variant="contained" >
                        Search Flight
                    </Button></TableCell>
                </TableRow>
                <TableRow >
                    <TableCell> Bangalore to Delhi (BLR-DEL)</TableCell>
                    <TableCell><Button color="secondary" variant="contained" >
                        Search Flight
                    </Button></TableCell>
                </TableRow>
                <TableRow >
                    <TableCell> Kolkata to Delhi (CCU-DEL)</TableCell>
                    <TableCell><Button color="secondary" variant="contained" >
                        Search Flight
                    </Button></TableCell>
                </TableRow>
                <TableRow >
                    <TableCell> Delhi to Kolkata (DEL-CCU)</TableCell>
                    <TableCell><Button color="secondary" variant="contained" >
                        Search Flight
                    </Button></TableCell>
                </TableRow>
                <TableRow >
                    <TableCell> Mumbai to Goa (BOM-GOI)</TableCell>
                    <TableCell><Button color="secondary" variant="contained" >
                        Search Flight
                    </Button></TableCell>
                </TableRow>

            </Table><br/><br/>

            <Table style={{color:'white', backgroundColor:'#4527a0'}} padding='default' >
                <TableRow>
                    <TableCell><h3>Why Book with<br /> us?</h3></TableCell>
                    <TableCell>
                    <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                  <FlightIcon fontSize="large" />
              </IconButton>
              <h3>EASY BOOKING</h3>
              <p >We offer easy and <br /> convenient flight bookings</p>
                    </TableCell>
                    <TableCell>
                    <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                  <AccountBalanceWalletIcon fontSize="large" />
              </IconButton>
              <h3>LOWEST PRICE</h3>
              <p >We ensure low rates <br /> on flight bookings</p>
                    </TableCell>
                    <TableCell>
                    <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                  <HeadsetMicIcon fontSize="large" />
              </IconButton>
              <h3>24/7 SUPPORT</h3>
              <p >Get assistance 24/7 on any <br/>kind of travel related query. <br/>We are happy to assist you.</p>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
}
export default HomeComp;