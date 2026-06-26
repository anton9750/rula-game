// game-core/src/main/java/com/rune3d/core/entities/Player.java
// Player entity

public class Player {
  private String name;
  public Player(String name) { this.name = name; }
  public void move() { System.out.println("Player moved: " + name); }
}
