/**
    BSFormGroup.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a "form-group" bootstrap element.
*/
import React, { Component } from "react";
import BSFormLabel from "./BSFormLabel.react";
import BSFormInputText from "./BSFormInputText.react";

class BSFormGroup extends Component {
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

    this.getInput = this.getInput.bind(this);
  }

  /**
    getInput()

    @desc:
      - Based on the type property passed to the group, set the input component.

    @param:
      - null

    @return:
      - A form input component.
  */
  getInput() {
    switch (this.props.inputType) {
      default:
        return <BSFormInputText id={this.props.id} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} />
    }
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
    return <div className="form-group">
      <BSFormLabel id={ this.props.id } text={ this.props.label } isHidden={ this.props.isLabelHidden } />
      { this.getInput() }
    </div>
  }
}

BSFormGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  isLabelHidden: React.PropTypes.bool
};

export default BSFormGroup;
