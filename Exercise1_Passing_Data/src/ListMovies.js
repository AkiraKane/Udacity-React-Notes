import React, { Component } from "react"
import MovieInfo from "./MovieInfo"


class ListMovies extends Component{
  
	render(){
        const { users, movies, usersByMovie} = this.props

        const movieLists = Object.keys(usersByMovie).map(id => (	
          <MovieInfo 
          key={id} 
          users={users} 
  		  usersWhoLikedMovie={usersByMovie[id]} 
		  movieInfo={movies[id]}
		  />
        ))
		
		return (<ul>{movieLists}</ul>)
}

}

export default ListMovies
  