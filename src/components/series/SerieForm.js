import React from 'react';

const SerieForm = ({handleChange, onClick, serie}) => {
  return(
    <div>
      <div className="form-group">
        <label htmlFor="nombre"> Nombre </label>
        <input type="text"
          onChange={handleChange}
          className="form-control"
          id="nombre"
          placeholder="Nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="nombre"> Compañía </label>
        <input type="text"
          onChange={handleChange}
          className="form-control"
          id="compania"
          placeholder="Compañía"
        />
      </div>


      <div className="form-group">
        <label htmlFor="duracion"> Duración </label>
        <input onChange={handleChange} type="text" className="form-control" id="duracion" placeholder="Duración" />
      </div>

      <div className="form-group">
        <label htmlFor="duracion"> Duración </label>
        <input onChange={handleChange} type="text" className="form-control" id="sinopsis" placeholder="sinopsis" />
      </div>

      <div className="form-group">
        <label htmlFor="genero"> Género </label>
        <input onChange={handleChange} type="text" className="form-control" id="idGenero" placeholder="Género" />
      </div>

      <button className="btn btn-primary pull-right" onClick={onClick}>Guardar</button>
    </div>

  );
};

SerieForm.propTypes = {
  handleChange : React.PropTypes.func.isRequired,
  onClick : React.PropTypes.func.isRequired,
  serie : React.PropTypes.object.isRequired
};

export default SerieForm;
