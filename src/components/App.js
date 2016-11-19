import React from 'react';

export default class App extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};
