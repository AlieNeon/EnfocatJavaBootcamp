package main;

public class Card {
	private int credit;
	private int maxCredit;
	private boolean active;

	public Card(int maxCredit, boolean active) {
		this.maxCredit = maxCredit;
		this.credit = maxCredit;
		this.active = active;
	}

	public Card() {
		this.maxCredit = 1000;
		this.credit = 1000;
		this.active = true;
	}

	/**
	 * buy
	 * Checks if a purchase can be done and substracts the cradit from the purchase
	 * if succesful
	 * 
	 * @param price the price of the purchase
	 * @return if the purchase was succesful
	 */
	public boolean buy(int price) {
		if (this.active && this.credit > price) {
			this.credit -= price;
			return true;
		}
		return false;
	}

	public void recharge(int money) {
		if (this.credit + money <= this.maxCredit) {
			this.credit += money;
		}
	}
}