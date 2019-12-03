package pl.patrykkoski.Cinema.Management.users.services;

import pl.patrykkoski.Cinema.Management.users.entities.Role;
import pl.patrykkoski.Cinema.Management.users.entities.User;

import java.util.List;

public interface UserService {

    void save(User user);

    User findByUsername(String username);

    List<Long> getUserRole(User user);
}
