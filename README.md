# MOVIE-RENTAL-API

## Movie Class
- Represents a movie with properties id(unique identifier), title and genre.
- Used to create instances of movies in the Movie Rental API.

## Rental Class
- Represents a rental transaction with properties movieId, rentedAt(rental start date),
and returnedAt(rental return date).
- Default values are set for rentedAt(current date) and returnedAt(null) to simplify rental creation.

## MovieRentalAPI Class
- Manages the Movie Rental System.
- Keeps track of movies and rental transactions
- Methods include:
    - getAllMovies(): Retrieves a list of all movies.
    - rentMovie(movieId, userId): Rents a movie to a user  and adds a rental entry.
    - returnMovie(rentalId): Processes the return of a rented movie and updates the rental entry.

## Example Usage
- Demonstrates the usage of the MovieRentalAPI with adding movies, renting a movie, returning a rented movie and retrieving all movies.
