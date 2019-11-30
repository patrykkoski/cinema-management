package pl.patrykkoski.Cinema.Management.base.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class allows ping server as different roles
 */
@RestController
public class TickController {

    @PreAuthorize("hasRole('ROLE_USER')")
    @RequestMapping("/ping")
    public String ping() {
        return "OK";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/ping-admin")
    public String pingAdmin() {
        return "OK Admin";
    }
}

