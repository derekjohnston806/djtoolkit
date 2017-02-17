/**
    BSRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a bootstrap "row" class element.
*/
import React, { Component } from "react";

class BSRow extends Component {
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
    return <div className="row">
      { this.props.children }
    </div>
  }
}

export default BSRow;
