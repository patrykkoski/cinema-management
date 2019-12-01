package pl.patrykkoski.Cinema.Management.movies.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.patrykkoski.Cinema.Management.movies.Services.MovieService;
import pl.patrykkoski.Cinema.Management.movies.entities.Movie;
import pl.patrykkoski.Cinema.Management.movies.repositories.MovieRepository;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Override
    public List<Movie> findByCategory(String category) {
        return movieRepository.findByCategory(category);
    }

    @Override
    public List<Movie> findByTitle(String title) {
        return movieRepository.findByTitle(title);
    }

    @Override
    public void save(Movie movie) {
        movieRepository.save(movie);
    }
}
