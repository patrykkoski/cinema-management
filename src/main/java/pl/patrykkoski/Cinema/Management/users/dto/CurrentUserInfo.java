package pl.patrykkoski.Cinema.Management.users.dto;

public class CurrentUserInfo {

    private String username;

    private long role;

    public CurrentUserInfo() {
    }

    public CurrentUserInfo(String username, long role) {
        this.username = username;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getRole() {
        return role;
    }

    public void setRole(long role) {
        this.role = role;
    }
}
