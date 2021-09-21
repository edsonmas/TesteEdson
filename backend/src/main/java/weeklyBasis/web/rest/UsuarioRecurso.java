package weeklyBasis.web.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import weeklyBasis.dominios.Usuario;
import weeklyBasis.servicos.UsuarioServico;
import weeklyBasis.web.rest.dto.UsuarioDTO;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioRecurso {

    private final UsuarioServico usuarioServico;

    @GetMapping
    public ResponseEntity<List<Usuario>> usuarioList(){
        return new ResponseEntity<>(usuarioServico.listaUsuarios(), HttpStatus.OK);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Usuario> usuarioById(@PathVariable long id){
        return ResponseEntity.ok(usuarioServico.usuarioById(id));
    }

    @PostMapping
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody UsuarioDTO usuarioDTO){
        return new ResponseEntity<>(usuarioServico.salvarUsuario(usuarioDTO),HttpStatus.CREATED);
    }



}
