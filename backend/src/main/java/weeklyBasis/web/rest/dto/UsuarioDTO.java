package weeklyBasis.web.rest.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioDTO {
    private Long id;

    private String nome;

    private String cpf;

    private String email;
}
