package pl.patrykkoski.Cinema.Management.base.dto;

/**
 * Dane błędu dla warstwy transportowej.
 */
public class VndErrorDTO {

    private String logref;
    private String message;

    /**
     * Konstruktor.
     * @param logref referencja do logów
     * @param message wiadomość
     */
    public VndErrorDTO(String logref, String message) {
        this.logref = logref;
        this.message = message;
    }

    public String getLogref() {
        return logref;
    }

    public void setLogref(String logref) {
        this.logref = logref;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
