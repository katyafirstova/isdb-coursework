package org.itmo.isdb.controller;

import org.itmo.isdb.model.Film;
import org.itmo.isdb.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/films")
public class FIlmController {

    @Autowired
    private FilmRepository filmRepository;

    @GetMapping("/")
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    @GetMapping("/{filmId}")
    public Film getFilmById(@PathVariable Long filmId) throws Exception {
        return filmRepository.findById(filmId)
                .orElseThrow(() -> new Exception("Movie not found with id: " + filmId));
    }

    @GetMapping("/genre/{genre}")
    public List<Film> getFilmByGenre(@PathVariable String genre) {
        return filmRepository.getFilmsByGenre(genre);


    }


}


