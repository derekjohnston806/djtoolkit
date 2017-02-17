/**
    BSTableCellText.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <td> element containing text data.
*/
import React, { Component } from "react";

class BSTableCellText extends Component {
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
    return <td className={ this.props.style }>
      { this.props.text }
    </td>
  }
}

BSTableCellText.propTypes = {
  style : React.PropTypes.string,
  text  : React.PropTypes.string.isRequired
};

export default BSTableCellText;
