/**
    Heading1.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an <h1> element
*/
import React, { Component } from "react";

class Heading1 extends Component {
  /**
    render()

    @desc:
      - Update the component in the DOM.

    @param:
      - null

    @return:
      - null
  */
  render() {
    return <h1 className={ this.props.style }>
      { this.props.children }
    </h1>
  }
}

export default Heading1;
