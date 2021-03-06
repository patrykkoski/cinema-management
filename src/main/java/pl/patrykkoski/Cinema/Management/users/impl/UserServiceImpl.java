package pl.patrykkoski.Cinema.Management.users.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pl.patrykkoski.Cinema.Management.users.entities.Role;
import pl.patrykkoski.Cinema.Management.users.entities.User;
import pl.patrykkoski.Cinema.Management.users.repositories.RoleRepository;
import pl.patrykkoski.Cinema.Management.users.repositories.UserRepository;
import pl.patrykkoski.Cinema.Management.users.services.UserService;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        Set<Role> roleSet = new HashSet<>();
        roleSet.add(roleRepository.findById(2l).get());
        user.setRoles(roleSet);
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findById(long id) {
        return userRepository.findById(id);
    }

    @Override
    public List<Long> getUserRole(User user) {
        return entityManager.createQuery("select role.id from Role role join role.users user where user.id=:uid")
                .setParameter("uid", user.getId()).getResultList();
    }
}
