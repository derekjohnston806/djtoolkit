/**
    BSForm.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a <form> element.
*/
import React, { Component } from "react";

class BSForm extends Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  /**
    handleSubmit(event)

    @desc:
      - Handle the submission of the form element.

    @param:
      - event (Object): The automatically generated event object.

    @return:
      - null
  */
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  /**
    getClassName()

    @desc:
      - Based on the passed props, create a className string.

    @param:
      - null

    @return:
      - A className string for the form.
  */
  getClassName() {
    let className = "";

    if (this.props.isInline) {
      className += "inline";
    }

    // Leave open the posibility of other className components.

    return className;
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
    return <form onSubmit={ this.handleSubmit } className={ this.getClassName() }>
      { this.props.children }
    </form>
  }
}

BSForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  isInline: React.PropTypes.bool
};

export default BSForm;
