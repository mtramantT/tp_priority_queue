package com.tp.pq.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tp.pq.services.NewUserService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private NewUserService newUserService;

    @PostMapping("/new")
    public void createNewUser(@RequestParam String username, @RequestParam String password) throws Exception {
        newUserService.createNewUser(username, password);
    }
}
