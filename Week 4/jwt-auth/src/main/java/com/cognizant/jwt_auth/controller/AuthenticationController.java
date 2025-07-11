package com.cognizant.jwt_auth.controller;

import com.cognizant.jwt_auth.model.TokenResponse;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;

@RestController
public class AuthenticationController {

	private static final String SECRET_KEY = "s3cr3t@JWT!Key#2025$SpringBootExample";

    @GetMapping("/authenticate")
    public TokenResponse authenticate(HttpServletRequest request) {
        System.out.println("✅ Authentication endpoint hit");

        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization Header: " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            throw new RuntimeException("Missing or invalid Authorization header.");
        }

        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        System.out.println("Decoded credentials: " + credentials);

        String[] parts = credentials.split(":", 2);
        String username = parts[0];
        String password = parts[1];

        if (!"user".equals(username) || !"pwd".equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 600000)) // 10 minutes
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();

        System.out.println("Generated Token: " + token);

        return new TokenResponse(token);
    }
}
