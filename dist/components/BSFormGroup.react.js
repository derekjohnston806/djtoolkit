"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _BSFormLabel = require("./BSFormLabel.react");

var _BSFormLabel2 = _interopRequireDefault(_BSFormLabel);

var _BSFormInputText = require("./BSFormInputText.react");

var _BSFormInputText2 = _interopRequireDefault(_BSFormInputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   BSFormGroup.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - A component wrapper for a "form-group" bootstrap element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var BSFormGroup = function (_Component) {
  _inherits(BSFormGroup, _Component);

  /**
    constructor(props)
     @desc:
      - Create an instance of this class.
     @param:
      - props (Object): The component's properties passed in by the parent.
     @return:
      - A new class object.
  */
  function BSFormGroup(props) {
    _classCallCheck(this, BSFormGroup);

    var _this = _possibleConstructorReturn(this, (BSFormGroup.__proto__ || Object.getPrototypeOf(BSFormGroup)).call(this, props));

    _this.getInput = _this.getInput.bind(_this);
    return _this;
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


  _createClass(BSFormGroup, [{
    key: "getInput",
    value: function getInput() {
      switch (this.props.inputType) {
        default:
          return _react2.default.createElement(_BSFormInputText2.default, { id: this.props.id, value: this.props.value, onChange: this.props.onChange, placeholder: this.props.placeholder });
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

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(_BSFormLabel2.default, { id: this.props.id, text: this.props.label, isHidden: this.props.isLabelHidden }),
        this.getInput()
      );
    }
  }]);

  return BSFormGroup;
}(_react.Component);

BSFormGroup.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  label: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.string.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired,
  placeholder: _react2.default.PropTypes.string,
  isLabelHidden: _react2.default.PropTypes.bool
};

exports.default = BSFormGroup;