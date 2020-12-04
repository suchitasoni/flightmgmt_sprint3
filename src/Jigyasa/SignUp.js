import axios from "axios";
import React, { Component } from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      mobileNumber: "",
      emailid: "",
      password: "",
      userId: '',
      userType:'user',
    };
    this.onChangeCtrl = this.onChangeCtrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCtrl(event) {
    var cname = event.target.name;
    var cval = event.target.value;
    this.setState({ [cname]: cval });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    var user ={
      userName:this.state.userName,
      mobileNumber:this.state.mobileNumber,
      emailid:this.state.emailid,
      password:this.state.password,
      userType:this.state.userType
    }
    let a = JSON.stringify(user);
    console.log(a);
    const resp = await axios.post(
      "http://localhost:8070/user/newuser",
      user
    );
    this.setState({ userId: resp.data.userId });
  };

  render() {
    return (
      <center>
      <div style={{backgroundColor:"lightyellow"}}>
          <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <table className="table table-bordered">
            <tr>
              <td>
                <span className="badge badge-secondary">User Name</span>
              </td>
              <td>
                <input
                  type="text"
                  name="userName"
                  required="true"
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-secondary">Password</span>
              </td>
              <td>
                <input
                  type="text"
                  name="password"
                  required="true"
                  onChange={this.onChangeCtrl}
                  />
              </td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-secondary">Email Id</span>
              </td>
              <td>
                <input
                  type="text"
                  name="emailid"
                  required="true"
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-secondary">Mobile</span>
              </td>
              <td>
                <input
                  type="text"
                  name="mobileNumber"
                  required="true"
                  onChange={this.onChangeCtrl}
                />
              </td>
            </tr>
           <tr>
              <td>
                <input type="submit" className="btn btn-success" value="Submit" />
              </td>
              <td>
                <input type="reset" name="btn btn-danger" value="Cancel" />
              </td>
            </tr>
            <p className="forgot-password text-right">
                    Already registered? <a href="./Login" >Login</a>
                </p>
          </table>
        </form>
        <br />
        <br />
      </div>
      </center>
    );
  }
}


// class User {
//   constructor(userName, mobileNumber, emailid, password) {
//     this.userName = userName;
//     this.mobileNumber = mobileNumber;
//     this.emailid = emailid;
//     this.password = password;
//   }
// }

export default SignUp;
