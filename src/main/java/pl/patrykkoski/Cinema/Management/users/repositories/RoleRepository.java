package pl.patrykkoski.Cinema.Management.users.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.patrykkoski.Cinema.Management.users.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
