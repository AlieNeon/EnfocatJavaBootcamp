import java.io.IOException;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) throws IOException {
		final String[] NUM_TO_STR = {"Zero", "Uno", "Dos", "Tres", "Quatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"};
		Scanner input = new Scanner(System.in);
		System.out.println("Input a number: ");
		int num = input.nextInt();
		System.out.println(NUM_TO_STR[num]);
		input.close();
	}
}
