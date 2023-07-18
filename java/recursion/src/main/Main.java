package main;

public class Main {
	public static void main(String[] args) {
		for (int i = 0; i < 10; i++) {
			System.out.println(fib(1, 1, i));
		}
		System.out.println(revert("supercalifrasticoespialidoso"));
	}

	public static int fib(int num1, int num2, int max) {
		if (max <= 0) {
			return num1;
		}
		return fib(num2, num1 + num2, max - 1);
	}

	public static String revert(String str) {
		if (str.length() > 1) {
			return revert(str.substring(1, str.length())) + str.substring(0, 1);
		}
		return str;
	}
}