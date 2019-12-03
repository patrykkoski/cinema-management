package pl.patrykkoski.Cinema.Management.users.dto;

public class JwtDTO {

    private final String jwt;
    private final Long roleId;

    public JwtDTO(String jwt, Long roleId) {
        this.jwt = jwt;
        this.roleId = roleId;
    }

    public String getJwt() {
        return jwt;
    }

    public Long getRoleId() {
        return roleId;
    }
}
