import React from 'react';
import getMovies from '../../services/fakeMovieService';

import './MoviesList.scss';

class Movies extends React.Component {
   state = {
     movies: getMovies(),
   }

   handleDelete = (movie) => {
     // console.log(movie);
     const movies = this.state.movies.filter((m) => m.id !== movie.id);
     this.setState({ movies });
   }

   render() {
     const { length: count } = this.state.movies;
     if (count === 0) return <p>There are no movies in the database.</p>;
     return (
            <div>
              <p>Showing <strong>{count}</strong> movies in the database.</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movies.map((movie) => (<tr key={movie.id}>
                  <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}>Delete</button>
                    </td>
                  </tr>))}
                </tbody>
              </table>
            </div>
     );
   }
}

export default Movies;
