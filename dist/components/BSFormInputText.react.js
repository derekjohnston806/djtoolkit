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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   BSFormInputText.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - A component wrapper for an input[type="text"] element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var BSFormInputText = function (_Component) {
  _inherits(BSFormInputText, _Component);

  function BSFormInputText() {
    _classCallCheck(this, BSFormInputText);

    return _possibleConstructorReturn(this, (BSFormInputText.__proto__ || Object.getPrototypeOf(BSFormInputText)).apply(this, arguments));
  }

  _createClass(BSFormInputText, [{
    key: "render",

    /**
      render()
       @desc:
        - Update the component in the DOM.
       @param:
        - null
       @return:
        - null
    */
    value: function render() {
      return _react2.default.createElement(BSFormInputBasic, {
        type: "text",
        id: this.props.id,
        value: this.props.value,
        onChange: this.props.onChange,
        placeholder: this.props.placeholder
      });
    }
  }]);

  return BSFormInputText;
}(_react.Component);

BSFormInputText.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.string.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired,
  placeholder: _react2.default.PropTypes.string
};

exports.default = BSFormInputText;