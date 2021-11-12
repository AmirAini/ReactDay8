import React from 'react';
import classes from "./login.module.css";
import Header from '../../components/header';

import { Link } from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
            <div className={classes.login_holder}>
                {/* <Header /> */}
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password" type="password"/>
                
                <button>
                    <Link to="/dashboard">Submit Login</Link>
                </button>

            </div>
        )
    }
}

export default Login;