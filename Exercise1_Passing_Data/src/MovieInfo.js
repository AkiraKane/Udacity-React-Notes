import React, { Component } from "react"

class MovieInfo extends Component {
  
	render(){
    	
      const { users, usersWhoLikedMovie, movieInfo } = this.props
      
      return (
        <li key={movieInfo.id}>
      		<h2>{movieInfo.name}</h2>
			<p>Liked By:</p>
        	{!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? 
            	<p>None of the current users liked this movie</p> :             	
             		<ul>
             			{usersWhoLikedMovie && usersWhoLikedMovie.map(userId => (
  						<li key={userId}>
							{users[userId].name}
						</li>
                        ))}
                    </ul>
            }
      
  		</li>
      )
    
    }
}

export default MovieInfo