import React from "react";
import classes from "./home.module.css";
import MovieCard from "../../components/movieCard";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions";

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
        movieList:[],
        }
    }

    componentDidUpdate(prevProps){
        const {movieData} = this.props;
        if(prevProps.movieData.isLoading && !movieData.isLoading){
            //check the changes
            this.setState({movieList: movieData.data.Search});
        }
    }

    movieSubmit(){

        
        const inputVal = this._inputEle.value;
        if(this._inputEle.value != ''){
            this.props.onFetchMovie(inputVal)
            this._inputEle.value='';
        }
    }

    render(){
        return(
            <div className={classes.home_holder}>
                <h1>Welcome</h1>
                <div>
                    <input placeholder="search movie here" ref={(a)=> (this._inputEle =a)} />
                    <button onClick={()=> this.movieSubmit()}>Submit</button>
                </div>

                <div className={classes.details_container}>
                    {this.state.movieList.map(
                        list => <MovieCard 
                        id={list.imdbID}
                        title={list.Title} 
                        poster = {list.Poster} 
                        year = {list.Year} 
                        type={list.Type} />)}
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        //reducer
        movieData:state.movie
    })

}

const mapDispatchToProps = {
    //object key : action index 
    onFetchMovie: fetchMovie
}

export default connect(mapStateToProps,mapDispatchToProps )(Home);