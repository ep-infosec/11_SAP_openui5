sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/order-status", "./v4/order-status"], function (_exports, _Theme, _orderStatus, _orderStatus2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _orderStatus.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _orderStatus.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _orderStatus.pathData : _orderStatus2.pathData;
  _exports.pathData = pathData;
  var _default = "order-status";
  _exports.default = _default;
});