import React, { Component, PropTypes } from 'react';

export default class Example extends Component {

  constructor(props, context) {
    super(props, context);
  }

  

  render() {

    const { example } = this.props;

    return (
      <section className="panel">
          <h2>{example.title}</h2>
          <p>{example.description}</p>
      </section>
    );
  }
}

Example.propTypes = {
    example: PropTypes.object.isRequired
};
