/**
    BSFormLabel.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <label> element.
*/
import React, { Component } from "react";

class BSFormLabel extends Component {
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
    return <label htmlFor={ this.props.id } hidden={ this.props.isHidden }>
      { this.props.text }
    </label>
  }
}

BSFormLabel.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  isHidden: React.PropTypes.bool
};

export default BSFormLabel;
