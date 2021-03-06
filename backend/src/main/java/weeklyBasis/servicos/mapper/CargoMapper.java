package weeklyBasis.servicos.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import weeklyBasis.dominios.Cargo;
import weeklyBasis.servicos.dto.SelectCargoDTO;

@Mapper(componentModel = "spring",uses = {})
public interface CargoMapper extends EntityMapper<SelectCargoDTO, Cargo>{

    @Override
    @Mapping(source = "id", target = "value")
    @Mapping(source = "descricao", target = "label")
    SelectCargoDTO toDto(Cargo cargo);

    @Override
    @InheritInverseConfiguration
    Cargo toEntity(SelectCargoDTO cargoDTO);
}
