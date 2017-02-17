/**
    BSTableRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <tr> element.
*/
import React, { Component } from "react";

class BSTableRow extends Component {
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
    return <tr className={ this.props.style }>
      { this.props.children }
    </tr>
  }
}

BSTableRow.propTypes = {
  style: React.PropTypes.string
};

export default BSTableRow;
