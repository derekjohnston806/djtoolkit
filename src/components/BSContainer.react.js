/**
    BSContainer.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the bootstrap .container and .container-fluid
        classes.
*/
import React, { Component } from "react";

class BSContainer extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of this class.

    @param:
      - props (Object): The component's properties passed in by the parent.

    @return:
      - A new class object.
  */
  constructor(props) {
    super(props);

    this.setClass = this.setClass.bind(this);
  }

  /**
    setClass()

    @desc:
      - Based on the 'isFluid' property, set the appropriate
        bootstrap className.

    @param:
      - null

    @return:
      - The className for the component.
  */
  setClass() {
    return this.props.isFluid ? "container-fluid" : "container";
  }

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
    return <div className={ this.setClass() }>
      { this.props.children }
    </div>
  }
}

BSContainer.propTypes = {
  isFluid: React.PropTypes.bool
};

export default BSContainer
