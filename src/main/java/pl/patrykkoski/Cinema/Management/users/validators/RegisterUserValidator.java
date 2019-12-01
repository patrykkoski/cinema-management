package pl.patrykkoski.Cinema.Management.users.validators;

import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.patrykkoski.Cinema.Management.users.dto.UserRegisterDTO;
import pl.patrykkoski.Cinema.Management.users.exceptions.InvalidUserRegisterException;
import pl.patrykkoski.Cinema.Management.users.services.UserService;

@Component
public class RegisterUserValidator{

    @Autowired
    private UserService userService;

    public void validate(UserRegisterDTO userRegisterDTO) throws InvalidUserRegisterException {
        if(Strings.isNullOrEmpty(userRegisterDTO.getFirstname())) {
            throw new InvalidUserRegisterException("First Name cannot be empty");
        }
        if(Strings.isNullOrEmpty(userRegisterDTO.getLastname())) {
            throw new InvalidUserRegisterException("Last Name cannot be empty");
        }
        if(Strings.isNullOrEmpty(userRegisterDTO.getEmail())) {
            throw new InvalidUserRegisterException("Email cannot be empty");
        }
        if(Strings.isNullOrEmpty(userRegisterDTO.getUsername())) {
            throw new InvalidUserRegisterException("Username cannot be empty");
        }
        if(Strings.isNullOrEmpty(userRegisterDTO.getPassword())) {
            throw new InvalidUserRegisterException("Password cannot be empty");
        }
        if(userRegisterDTO.getUsername().length() < 5) {
            throw new InvalidUserRegisterException("Username should contains minimum 6 characters.");
        }
        if(userRegisterDTO.getPassword().length() < 5) {
            throw new InvalidUserRegisterException("Username should contains minimum 6 characters.");
        }
        if(userService.findByUsername(userRegisterDTO.getUsername()) != null) {
            throw new InvalidUserRegisterException("Username already used.");
        }
    }
}
