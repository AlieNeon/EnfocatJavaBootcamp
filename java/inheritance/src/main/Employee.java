package java.inheritance.src.main;

/**
 * Employee
 */
public class Employee extends Person {
	private String contract;
	private int salary;

	public void calculateSalary() {
		this.salary = 1500;
	}
}