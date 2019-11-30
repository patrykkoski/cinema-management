package pl.patrykkoski.Cinema.Management.users.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.patrykkoski.Cinema.Management.users.dto.JwtDTO;
import pl.patrykkoski.Cinema.Management.users.dto.UserLoginDTO;
import pl.patrykkoski.Cinema.Management.users.dto.UserRegisterDTO;
import pl.patrykkoski.Cinema.Management.users.entities.User;
import pl.patrykkoski.Cinema.Management.users.services.UserService;
import pl.patrykkoski.Cinema.Management.utils.JwtUtil;

/**
 * Rest Controller provides basic auth operations
 */
@RestController
@RequestMapping("public/auth")
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
    private JwtUtil jwtTokenUtil;

    /**
     * Method allows log in to system, generate and return jwt token.
     *
     * @param userLoginDTO
     * @return jwt token
     * @throws Exception
     */
    @PostMapping(value = "/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody UserLoginDTO userLoginDTO) throws Exception {

        final UserDetails userDetails = userDetailsService.loadUserByUsername(userLoginDTO.getUsername());
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(userDetails, userLoginDTO.getPassword(), userDetails.getAuthorities());
        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        if (usernamePasswordAuthenticationToken.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        }

        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtDTO(jwt));
    }

    /**
     * Method allows to register user.
     *
     * @param userRegisterDTO
     * @return status 200
     * @throws Exception
     */
    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterDTO userRegisterDTO) throws Exception {
        User user = new User();
        user.setUsername(userRegisterDTO.getUsername());
        user.setPassword(userRegisterDTO.getPassword());
        user.setFirstname(userRegisterDTO.getFirstname());
        user.setLastname(userRegisterDTO.getLastname());
        user.setEmail(userRegisterDTO.getEmail());

        userService.save(user);

        return ResponseEntity.ok().build();
    }

}
