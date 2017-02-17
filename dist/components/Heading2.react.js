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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Heading2.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - A component wrapper for an <h2> element
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Heading2 = function (_Component) {
  _inherits(Heading2, _Component);

  function Heading2() {
    _classCallCheck(this, Heading2);

    return _possibleConstructorReturn(this, (Heading2.__proto__ || Object.getPrototypeOf(Heading2)).apply(this, arguments));
  }

  _createClass(Heading2, [{
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
      return _react2.default.createElement(
        "h2",
        { className: this.props.style },
        this.props.children
      );
    }
  }]);

  return Heading2;
}(_react.Component);

exports.default = Heading2;