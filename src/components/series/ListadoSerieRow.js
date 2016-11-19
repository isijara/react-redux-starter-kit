import React from 'react';

const ListadoSerieRow = ({serie}) => {

  return (
    <tr>
      <td>{serie.id}</td>
      <td>{serie.nombre}</td>
      <td>{serie.generoSerie.nombre}</td>
    </tr>
  );
};

ListadoSerieRow.propTypes = {
  serie: React.PropTypes.object.isRequired
};

export default ListadoSerieRow;
