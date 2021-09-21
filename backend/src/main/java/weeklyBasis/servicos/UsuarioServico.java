package weeklyBasis.servicos;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import weeklyBasis.dominios.Usuario;
import weeklyBasis.repositorios.UsuarioRepositorio;
import weeklyBasis.web.rest.dto.UsuarioDTO;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class UsuarioServico {


    @Autowired
    private final UsuarioRepositorio usuarioRepositorio;


    public List<Usuario> listaUsuarios(){
        return usuarioRepositorio.findAll();
    }

    public Usuario usuarioById(long id){
        return usuarioRepositorio.findById(id).orElseThrow(()-> new EntityNotFoundException("user_id não encontrado"));
    }


    public Usuario salvarUsuario(UsuarioDTO usuarioDTO) {
        return usuarioRepositorio.save( Usuario.builder()
                .nome(usuarioDTO.getNome())
                .cpf(usuarioDTO.getCpf())
                .email(usuarioDTO.getEmail())
                .build());
    }
}
