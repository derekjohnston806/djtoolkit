/**
    BSTableBody.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <tbody> element.
*/
import React, { Component } from "react";

class BSTableBody extends Component {
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
    return <tbody>
      { this.props.children }
    </tbody>
  }
}

export default BSTableBody;
