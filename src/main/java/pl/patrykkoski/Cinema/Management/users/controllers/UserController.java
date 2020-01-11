package pl.patrykkoski.Cinema.Management.users.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.patrykkoski.Cinema.Management.users.dto.ChangePasswordDTO;
import pl.patrykkoski.Cinema.Management.users.dto.JwtDTO;
import pl.patrykkoski.Cinema.Management.users.dto.UserLoginDTO;
import pl.patrykkoski.Cinema.Management.users.dto.UserRegisterDTO;
import pl.patrykkoski.Cinema.Management.base.dto.VndErrorDTO;
import pl.patrykkoski.Cinema.Management.users.entities.Role;
import pl.patrykkoski.Cinema.Management.users.entities.User;
import pl.patrykkoski.Cinema.Management.users.exceptions.InvalidUserRegisterException;
import pl.patrykkoski.Cinema.Management.users.services.UserService;
import pl.patrykkoski.Cinema.Management.users.validators.RegisterUserValidator;
import pl.patrykkoski.Cinema.Management.utils.JwtUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Rest Controller provides basic auth operations
 */
@RestController
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private RegisterUserValidator registerUserValidator;

    @Autowired
    private JwtUtil jwtTokenUtil;

    /**
     * Method allows log in to system, generate and return jwt token.
     *
     * @param userLoginDTO
     * @return jwt token
     * @throws Exception
     */
    @PostMapping(value = "public/auth/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody UserLoginDTO userLoginDTO) {

        final UserDetails userDetails = userDetailsService.loadUserByUsername(userLoginDTO.getUsername());
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(userDetails, userLoginDTO.getPassword(), userDetails.getAuthorities());
        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        if (usernamePasswordAuthenticationToken.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        }
        List<Long> roleList = userService.getUserRole(userService.findByUsername(userLoginDTO.getUsername()));

        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtDTO(jwt, roleList.get(0)));
    }

    /**
     * Method allows to register user.
     *
     * @param userRegisterDTO
     * @return status 200
     * @throws Exception
     */
    @PostMapping(value = "public/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterDTO userRegisterDTO) throws Exception {

        try {
            registerUserValidator.validate(userRegisterDTO);
            User user = new User();
            user.setUsername(userRegisterDTO.getUsername());
            user.setPassword(userRegisterDTO.getPassword());
            user.setFirstname(userRegisterDTO.getFirstname());
            user.setLastname(userRegisterDTO.getLastname());
            user.setEmail(userRegisterDTO.getEmail());

            userService.save(user);
        } catch (InvalidUserRegisterException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new VndErrorDTO(userRegisterDTO.getUsername(), e.getMessage()));
        }

        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "user/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordDTO changePasswordDTO) {
        User user = userService.findByUsername(changePasswordDTO.getUserName());
        if (bCryptPasswordEncoder.matches(changePasswordDTO.getOldPassword(), user.getPassword())) {
            user.setPassword(changePasswordDTO.getNewPassword());
            userService.save(user);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Incorrect Password");
    }
}
