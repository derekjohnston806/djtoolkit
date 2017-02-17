/**
    Heading4.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an <h4> element
*/
import React, { Component } from "react";

class Heading4 extends Component {
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
    return <h4 className={ this.props.style }>
      { this.props.children }
    </h4>
  }
}

export default Heading4;
