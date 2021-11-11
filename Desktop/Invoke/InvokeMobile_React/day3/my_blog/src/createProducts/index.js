import React from 'react';
import { products } from '../productData';
import classes from "./create.module.css";

class CreateProduct extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            cost: 0,
        }
    }

    submitForm (){
        
        //empty
        if (this.state.id=="" | this.state.name=="" | this.state.description=="" | this.state.cost=="") {
            alert('data input incorrectly')
        } 
        
        //not empty
        if (!this.state.id=="" | !this.state.name=="" | !this.state.description=="" | !this.state.cost=="") {
            
            console.log(products);
            const found = products.find(({id}) => id == this.state.id);
            // console.log(found);
            // console.log(found[Object.keys(found)[0]]);

            if (found == undefined ){
                products.push(this.state);
                console.log(products);
                alert('data pushed');
                return;

            }else  {
                alert('duplicate ID');
                return;
            }
        }
        
        //!array function find()
        
    }

    render(){
        return(
            <div className={classes.create_holder}>
                <h4> To create a new entry please fill in details below </h4>
                <form action="#">

                    <br/>
                    <br/>
                    <lable htmlFor='id'>ID</lable>
                    <input id="id" placeholder="ID" onChange={(idval) => {this.setState({id: idval.target.value});
                    }}/>

                    <br/>
                    <br/>
                    <lable htmlfor='name'>Name</lable>
                    <input text="text" placeholder="name" onChange={(nameval) => {this.setState({name: nameval.target.value})}}/>
                    <br/>
                    <br/>
                    <lable htmlFor="desc">Description</lable>
                    <input type="text" id="desc" placeholder="description" onChange={(descriptionval) => {this.setState({description: descriptionval.target.value})}}/>
                    <br/>
                    <br/>
                    <lable htmlFor="cost">Cost</lable>
                    <input placeholder="cost" onChange={(costval) => {this.setState({cost: costval.target.value})}}/>
                    
                    <button onClick={() =>{this.submitForm()}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateProduct;