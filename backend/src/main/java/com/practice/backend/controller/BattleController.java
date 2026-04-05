package com.practice.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.practice.backend.classes.Entity;
import com.practice.backend.classes.Battle;
import com.practice.backend.service.BattleConsultService;
import com.practice.backend.service.BattleService;
import com.practice.backend.service.BattleSave;

@RestController
public class BattleController {
    @Autowired
    private BattleService battleService;
    @GetMapping("/battle/stream")
    public SseEmitter streamBattle() {
        return battleService.addClienEmitter();
    }

    @Autowired
    private BattleConsultService battleConsultService;
    @GetMapping("/battle/status")
    public Battle getBattleStatus() throws Exception {
        return battleConsultService.getEntitiesHealth();
    }

    @Autowired
    private BattleSave battleSave;
    @GetMapping("/battle/test")
    public String saveBattle() {
        // Aquí puedes crear tus entidades de batalla con los datos que quieras
        // Por ejemplo, podrías crear dos entidades con vida inicial de 100
        // y luego llamar a battleSave.saveBattle(player1, player2);
        Entity player1 = new Entity("Pikachu", "Electric", 100);
        player1.setHealth("100");
        
        Entity player2 = new Entity("Charmander", "Fire", 100);
        player2.setHealth("100");
        
        return battleSave.saveBattle(player1, player2);
    }

    @PostMapping("/battle/setup")
    public String setupBattle(
            @RequestParam String player1Name,
            @RequestParam String player1Type,
            @RequestParam(defaultValue = "50") int player1Level,
            @RequestParam(defaultValue = "100") String player1Health,
            @RequestParam String player2Name,
            @RequestParam String player2Type,
            @RequestParam(defaultValue = "50") int player2Level,
            @RequestParam(defaultValue = "100") String player2Health) {
        
        Entity player1 = new Entity(player1Name, player1Type, player1Level);
        player1.setHealth(player1Health);
        
        Entity player2 = new Entity(player2Name, player2Type, player2Level);
        player2.setHealth(player2Health);
        
        return battleSave.saveBattle(player1, player2);
    }

}
