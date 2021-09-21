package weeklyBasis.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import weeklyBasis.dominios.MotivoEvento;

public interface MotivoEventoRepositorio extends JpaRepository<MotivoEvento, Long> {
}
