package pl.patrykkoski.Cinema.Management.movies.Services;

import pl.patrykkoski.Cinema.Management.movies.entities.Movie;

import java.util.List;

public interface MovieService {

    List<Movie> findAll();

    List<Movie> findByCategory(String category);

    List<Movie> findByTitle(String title);

    List<Movie> findLastMovies();

    void save(Movie movie);
}
