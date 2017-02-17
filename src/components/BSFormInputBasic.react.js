/**
    BSFormInputBasic.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a fundamental form input element.
*/
import React, { Component } from "react";

class BSFormInputBasic extends Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  /**
    handleChange(event)

    @desc:
      - Respond to a form change event.

    @param:
      - event (Object): The automatically generated form change event.

    @return:
      - null
  */
  handleChange(event) {
    this.props.onChange(event.target.value);
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
    return <input
      id={this.props.id}
      type={this.props.type}
      className="form-control"
      placeholder={ this.props.placeholder }
      value={ this.props.value }
      onChange={ this.handleChange }
    />
  }
}

BSFormInputBasic.propTypes = {
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired
}

export default BSFormInputBasic;
