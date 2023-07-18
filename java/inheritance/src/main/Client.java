package java.inheritance.src.main;

/**
 * Client
 */
public class Client extends Person {
	private String category;
	private String code;

	public void generateCode() {
		this.code = "THIS SHOULD BE RANDOM UUID";
	}
}