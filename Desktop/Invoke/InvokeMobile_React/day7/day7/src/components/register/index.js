import React from "react";
import classes from "./login.module.css";
import { regUser } from "../../actions";
import { connect } from "react-redux"; 
import {Link} from "react-router-dom";

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username:"",
            email: "",
        }
    }

    newUser(){
        console.log(this.props.regUser);
        
        let userName = this.name.value
        let email = this.email.value
        if(userName !== "" && email !=="" )
        {
            alert(`username is ${userName} and email is ${email}`)
            const data = {
                name: this.name.value,
                email: this.email.value
        }
        //send to action
        this.props.regUser(data);
        } else {
            alert('Input error')
        }
        
        
    }

    // componentDidUpdate(prevProps){
    //     const {regUser} = this.props;
    //     if(prevProps.regUser.isLoading && !regUser.isLoading) {
    //         console.log('data updated');
    //     }
    // }

    render(){
        return(
            <div className={classes.login_holder}>
                <h1>Register Here</h1>
                <div className={classes.login_form}>

                    <h3>Enter Username</h3>
                    <input placeholder="Put Username" name="username" ref={(a)=> this.name = a}/>

                    <h3>Enter Email</h3>
                    <input placeholder="Put email" name="email" ref={(a)=> this.email = a}/>
                    <br/><br/>
                
                {
                    this.props.regUser.isLoading ? (<p>Loading..</p>) 
                    : (<button onClick={()=>this.newUser()}>submit user</button>)
                }
                
                <br/>
                <br/>
                <Link to="/login"><button>To Login</button></Link>

                </div>
            </div>
        )
    }
}

const mapStateToProps= (state) => ({
    regUser:state.regUser
});

const mapDispatchToProps= {
    //component: action.
    regUser:regUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);