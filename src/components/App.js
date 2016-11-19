import React from 'react';
import Header from './commons/Header';

export default class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};
