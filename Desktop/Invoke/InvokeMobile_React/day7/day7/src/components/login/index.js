import React from "react";
import { connect } from 'react-redux';
import classes from './login.module.css';

class Login extends React.Component{

    authCheck(){
        console.log(this.props.regUser.data);
        let userNameL = this.authName.value;
        let emailL = this.authEmail.value;

        this.props.regUser.data.map((check)=> {
            console.log(check.name)
            console.log(check.email);
            console.log(emailL);
            console.log(userNameL);
            
            
            if (check.name == userNameL && check.email == emailL) {
                alert('welcome back user')
                window.location.href = "http://localhost:3000/home";
            } else {
                alert('invalid username or password')
            }
        })
    }
    
    render(){
        return(
            <div className={classes.login_holder}>
                <h1> Welcome back user </h1>
                <input placeholder="your username" ref={(a)=> this.authName = a}/>
                <input placeholder="your email" ref={(a)=> this.authEmail = a}/>
                <br/>
                <br/>
                <button onClick={()=>this.authCheck()}>Log in</button>
            </div>
        )
    }
}

//pull from store component
const mapStateToProps= (state) => ({
    regUser:state.regUser
});

//push
const mapDispatchToProps= {
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);