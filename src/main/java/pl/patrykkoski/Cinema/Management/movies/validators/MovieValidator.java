package pl.patrykkoski.Cinema.Management.movies.validators;

import com.google.common.base.Strings;
import org.springframework.stereotype.Component;
import pl.patrykkoski.Cinema.Management.movies.dto.MovieDTO;
import pl.patrykkoski.Cinema.Management.movies.exceptions.InvalidMovieException;

@Component
public class MovieValidator {

    public void validate(MovieDTO movieDTO) throws InvalidMovieException {
        if(Strings.isNullOrEmpty(movieDTO.getTitle())) {
            throw new InvalidMovieException("Title cannot be empty");
        }
        if(Strings.isNullOrEmpty(movieDTO.getDescription())) {
            throw new InvalidMovieException("Description cannot be empty");
        }
        if(Strings.isNullOrEmpty(movieDTO.getCategory())) {
            throw new InvalidMovieException("Category cannot be empty");
        }
        if(Strings.isNullOrEmpty(movieDTO.getDirector())) {
            throw new InvalidMovieException("Director cannot be empty");
        }
    }
}
