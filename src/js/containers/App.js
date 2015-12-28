import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Example from '../components/Example';
import * as ExampleActions from '../actions/ExampleActions';

class App extends Component {
  render() {
    const { example } = this.props;

    return (
      <div>
        <Example example={example} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    example: state.example
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ExampleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);