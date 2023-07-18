package main;

public class Main {
	public static void main(String[] args) {
		Card visa = new Card();
		if (visa.buy(250)) {
			System.out.println("Transaction succesful");
		} else {
			System.out.println("Transaction failed");
		}

		if (visa.buy(1000)) {
			System.out.println("Transaction succesful");
		} else {
			System.out.println("Transaction failed");
		}
	}
}