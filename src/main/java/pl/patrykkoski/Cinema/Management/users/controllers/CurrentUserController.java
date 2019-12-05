package pl.patrykkoski.Cinema.Management.users.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.patrykkoski.Cinema.Management.users.services.CurrentUserProvider;
import pl.patrykkoski.Cinema.Management.utils.JwtUtil;

import javax.servlet.http.HttpServletRequest;

@RestController
public class CurrentUserController {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private CurrentUserProvider currentUserProvider;

    @GetMapping(value = "/current")
    public ResponseEntity<?> getCurrentUser() throws Exception {
        return ResponseEntity.ok().body(currentUserProvider.getCurrentUserInfo(getToken()));
    }

    private String getToken() {
        return request.getHeader("Authorization");
    }
}
