import React from 'react';
import SerieForm from './SerieForm';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as seriesActions from '../../actions/seriesActions';
import toastr from 'toastr';

class ManageSerieForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        serie: {}
      };

      this.saveSeries = this.saveSeries.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      const field = e.target.id;
      const serie = Object.assign({}, this.state.serie);
      serie[field] = e.target.value;
      serie.idGenero = 1;
      this.setState({serie});
    }

    saveSeries(e) {
      this.props.actions.saveSeries(this.state.serie).then((response) => {
        if (response.error) {
          toastr.error('Algo salió mal');
        }
      }).catch((err) => {
        toastr.error('Algo salió mal');
      });
      alert('y que guardo la serie ' + this.state.serie.nombre);
    }

    render() {
      return(
        <SerieForm
          handleChange={this.handleChange}
          onClick={this.saveSeries}
          serie={this.state.serie}
        />
      );
    }
}

ManageSerieForm.propTypes = {
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    series: state.series
  };
}

function mapDisPatchToProps(dispatch) {
  return {
    actions : bindActionCreators(seriesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(ManageSerieForm);
