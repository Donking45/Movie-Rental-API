class Movie {
    constructor(id, title, genre) {
      this.id = id;
      this.title = title;
      this.genre = genre;
    }
  }
  
  class Rental {
    constructor(movieId, userId, rentedAt, returnedAt) {
      this.movieId = movieId;
      this.userId = userId;
      this.rentedAt = rentedAt || new Date();
      this.returnedAt = returnedAt || null;
    }
  }
  
  class MovieRentalAPI {
    constructor() {
      this.movies = [];
      this.rentals = [];
    }
  
    getAllMovies() {
      return this.movies;
    }
  
    rentMovie(movieId, userId) {
      const movie = this.movies.find((m) => m.id === movieId);
  
      if (!movie) {
        return 'Movie not found';
      }
  
      const rental = new Rental(movieId, userId);
      this.rentals.push(rental);
  
      return rental;
    }
  
    returnMovie(rentalId) {
      const rental = this.rentals.find((r) => r.movieId === rentalId);
  
      if (!rental) {
        return 'Rental not found';
      }
  
      rental.returnedAt = new Date();
      return rental;
    }
  }
  
  // Example Usage
  
  const movieRentalAPI = new MovieRentalAPI();
  
  // Add movies
  movieRentalAPI.movies.push(new Movie(1, 'A Tribe Called Judah', 'Action'));
  movieRentalAPI.movies.push(new Movie(2, 'Greys Anatomy', 'Medical Fiction'));
  
  // Rent a movie
  const rental1 = movieRentalAPI.rentMovie(1, 'user1');
  console.log('Rental 1:', rental1);
  
  // Return a movie
  const returnResult = movieRentalAPI.returnMovie(1);
  console.log('Return Result for Rental 1:', returnResult);
  
  // Get all movies
  const allMovies = movieRentalAPI.getAllMovies();
  console.log('All Movies:', allMovies);
  