import React from "react";
import { connect } from "react-redux";
import {fetchMovieDetails} from "../../actions";
import classes from "./details.module.css";
import { Link } from "react-router-dom";

class Details extends React.Component{

    constructor(props){
        super(props);
        const urlParam = window.location.href;
        const urlSplit= urlParam.split('/');
        const id = urlSplit[urlSplit.length-1];
        console.log(id);
        

        this.state = {
            movieID : id,
            data: {},
        }
    }

    componentDidMount(){
        //!send to action
        this.props.onFetchMovieDetails(this.state.movieID)
        // console.log(this.state.data);
    }

    componentDidUpdate(prevProps) {
        const {movieDetailsData} = this.props;
        if(prevProps.movieDetailsData.isLoading && !movieDetailsData.isLoading){
            this.setState({data:movieDetailsData.data}, () => console.log('data123', this.state.data));
        }
    }

    render(){
        return(
            <div className={classes.details_holder}>
                <div className={classes.details_header}>
                    <h1>{this.state.data.Title}</h1>
                    <h1>({this.state.data.Year})</h1>

                </div>

                <div className={classes.details_container}>
                    <div className={classes.details_left}>
                        <img src={this.state.data.Poster} />
                        <div className={classes.details_casts}>
                            <h5>Casts:<br/>{this.state.data.Actors}</h5>
                        </div>
                    </div>
                
                    <div className={classes.details_right}>
                        <p><h4>Awards:</h4>{this.state.data.Awards}</p>
                        <p><h4>Plot:</h4>{this.state.data.Plot}</p>
                        <p><h4>Box Office:</h4>{this.state.data.BoxOffice}</p>
                        <p><h4>Country:</h4>{this.state.data.Country}</p>
                        <Link to="/"><button>Return</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    //
    movieDetailsData:state.movieDetails
})

const mapDispatchToProps={
    onFetchMovieDetails: fetchMovieDetails,
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);



