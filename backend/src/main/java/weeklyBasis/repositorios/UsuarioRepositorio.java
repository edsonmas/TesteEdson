package weeklyBasis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import weeklyBasis.dominios.Usuario;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {

    String existsByCpf(String cpf);
}
