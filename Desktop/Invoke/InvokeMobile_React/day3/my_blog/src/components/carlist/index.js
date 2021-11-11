import React from 'react';
import classes from "./carlist.module.css";
import {Link} from "react-router-dom";


// images
// import pic1 from "../../assets/product_img/pic1.jpg";

class Carlist extends React.Component {
    render(){
        return(
            <div>
                    <div className={classes.carlist_header}>
                    <img src={this.props.image} alt="" className={classes.carlist_image}></img>
                        <div className={classes.carlist_info}>
                            <h1>Car Name: {this.props.name}</h1>
                            <p>Car Price: USD{this.props.cost}</p>
                        </div>
                        <div className={classes.carlist_desc}>
                            <h3>Car Description:</h3>
                            <p>{this.props.desc}</p>
                            <button>
                            {/* <Link to={`/dashboard/${this.props.link}`}>buy</Link> */}

                            <Link to={{ 
                                pathname:`/dashboard/${this.props.link}`,
                                state: this.props.carData,
                            }}>Buy</Link>
                            </button>
                        </div>
                        
                        </div>
                        
                </div>
        )
    }
}

export default Carlist