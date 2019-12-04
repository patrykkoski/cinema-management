package pl.patrykkoski.Cinema.Management.movies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.patrykkoski.Cinema.Management.base.dto.VndErrorDTO;
import pl.patrykkoski.Cinema.Management.movies.Services.MovieService;
import pl.patrykkoski.Cinema.Management.movies.dto.MovieDTO;
import pl.patrykkoski.Cinema.Management.movies.entities.Movie;
import pl.patrykkoski.Cinema.Management.movies.exceptions.InvalidMovieException;
import pl.patrykkoski.Cinema.Management.movies.validators.MovieValidator;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private MovieValidator movieValidator;

    @GetMapping("/public/lastMovies")
    public List<Movie> getLastMovies() {

        return movieService.findLastMovies();
    }

    @GetMapping("/movies/all")
    public List<Movie> getAllMovies() {
        return movieService.findAll();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/movies")
    public ResponseEntity<?> saveMovie(@RequestBody MovieDTO movieDTO) {
        try {
            movieValidator.validate(movieDTO);
            Movie movie = new Movie();
            movie.setTitle(movieDTO.getTitle());
            movie.setDescription(movieDTO.getDescription());
            movie.setDirector(movieDTO.getDirector());
            movie.setCategory(movieDTO.getCategory());
            movie.setImageurl(movieDTO.getImageUrl());
            movie.setDuration(movieDTO.getDuration());

            movieService.save(movie);
        } catch (InvalidMovieException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new VndErrorDTO(movieDTO.getTitle(), e.getMessage()));
        }
        return ResponseEntity.ok().body("Movie saved.");
    }
}
