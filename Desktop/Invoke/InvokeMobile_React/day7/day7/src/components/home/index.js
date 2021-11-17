import React from "react";
import { connect } from "react-redux"; 
import { addSubmit, addToDo } from "../../actions";
import { minusSubmit} from "../../actions";
import { toDel } from "../../actions";
import classes from "./home.module.css";


class Home extends React.Component{

    constructor(props){
        super(props)
            console.log("this is count",this.props.countData)
        
    }

    componentDidUpdate(prevProps){
        const {todo} = this.props;
        
        //!check todoData.isLoading' status

        if(prevProps.todo.isLoading && !todo.isLoading) {
            console.log('data updated');
        }
    }

    addCount(){
        this.props.addSubmit(2);
    }

    minusCount(){
        this.props.minusSubmit(-1);
    }

    toDoList(){

        const val = this._input.value ;
        if (val !== "") {
            const data = {
                todo: this._input.value,
                key: Date.now(),
            }
            //pass function
            this.props.addToDo(data)
        }
    }

    delete(val){
            console.log(val);
            this.props.toDel(val)
    }


    render() {
        return (
            <div className={classes.home_holder}>
                <div>
                <h1> This is Home</h1>
                <h1> Count: {this.props.countData} </h1>

                <button onClick={() =>this.addCount()}>Add</button>
                <button onClick={()=>this.minusCount()}>Reduces</button>
                <br/>


                {/* print input */}

                <input placeholder="To Do" ref={(a)=> this._input = a} />
                {
                    this.props.todo.isLoading ? (<p>Loading..</p>) 
                    : (<button onClick={() =>this.toDoList()}>Submit To Do</button>)
                }
                
                
                    { this.props.todo.data.map((list) => (
                        <div className={classes.list_key}>
                            <p>{list.todo}</p>
                            <p>{list.key}</p>
                            {/* <button onClick={()=>this.delete(list.key)}>To Delete</button> */}
                        </div>
                    ))}

                    
                    {/* Del input */}
                
                    { this.props.todo.data.map((list) => (
                        <button onClick={()=>this.delete(list.key)}>To Delete</button>
                    ))}
                </div>

                
                
            </div>
        );
    }
}




const mapStateToProps= (state) => ({
    countData: state.count,
    todo: state.todo,
    remove: state.remove,
    //left key from our function
    //right is the state from store
});

const mapDispatchToProps= {
    //component: action.
    addSubmit: addSubmit,
    minusSubmit: minusSubmit,
    addToDo: addToDo,
    toDel:toDel,
};


//we want to dispatch an action

export default connect(mapStateToProps,mapDispatchToProps)(Home);