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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   BSContainer.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     - A component wrapper for the bootstrap .container and .container-fluid
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       classes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var BSContainer = function (_Component) {
  _inherits(BSContainer, _Component);

  /**
    constructor(props)
     @desc:
      - Create an instance of this class.
     @param:
      - props (Object): The component's properties passed in by the parent.
     @return:
      - A new class object.
  */
  function BSContainer(props) {
    _classCallCheck(this, BSContainer);

    var _this = _possibleConstructorReturn(this, (BSContainer.__proto__ || Object.getPrototypeOf(BSContainer)).call(this, props));

    _this.setClass = _this.setClass.bind(_this);
    return _this;
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


  _createClass(BSContainer, [{
    key: "setClass",
    value: function setClass() {
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

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.setClass() },
        this.props.children
      );
    }
  }]);

  return BSContainer;
}(_react.Component);

BSContainer.propTypes = {
  isFluid: _react2.default.PropTypes.bool
};

exports.default = BSContainer;