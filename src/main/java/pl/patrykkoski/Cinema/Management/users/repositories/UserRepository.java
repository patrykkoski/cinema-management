package pl.patrykkoski.Cinema.Management.users.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.patrykkoski.Cinema.Management.users.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
