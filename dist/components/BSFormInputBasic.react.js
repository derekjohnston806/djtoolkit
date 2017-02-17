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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   BSFormInputBasic.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - A component wrapper for a fundamental form input element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var BSFormInputBasic = function (_Component) {
  _inherits(BSFormInputBasic, _Component);

  /**
    constructor(props)
     @desc:
      - Create an instance of this class.
     @param:
      - props (Object): The component's properties passed in by the parent.
     @return:
      - A new class object.
  */
  function BSFormInputBasic(props) {
    _classCallCheck(this, BSFormInputBasic);

    var _this = _possibleConstructorReturn(this, (BSFormInputBasic.__proto__ || Object.getPrototypeOf(BSFormInputBasic)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
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


  _createClass(BSFormInputBasic, [{
    key: "handleChange",
    value: function handleChange(event) {
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

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("input", {
        id: this.props.id,
        type: this.props.type,
        className: "form-control",
        placeholder: this.props.placeholder,
        value: this.props.value,
        onChange: this.handleChange
      });
    }
  }]);

  return BSFormInputBasic;
}(_react.Component);

BSFormInputBasic.propTypes = {
  placeholder: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func.isRequired,
  value: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired
};

exports.default = BSFormInputBasic;