package weeklyBasis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import weeklyBasis.dominios.Usuario;

import java.util.List;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>, JpaSpecificationExecutor<Usuario> {

    boolean existsByCpf(String cpf);



}
