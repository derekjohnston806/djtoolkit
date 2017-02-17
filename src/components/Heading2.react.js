/**
    Heading2.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an <h2> element
*/
import React, { Component } from "react";

class Heading2 extends Component {
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
    return <h2 className={ this.props.style }>
      { this.props.children }
    </h2>
  }
}

export default Heading2;
