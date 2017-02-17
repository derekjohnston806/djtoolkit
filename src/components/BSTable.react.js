/**
    BSTable.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a bootstrap 'table' component.
*/
import React, { Component } from "react";

class BSTable extends Component {
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
    return <table className={ "table table-" + this.props.style }>
      { this.props.children }
    </table>
  }
}

BSTable.propTypes = {
  style: React.PropTypes.string
};

export default BSTable;
