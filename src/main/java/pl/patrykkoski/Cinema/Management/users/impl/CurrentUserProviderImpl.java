package pl.patrykkoski.Cinema.Management.users.impl;

import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.patrykkoski.Cinema.Management.users.dto.CurrentUserInfo;
import pl.patrykkoski.Cinema.Management.users.services.CurrentUserProvider;
import pl.patrykkoski.Cinema.Management.users.services.UserService;
import pl.patrykkoski.Cinema.Management.utils.JwtUtil;

import javax.servlet.http.HttpServletRequest;

@Service
public class CurrentUserProviderImpl implements CurrentUserProvider {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @Override
    public CurrentUserInfo getCurrentUserInfo(String token) {

        String jwtToken = "";
        String username = "";
        if(!Strings.isNullOrEmpty(token)) {
            jwtToken = token.substring(7);
            username = jwtTokenUtil.extractUsername(jwtToken);
        }

        long roleId = userService.getUserRole(userService.findByUsername(username)).get(0);
        return new CurrentUserInfo(username, roleId);
    }
}
