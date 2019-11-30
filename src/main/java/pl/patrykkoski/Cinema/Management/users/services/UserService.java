package pl.patrykkoski.Cinema.Management.users.services;

import pl.patrykkoski.Cinema.Management.users.entities.User;

public interface UserService {

    void save(User user);

    User findByUsername(String username);
}
