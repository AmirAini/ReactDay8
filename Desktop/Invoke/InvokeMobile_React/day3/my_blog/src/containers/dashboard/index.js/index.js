import React from 'react';
import {products} from "../../../productData";
import classes from "./dashboard.module.css";
import Carlist from '../../../components/carlist';
import { Link } from "react-router-dom";
// import JSONDATA from "../../../productData";





class Dashboard extends React.Component { 

    constructor(props){
        super(props);
        this.state= {
            name:"",
        }
    }

    render(){
        console.log('Product data..', products);

        return(
            <div>

                <div className={classes.main_header}>
                <h1>Welcome Customer</h1>

                <input className={classes.dashboard_input} name="searchBar" placeholder="search for a car" onChange={(nameval) => {this.setState({name: nameval.target.value})}}/>
                <button><Link to="/create">Create New</Link></button>
                </div>

                
                {products.filter((val=>{
                    if(this.state.name ==""){
                        return val;
                    } else if (val.name.toLowerCase().includes(this.state.name)) {
                        return val;
                    }}
                ))
                .map(list => <Carlist 
                    carData={list} 
                    link={list.id} 
                    name={list.name} 
                    cost={list.cost} 
                    image={list.image} 
                    desc={list.short_description}/>)}
            </div>
            
        )
    }
}


export default Dashboard;