/**
    BSTableCellHeading.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <th> element.
*/
import React, { Component } from "react";

class BSTableCellHeading extends Component {
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
    return <th>
      { this.props.text }
    </th>
  }
}

BSTableCellHeading.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default BSTableCellHeading;
