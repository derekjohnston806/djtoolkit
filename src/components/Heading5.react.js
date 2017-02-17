/**
    Heading5.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an <h5> element
*/
import React, { Component } from "react";

class Heading5 extends Component {
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
    return <h5 className={ this.props.style }>
      { this.props.children }
    </h5>
  }
}

export default Heading5;
