package com.practice.backend.service;

import org.springframework.stereotype.Service;

import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.practice.backend.classes.Entity;
import com.practice.backend.classes.Battle;

@Service
public class BattleSave {
    
    /**
     * Guarda una nueva batalla con dos entidades jugadores
     * @param player1 Primera entidad del jugador
     * @param player2 Segunda entidad del jugador
     * @param battleId ID del documento de batalla en Firestore
     * @return Mensaje de éxito o error
     */
    public String saveBattle(Entity player1, Entity player2, String battleId) {
        try {
            // Obtener instancia de Firestore
            Firestore db = FirestoreClient.getFirestore();

            // Crear objeto Battle con ambos jugadores
            Battle battle = new Battle();
            battle.setPlayer1(player1);
            battle.setPlayer2(player2);
            battle.setStatus("ongoing");

            // Guardar en colección
            db.collection("battles")
                .document(battleId)
                .set(battle);

            return "Batalla guardada correctamente";

        } catch (Exception e) {
            e.printStackTrace();
            return "Error al guardar batalla";
        }
    }
    
    /**
     * Guarda una batalla con ID por defecto "battle1"
     * @param player1 Primera entidad del jugador
     * @param player2 Segunda entidad del jugador
     * @return Mensaje de éxito o error
     */
    public String saveBattle(Entity player1, Entity player2) {
        return saveBattle(player1, player2, "battle1");
    }
    
    /**
     * Método antiguo mantenido para compatibilidad
     */
    public String saveData() {
        try {
            Firestore db = FirestoreClient.getFirestore();
            Battle testBattle = new Battle();
            testBattle.setStatus("test");

            db.collection("battles")
                .document("test")
                .set(testBattle);

            return "Datos guardados correctamente";

        } catch (Exception e) {
            e.printStackTrace();
            return "Error al guardar datos";
        }
    }
}
