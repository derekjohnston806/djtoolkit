/**
    BSColumn.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a bootstrap 'column' class element.
*/
import React, { Component } from "react";

class BSColumn extends Component {
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
    return <div className={ this.props.width + " " + this.props.offset }>
      { this.props.children }
    </div>
  }
}

BSColumn.propTypes = {
  width : React.PropTypes.string.isRequired,
  offset: React.PropTypes.string
};

export default BSColumn;
