import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as seriesActions from '../../actions/seriesActions';
import ListadoSeries from './ListadoSeries';



class SeriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series : props.series
    };

  }

  componentWillMount() {
    this.props.actions.getSeries().then( (response) => {
      const series = response.payload.data;
      this.setState({series});
    });
  }

  render() {
    return (
      <div>
        <br/>
        <Link to="/serie">
          <button  className="btn btn-primary pull-right">Agregar Nueva Serie</button>
        </Link>
        <ListadoSeries series={this.state.series}/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
      series : state.series
  };
}


function mapDisPatchToProps(dispatch) {
  return {
    actions: bindActionCreators(seriesActions, dispatch)
  };
}

SeriesPage.propTypes = {
  series: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDisPatchToProps)(SeriesPage);
