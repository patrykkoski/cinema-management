package pl.patrykkoski.Cinema.Management.users.dto;

public class JwtDTO {

    private final String jwt;

    public JwtDTO(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}
