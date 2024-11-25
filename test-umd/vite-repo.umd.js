(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react"), require("react-dom/client"), require("@mui/material/styles"), require("@mui/material")) : typeof define === "function" && define.amd ? define(["exports", "react", "react-dom/client", "@mui/material/styles", "@mui/material"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ViteRepo = {}, global.React, global.ReactDOM, global.MaterialUI, global.MaterialUI));
})(this, function(exports2, require$$0, ReactDOM2, styles, material) {
  "use strict";var ReactDOM = window.ReactDOM.createRoot ? window.ReactDOM : window.ReactDOM.default;

  function _interopNamespaceDefault(e) {
    const n2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k2 in e) {
        if (k2 !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          Object.defineProperty(n2, k2, d.get ? d : {
            enumerable: true,
            get: () => e[k2]
          });
        }
      }
    }
    n2.default = e;
    return Object.freeze(n2);
  }
  const ReactDOM__namespace = /* @__PURE__ */ _interopNamespaceDefault(ReactDOM2);
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  const Clicker = ({ onClick }) => {
    console.log("Clicker component rendering");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      material.Box,
      {
        sx: {
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          material.Button,
          {
            variant: "contained",
            color: "error",
            size: "large",
            onClick: () => {
              console.log("Button clicked");
              onClick == null ? void 0 : onClick();
            },
            children: "Click Me"
          }
        )
      }
    );
  };
  const theme = styles.createTheme();
  function init(containerId) {
    console.log("Initializing with container:", containerId);
    const element = document.getElementById(containerId);
    if (!element) {
      console.error("Element is required to mount the application");
      return { containerId };
    }
    const reactDOMClient = {
      createRoot: ReactDOM__namespace.createRoot,
      hydrateRoot: ReactDOM__namespace.hydrateRoot
    };
    reactDOMClient.createRoot(element).render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(styles.ThemeProvider, { theme, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(material.CssBaseline, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clicker, { onClick: () => console.log("Clicked!") })
      ] }) })
    );
  }
  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.getElementById("root")) {
        init("root");
      }
    });
  }
  exports2.Clicker = Clicker;
  exports2.init = init;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
