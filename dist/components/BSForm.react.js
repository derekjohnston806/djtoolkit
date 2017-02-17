"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   BSForm.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - A component wrapper for a <form> element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var BSForm = function (_Component) {
  _inherits(BSForm, _Component);

  /**
    constructor(props)
     @desc:
      - Create an instance of this class.
     @param:
      - props (Object): The component's properties passed in by the parent.
     @return:
      - A new class object.
  */
  function BSForm(props) {
    _classCallCheck(this, BSForm);

    var _this = _possibleConstructorReturn(this, (BSForm.__proto__ || Object.getPrototypeOf(BSForm)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.getClassName = _this.getClassName.bind(_this);
    return _this;
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


  _createClass(BSForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
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

  }, {
    key: "getClassName",
    value: function getClassName() {
      var className = "";

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

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { onSubmit: this.handleSubmit, className: this.getClassName() },
        this.props.children
      );
    }
  }]);

  return BSForm;
}(_react.Component);

BSForm.propTypes = {
  onSubmit: _react2.default.PropTypes.func.isRequired,
  isInline: _react2.default.PropTypes.bool
};

exports.default = BSForm;