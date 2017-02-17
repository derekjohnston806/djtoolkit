/**
    Heading3.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an <h3> element
*/
import React, { Component } from "react";

class Heading3 extends Component {
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
    return <h3 className={ this.props.style }>
      { this.props.children }
    </h3>
  }
}

export default Heading3;
