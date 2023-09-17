/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/landingpage/Footer.tsx":
/*!*******************************************!*\
  !*** ./components/landingpage/Footer.tsx ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_landingpage_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/landingpage/Navbar */ \"./components/landingpage/Navbar.tsx\");\n/* harmony import */ var _components_landingpage_Explorecolumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/landingpage/Explorecolumn */ \"./components/landingpage/Explorecolumn.tsx\");\n/* harmony import */ var _components_landingpage_Howitworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/landingpage/Howitworks */ \"./components/landingpage/Howitworks.tsx\");\n/* harmony import */ var _components_landingpage_Becomemember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/landingpage/Becomemember */ \"./components/landingpage/Becomemember.tsx\");\n/* harmony import */ var _components_landingpage_Sharecolumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/landingpage/Sharecolumn */ \"./components/landingpage/Sharecolumn.tsx\");\n/* harmony import */ var _components_landingpage_Testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/landingpage/Testimonial */ \"./components/landingpage/Testimonial.tsx\");\n/* harmony import */ var _components_landingpage_Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/landingpage/Newsletter */ \"./components/landingpage/Newsletter.tsx\");\n/* harmony import */ var _components_landingpage_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/landingpage/Footer */ \"./components/landingpage/Footer.tsx\");\n/* harmony import */ var _components_landingpage_Footer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_landingpage_Footer__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col bg-[#000D0A] \".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Explorecolumn__WEBPACK_IMPORTED_MODULE_2__.Explorecolumn, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Howitworks__WEBPACK_IMPORTED_MODULE_3__.Howitworks, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Becomemember__WEBPACK_IMPORTED_MODULE_4__.Becomemember, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Sharecolumn__WEBPACK_IMPORTED_MODULE_5__.Sharecolumn, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Testimonial__WEBPACK_IMPORTED_MODULE_6__.Testimonial, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Newsletter__WEBPACK_IMPORTED_MODULE_7__.Newsletter, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage_Footer__WEBPACK_IMPORTED_MODULE_8__.Footer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Uche Chris\\\\Documents\\\\SubshareWeb-Frontend\\\\pages\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV01BO0FBVGtEO0FBQ2M7QUFDTjtBQUNJO0FBQ0Y7QUFDQTtBQUNGO0FBQ1I7QUFJekMsU0FBU1M7SUFDdEIscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcsMkNBQTJELE9BQWhCWCw0SkFBZTs7MEJBRXJFLDhEQUFDQyxrRUFBTUE7Ozs7OzBCQUVQLDhEQUFDQyxnRkFBYUE7Ozs7OzBCQUVkLDhEQUFDQywwRUFBVUE7Ozs7OzBCQUVYLDhEQUFDQyw4RUFBWUE7Ozs7OzBCQUViLDhEQUFDQyw0RUFBV0E7Ozs7OzBCQUVaLDhEQUFDQyw0RUFBV0E7Ozs7OzBCQUVaLDhEQUFDQywwRUFBVUE7Ozs7OzBCQUVYLDhEQUFDQyxrRUFBTUE7Ozs7Ozs7Ozs7O0FBR2I7S0F0QndCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGFuZGluZ3BhZ2UvTmF2YmFyJ1xyXG5pbXBvcnQgeyBFeHBsb3JlY29sdW1uIH0gZnJvbSAnQC9jb21wb25lbnRzL2xhbmRpbmdwYWdlL0V4cGxvcmVjb2x1bW4nXHJcbmltcG9ydCB7IEhvd2l0d29ya3MgfSBmcm9tICdAL2NvbXBvbmVudHMvbGFuZGluZ3BhZ2UvSG93aXR3b3JrcydcclxuaW1wb3J0IHsgQmVjb21lbWVtYmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xhbmRpbmdwYWdlL0JlY29tZW1lbWJlcidcclxuaW1wb3J0IHsgU2hhcmVjb2x1bW4gfSBmcm9tICdAL2NvbXBvbmVudHMvbGFuZGluZ3BhZ2UvU2hhcmVjb2x1bW4nXHJcbmltcG9ydCB7IFRlc3RpbW9uaWFsIH0gZnJvbSAnQC9jb21wb25lbnRzL2xhbmRpbmdwYWdlL1Rlc3RpbW9uaWFsJ1xyXG5pbXBvcnQgeyBOZXdzbGV0dGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xhbmRpbmdwYWdlL05ld3NsZXR0ZXInXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJ0AvY29tcG9uZW50cy9sYW5kaW5ncGFnZS9Gb290ZXInXHJcblxyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpblxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBiZy1bIzAwMEQwQV0gJHtpbnRlci5jbGFzc05hbWV9YH1cclxuICAgID5cclxuICAgICAgPE5hdmJhci8+XHJcblxyXG4gICAgICA8RXhwbG9yZWNvbHVtbi8+XHJcblxyXG4gICAgICA8SG93aXR3b3Jrcy8+XHJcblxyXG4gICAgICA8QmVjb21lbWVtYmVyLz5cclxuXHJcbiAgICAgIDxTaGFyZWNvbHVtbi8+XHJcblxyXG4gICAgICA8VGVzdGltb25pYWwvPlxyXG4gICAgICBcclxuICAgICAgPE5ld3NsZXR0ZXIvPlxyXG5cclxuICAgICAgPEZvb3Rlci8+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsIk5hdmJhciIsIkV4cGxvcmVjb2x1bW4iLCJIb3dpdHdvcmtzIiwiQmVjb21lbWVtYmVyIiwiU2hhcmVjb2x1bW4iLCJUZXN0aW1vbmlhbCIsIk5ld3NsZXR0ZXIiLCJGb290ZXIiLCJIb21lIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});