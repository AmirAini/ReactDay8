import React from "react";
import classes from "./moviecard.module.css";
import {Link} from "react-router-dom";

class MovieCard extends React.Component{
    render(){
        return (
            <Link className={classes.movie_holder} to={{ pathname:`/details/${this.props.id}` }}>
                <img src={this.props.poster} alt="" className={classes.img_holder}/>
                <div className={classes.movie_text}>
                    <div className={classes.movie_h1}>
                        <h3>Movie Title: {this.props.title}</h3>
                    </div>
                    <div>
                        <p>Year:{this.props.year}</p>
                        <p>Type: {this.props.type}</p>
                    </div>
                    
                </div>
            </Link>
        )
    }
}

export default MovieCard;