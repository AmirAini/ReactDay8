import React from 'react';
import classes from "./details.module.css";


class Details extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data: this.props.location.state
        }
        console.log("details", props.location.state);
        
    }
    render() {
        return (
            <div className={classes.details_holder}>
                <div className={classes.product_img}></div>
                <div className={classes.detail_left}>
                    <h2>Car Name: {this.state.data.name}</h2>
                    <h5>The Cost: USD{this.state.data.cost} </h5>
                    <h3>Short Desc:</h3>
                    <h4>{this.state.data.short_description} </h4>
                    <button>Buy Now</button>
                </div>
                
                <div className={classes.detail_right}>
                <h2>The Specifications</h2>
                <ul>{this.state.data.bullet_description.map(bullet=><li>{bullet}</li>)} </ul>
                </div>
                
            </div>
        )
    }
}

export default Details;