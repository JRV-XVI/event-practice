package com.practice.backend.classes;

public class Battle {
    private Entity player1;
    private Entity player2;
    private String status; // "ongoing", "finished", etc.

    public Battle() {}

    public Battle(Entity player1, Entity player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    public Entity getPlayer1() { return player1; }
    public void setPlayer1(Entity player1) { this.player1 = player1; }

    public Entity getPlayer2() { return player2; }
    public void setPlayer2(Entity player2) { this.player2 = player2; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}