package pl.patrykkoski.Cinema.Management.movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.patrykkoski.Cinema.Management.movies.entities.Movie;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByTitle(String title);

    List<Movie> findByCategory(String title);
}
