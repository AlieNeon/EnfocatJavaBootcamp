package src.main;
public class Main {
  public static void main(String[] args) {
    System.out.println(tree(10));
  }

  static String tree(int height) {
    String tree_str = "";

    for (int i = 0; i < height; i++) {
      for (int j = 0; j < height - i; j++) {
        tree_str += " ";
      }
      for (int j = 0; j < i; j++) {
        tree_str += "**";
      }
      tree_str += "\n";
    }
    for (int i = 0; i < 2; i++) {
      for (int j = 0; j < height - 2; j++) {
        tree_str += " ";
      }
      tree_str += "****\n";
    }

    return tree_str;
  }
}
