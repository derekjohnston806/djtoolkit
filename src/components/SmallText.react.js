/**
    SmallText.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <small> element.
*/
import React, { Component } from "react";

class SmallText extends Component {
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
    return <small>
      { this.props.children }
    </small>
  }
}

export default SmallText;
