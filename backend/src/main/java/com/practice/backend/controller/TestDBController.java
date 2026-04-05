package com.practice.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.backend.controller.TestDBController;
import com.practice.backend.service.FirebaseService;

@RestController
public class TestDBController {
    private final FirebaseService firebaseService;

    public TestDBController(FirebaseService firebaseService) {
        this.firebaseService = firebaseService;
    }

    @GetMapping("/firebase-test")
    public String testFirebase() {

        firebaseService.guardarDato();
        return "Dato enviado a Firebase";
    }
}