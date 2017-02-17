/**
    BSFormInputText.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an input[type="text"] element.
*/
import React, { Component } from "react";

class BSFormInputText extends Component {
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
    return <BSFormInputBasic
      type="text"
      id={ this.props.id }
      value={ this.props.value }
      onChange={ this.props.onChange }
      placeholder={ this.props.placeholder }
    />
  }
}

BSFormInputText.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
};

export default BSFormInputText;
