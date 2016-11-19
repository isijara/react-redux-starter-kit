import React from 'react';
import ListadoSerieRow from './ListadoSerieRow';

const ListadoSeries = ({series}) => {

  return(
    <table className="table">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Género</th>
        </tr>
        {
          series.map( (serie) => {
            return <ListadoSerieRow key={serie.id} serie={serie}/>;
          })
        }
      </tbody>
    </table>
  );
};

ListadoSeries.propTypes = {
  series : React.PropTypes.array.isRequired
};

export default ListadoSeries;
