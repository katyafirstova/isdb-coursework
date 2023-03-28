package org.itmo.web4.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;


import org.itmo.web4.exceptions.StoredKeyException;
import org.itmo.web4.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.cert.CertificateException;


@Service
public class JwtProvider {
    private Key key;
    private KeyStore keyStore;
    @PostConstruct
    public void init() throws StoredKeyException {
        try {
            keyStore = KeyStore.getInstance("JKS");
            InputStream resource = getClass().getResourceAsStream("/web4.jks");
            keyStore.load(resource, "12345678".toCharArray());
        } catch (KeyStoreException | CertificateException | NoSuchAlgorithmException | IOException e) {
            throw new StoredKeyException(" Exception occured while loading keystore");
        }
        
    }

    public String generateToken(Authentication authentication) {
        User principal = (User) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(principal.getUsername())
                .signWith(getPrivateKey())
                .compact();

    }

    private Key getPrivateKey() {
        try {
            return (PrivateKey) keyStore.getKey("web4", "12345678".toCharArray());
        } catch (KeyStoreException |  NoSuchAlgorithmException | UnrecoverableKeyException e) {
            throw new StoredKeyException(" Exception occured while while retriving public key");
        }
    }

    public boolean validateToken(String jwt) {
        Jwts.parser().setSigningKey(getPublickey()).parseClaimsJws(jwt);
        return true;
    }

    private PublicKey getPublickey() {
        try {
            return keyStore.getCertificate("web4").getPublicKey();
        } catch (KeyStoreException e) {
            throw new StoredKeyException(" Exception occured while while retriving public key");
        }
    }

    public String getUsernameFromJWT(String jwt) throws StoredKeyException {
        Claims claims = Jwts.parser()
                .setSigningKey(getPublickey())
                .parseClaimsJws(jwt)
                .getBody();

        return claims.getSubject();
    }
}
