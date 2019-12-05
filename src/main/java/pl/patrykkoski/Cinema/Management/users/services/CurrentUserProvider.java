package pl.patrykkoski.Cinema.Management.users.services;

import pl.patrykkoski.Cinema.Management.users.dto.CurrentUserInfo;

public interface CurrentUserProvider {

    /**
     * Metoda zwracająca nazwę i rolę użytkownika.
     * @param token token jwt
     * @return nazwa i rola
     */
    CurrentUserInfo getCurrentUserInfo(String token);
}
