"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/pages/profile.jsx":
/*!*******************************!*\
  !*** ./src/pages/profile.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/future/image */ \"./node_modules/next/future/image.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AuthLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AuthLayout */ \"./src/components/AuthLayout.jsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _components_Fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Fields */ \"./src/components/Fields.jsx\");\n/* harmony import */ var _images_logos_dcrowd_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/logos/dcrowd.svg */ \"./src/images/logos/dcrowd.svg\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_ConnectWallet_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ConnectWallet.jsx */ \"./src/components/ConnectWallet.jsx\");\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header.jsx */ \"./src/components/Header.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction handleConnectWallet() {\n    return _handleConnectWallet.apply(this, arguments);\n}\nfunction _handleConnectWallet() {\n    _handleConnectWallet = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n        var provider, signer, _, _tmp;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.Web3Provider(window.ethereum, \"any\");\n                    // Prompt user for account connections\n                    return [\n                        4,\n                        provider.send(\"eth_requestAccounts\", [])\n                    ];\n                case 1:\n                    _state.sent();\n                    signer = provider.getSigner();\n                    _ = console.log;\n                    _tmp = [\n                        \"Account:\"\n                    ];\n                    return [\n                        4,\n                        signer.getAddress()\n                    ];\n                case 2:\n                    _.apply(console, _tmp.concat(_state.sent()));\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return _handleConnectWallet.apply(this, arguments);\n}\nfunction Profile() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DcrowD - Crowdfunding made simple for small everyone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salimtlemcani/Desktop/Work/DcrowD/DcrowD/src/pages/profile.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salimtlemcani/Desktop/Work/DcrowD/DcrowD/src/pages/profile.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/salimtlemcani/Desktop/Work/DcrowD/DcrowD/src/pages/profile.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/salimtlemcani/Desktop/Work/DcrowD/DcrowD/src/pages/profile.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/salimtlemcani/Desktop/Work/DcrowD/DcrowD/src/pages/profile.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/salimtlemcani/Desktop/Work/DcrowD/DcrowD/src/pages/profile.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QjtBQUNBO0FBQ1M7QUFFZTtBQUNSO0FBQ0c7QUFDRztBQUVuQjtBQUM0QjtBQUNkO1NBRTlCVSxtQkFBbUI7V0FBbkJBLG9CQUFtQjs7U0FBbkJBLG9CQUFtQjtJQUFuQkEsb0JBQW1CLEdBQWxDLGdHQUFxQztZQUM3QkMsUUFBUSxFQUdSQyxNQUFNOzs7O29CQUhORCxRQUFRLEdBQUcsSUFBSUosa0VBQTZCLENBQUNRLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFLEtBQUssQ0FBQztvQkFDMUUsc0NBQXNDO29CQUN0Qzs7d0JBQU1MLFFBQVEsQ0FBQ00sSUFBSSxDQUFDLHFCQUFxQixLQUFLO3NCQUFBOztvQkFBOUMsYUFBOEM7b0JBQ3hDTCxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUyxFQUFFO3dCQUNuQ0MsT0FBTyxDQUFDQyxHQUFHOzt3QkFBQyxVQUFVOztvQkFBRTs7d0JBQU1SLE1BQU0sQ0FBQ1MsVUFBVSxFQUFFO3NCQUFBOztvQkFBakRGLEVBQUFBLEtBQWtELENBQWxEQSxPQUFPLGNBQWlCLGFBQXlCLEVBQUM7Ozs7OztJQUNwRCxDQUFDO1dBTmNULG9CQUFtQjs7QUFRbkIsU0FBU1ksT0FBTyxHQUFHO0lBQ2hDLHFCQUNFOzswQkFDRSw4REFBQ3RCLGtEQUFJOztrQ0FDSCw4REFBQ3VCLE9BQUs7a0NBQUMsc0RBQW9EOzs7Ozs0QkFBUTtrQ0FDbkUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7a0NBQ3ZDLDhEQUFDQyxNQUFJO3dCQUNIQyxJQUFJLEVBQUMsYUFBYTt3QkFDbEJDLE9BQU8sRUFBQyx5SEFBeUg7Ozs7OzRCQUNqSTs7Ozs7O29CQUNHOzBCQUNQLDhEQUFDcEIsOERBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNELHFFQUFhOzs7O29CQUFHOztvQkFDaEIsQ0FDSjtBQUNILENBQUM7QUFmdUJjLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUuanN4PzIyMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvZnV0dXJlL2ltYWdlJ1xuXG5pbXBvcnQgeyBBdXRoTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL0F1dGhMYXlvdXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0ZpZWxkcydcbmltcG9ydCBsb2dvRGNyb3dEIGZyb20gJ0AvaW1hZ2VzL2xvZ29zL2Rjcm93ZC5zdmcnXG5cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldC5qc3gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCdcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ29ubmVjdFdhbGxldCgpIHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtLCAnYW55JylcbiAgLy8gUHJvbXB0IHVzZXIgZm9yIGFjY291bnQgY29ubmVjdGlvbnNcbiAgYXdhaXQgcHJvdmlkZXIuc2VuZCgnZXRoX3JlcXVlc3RBY2NvdW50cycsIFtdKVxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICBjb25zb2xlLmxvZygnQWNjb3VudDonLCBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRjcm93RCAtIENyb3dkZnVuZGluZyBtYWRlIHNpbXBsZSBmb3Igc21hbGwgZXZlcnlvbmU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTW9zdCBib29ra2VlcGluZyBzb2Z0d2FyZSBpcyBhY2N1cmF0ZSwgYnV0IGhhcmQgdG8gdXNlLiBXZSBtYWtlIHRoZSBvcHBvc2l0ZSB0cmFkZS1vZmYsIGFuZCBob3BlIHlvdSBkb27igJl0IGdldCBhdWRpdGVkLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29ubmVjdFdhbGxldCAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJJbWFnZSIsIkF1dGhMYXlvdXQiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJsb2dvRGNyb3dEIiwiZXRoZXJzIiwiQ29ubmVjdFdhbGxldCIsIkhlYWRlciIsImhhbmRsZUNvbm5lY3RXYWxsZXQiLCJwcm92aWRlciIsInNpZ25lciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2VuZCIsImdldFNpZ25lciIsImNvbnNvbGUiLCJsb2ciLCJnZXRBZGRyZXNzIiwiUHJvZmlsZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile.jsx\n"));

/***/ })

});