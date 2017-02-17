/**
    Heading6.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an <h6> element
*/
import React, { Component } from "react";

class Heading6 extends Component {
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
    return <h6 className={ this.props.style }>
      { this.props.children }
    </h6>
  }
}

export default Heading6;
