import React from 'react';
import classes from "./header.module.css";
import {Link} from "react-router-dom";
import pic1 from "../../assets/pic2.jpg"

class Header extends React.Component {
    render(){
        return(
            <div className={classes.header_holder}>
                <Link to="/dashboard"><img src={pic1} alt="" className={classes.header_img}></img> </Link>
            </div>
        )
    }
}

export default Header;