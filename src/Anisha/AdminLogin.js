import React from 'react';
import axios from 'axios'
class AdminLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId:"",
            password:""
            // element: <div></div>
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
}

changeHandler(e){
    this.setState({
        [e.target.name]: e.target.value
    });
}

submitHandler(e){
    e.preventDefault()
    console.log("chal rha h");
    //this.props.fetchAdmin(this.state)
    axios.post('http://localhost:8080//user/validateAdmin',this.state)
    .then(res=>{console.log(res)
        if(res.status===200)
        console.log("valid admin");})
        .catch(error => {
            console.log("Invalid admin");
        })

}

    render(){
        return(
            <center>
                <form class="text-center border border-light p-5 w-50 h-60" action="#!">

                    <p class="h4 mb-4">Sign in</p>

                    <input type="number" id="defaultLoginFormEmail" name="userId" class="form-control mb-4" placeholder="User Id" onChange={this.changeHandler}/>

                    <input type="password" id="defaultLoginFormPassword" name="password" class="form-control mb-4" placeholder="Password" onChange={this.changeHandler}/>

                    <div class="d-flex justify-content-around">
                        <div>
                    
                            <a href="">Forgot password?</a>
                        </div>
                    </div>


                    <button class="btn btn-info btn-block my-4" type="button" onClick={this.submitHandler}>Sign in</button>

                    </form>
                                    
             </center>
        );
    }
}

export default AdminLogin;

// const mapStateToProps = state => {
//     return {
//         adminData: state
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAdmin: ({email, password}) => dispatch(fetchFlights({email, password}))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(AdminLogin);