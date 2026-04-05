package com.practice.backend.service;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.practice.backend.classes.Battle;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;

@Service
public class BattleConsultService {

    public Battle getEntitiesHealth() throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();

        // .get() devuelve un ApiFuture<DocumentSnapshot>
        // Es decir: una promesa de que el documento llegará en el futuro
        DocumentSnapshot docSnapshot = db.collection("battles")
                                        .document("battle1")
                                        .get()
                                        .get(); // get() bloquea hasta obtener el documento

        // Verifica si el documento existe en la base de datos
        if (docSnapshot.exists()) {
            return docSnapshot.toObject(Battle.class);
        } else {
            return new Battle(); // devolver valores por defecto si no existe
        }
    }
}