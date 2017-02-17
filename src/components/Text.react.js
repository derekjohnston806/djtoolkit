/**
    Text.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <p> element.
*/
import React, { Component } from "react";

class Text extends Component {
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
    return <p className={ this.props.style }>
      { this.props.children }
    </p>
  }
}

Text.propTypes = {
  style: React.PropTypes.string
};

export default Text;
