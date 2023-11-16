"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/landingpage/Riskchecker.tsx":
/*!************************************************!*\
  !*** ./components/landingpage/Riskchecker.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Riskchecker: function() { return /* binding */ Riskchecker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var modularize_import_loader_name_Listbox_join_components_listbox_listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modularize-import-loader?name=Listbox&join=./components/listbox/listbox!@headlessui/react */ \"./node_modules/next/dist/build/webpack/loaders/modularize-import-loader.js?name=Listbox&join=./components/listbox/listbox!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var modularize_import_loader_name_Transition_join_components_transitions_transition_headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modularize-import-loader?name=Transition&join=./components/transitions/transition!@headlessui/react */ \"./node_modules/next/dist/build/webpack/loaders/modularize-import-loader.js?name=Transition&join=./components/transitions/transition!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _utils_httpResquest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/httpResquest */ \"./utils/httpResquest.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Riskchecker = ()=>{\n    var _risk;\n    _s();\n    const [riskScore, setRiskScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(7);\n    const [risk, setRisk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.riskLevel[0]);\n    const getRisk = async ()=>{\n        var _result, _result1;\n        const result = await (0,_utils_httpResquest__WEBPACK_IMPORTED_MODULE_3__.makeRequest)(riskScore);\n        console.log({\n            result: (_result = result) === null || _result === void 0 ? void 0 : _result.risk\n        });\n        setRisk((_result1 = result) === null || _result1 === void 0 ? void 0 : _result1.risk);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                await getRisk();\n            // Handle successful result or state updates here\n            } catch (error) {\n            // Handle errors here\n            }\n        };\n        fetchData();\n    }, [\n        riskScore\n    ]);\n    const [fuel, setFuel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-bold text-3xl text-white md:text-5xl\",\n                    children: \"Risk Checker\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-customgreen w-full md:w-[1000px] self-center rounded-2xl flex items-start justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center w-full md:w-[420px] h-[73px] md:absolute rounded-2xl bg-custom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-fit\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Listbox_join_components_listbox_listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Listbox, {\n                                value: selected,\n                                onChange: (e)=>{\n                                    setSelected(e); // Update the selected option in state\n                                    setFuel(e.value);\n                                    setRiskScore(Number(selected.title)) // Update the URL search parameters and navigate to the new URL\n                                    ;\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Listbox_join_components_listbox_listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Listbox.Button, {\n                                            className: \"relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"block truncate text-slate-800\",\n                                                    children: selected.title\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"/assets/svg/chevron-up-down.svg\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    className: \"ml-4 object-contain\",\n                                                    alt: \"chevron_up-down\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Transition_join_components_transitions_transition_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {\n                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                            leave: \"transition ease-in duration-100\",\n                                            leaveFrom: \"opacity-100\",\n                                            leaveTo: \"opacity-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Listbox_join_components_listbox_listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Listbox.Options, {\n                                                className: \"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm\",\n                                                children: _constants__WEBPACK_IMPORTED_MODULE_4__.riskLevel.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Listbox_join_components_listbox_listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Listbox.Option, {\n                                                        className: (param)=>{\n                                                            let { active } = param;\n                                                            return \"relative cursor-default select-none py-2 px-4 \".concat(active ? \"bg-blue-600 text-white\" : \"text-gray-900\");\n                                                        },\n                                                        value: option,\n                                                        children: (param)=>/*#__PURE__*/ {\n                                                            let { selected } = param;\n                                                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"block truncate \".concat(selected ? \"font-medium\" : \"font-normal\"),\n                                                                    children: option.title\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                                    lineNumber: 83,\n                                                                    columnNumber: 29\n                                                                }, undefined)\n                                                            }, void 0, false);\n                                                        }\n                                                    }, option.title, false, {\n                                                        fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 23\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white px-2 flex w-full md:w-[950px] h-auto md:h-[300px] mt-6 md:mt-32 rounded-tl-none rounded-tr-none rounded-br-2xl rounded-bl-2xl\",\n                        children: ((_risk = risk) === null || _risk === void 0 ? void 0 : _risk.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: riskProperties.map((property)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    className: \"font-medium text-black text-base md:text-xl\",\n                                                    children: property.label\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-normal text-black text-sm md:text-lg\",\n                                                    children: risk[0][property.key]\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, property.key, true, {\n                                        fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\copy\\\\SubshareWeb-Frontend copy\\\\components\\\\landingpage\\\\Riskchecker.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Riskchecker, \"rxy+HqjnvjZqz2UFKNVHI41bR/8=\");\n_c = Riskchecker;\n// Define an array for risk properties to avoid repeating similar code for each property\nconst riskProperties = [\n    {\n        key: \"nigerianStocks\",\n        label: \"Nigerian Stocks\"\n    },\n    {\n        key: \"foreignStocks\",\n        label: \"Foreign Stocks\"\n    },\n    {\n        key: \"techStocks\",\n        label: \"Tech Stocks\"\n    },\n    {\n        key: \"emergingStocks\",\n        label: \"Emerging Stocks\"\n    },\n    {\n        key: \"nigerianBonds\",\n        label: \"Nigerian Bonds\"\n    },\n    {\n        key: \"foreignBonds\",\n        label: \"Foreign Bonds\"\n    },\n    {\n        key: \"commodities\",\n        label: \"Commodities\"\n    },\n    {\n        key: \"realEstate\",\n        label: \"Real Estate\"\n    },\n    {\n        key: \"tBills\",\n        label: \"T Bills\"\n    },\n    {\n        key: \"alternative\",\n        label: \"Alternative\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"Riskchecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmdwYWdlL1Jpc2tjaGVja2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQzlCO0FBQ3lCO0FBQUE7QUFDTDtBQUNYO0FBRWpDLE1BQU1TLGNBQWM7UUEwRmhCQzs7SUF6RlQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sTUFBTUcsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzFDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQ0ssaURBQVMsQ0FBQyxFQUFFO0lBRXJELE1BQU1RLFVBQVU7WUFFUUMsU0FDZEE7UUFGUixNQUFNQSxTQUFTLE1BQU1WLGdFQUFXQSxDQUFDSTtRQUNqQ08sUUFBUUMsR0FBRyxDQUFDO1lBQUVGLE1BQU0sR0FBRUEsVUFBQUEsb0JBQUFBLDhCQUFBQSxRQUFRUCxJQUFJO1FBQUM7UUFDbkNHLFNBQVFJLFdBQUFBLG9CQUFBQSwrQkFBQUEsU0FBUVAsSUFBSTtJQUN0QjtJQUVBUixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUo7WUFDTixpREFBaUQ7WUFDbkQsRUFBRSxPQUFPSyxPQUFPO1lBQ2QscUJBQXFCO1lBQ3ZCO1FBQ0Y7UUFFQUQ7SUFDRixHQUFHO1FBQUNUO0tBQVU7SUFFZCxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRWpDLHFCQUNFOzswQkFDRSw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBNEM7Ozs7Ozs7Ozs7OzBCQUc1RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNwQiwySEFBT0E7Z0NBQ05zQixPQUFPYjtnQ0FDUGMsVUFBVSxDQUFDQztvQ0FDVGQsWUFBWWMsSUFBSSxzQ0FBc0M7b0NBQ3RETixRQUFRTSxFQUFFRixLQUFLO29DQUNmZixhQUFha0IsT0FBT2hCLFNBQVNpQixLQUFLLEdBQUcsK0RBQStEOztnQ0FDdEc7MENBRUEsNEVBQUNQO29DQUFJQyxXQUFVOztzREFFYiw4REFBQ3BCLDJIQUFPQSxDQUFDMkIsTUFBTTs0Q0FBQ1AsV0FBVTs7OERBQ3hCLDhEQUFDUTtvREFBS1IsV0FBVTs4REFBaUNYLFNBQVNpQixLQUFLOzs7Ozs7OERBQy9ELDhEQUFDM0IsbURBQUtBO29EQUNKOEIsS0FBSTtvREFDSkMsT0FBTztvREFDUEMsUUFBUTtvREFDUlgsV0FBVTtvREFDVlksS0FBSTs7Ozs7Ozs7Ozs7O3NEQUlSLDhEQUFDL0Isd0lBQVVBOzRDQUNUZ0MsSUFBSXJDLDJDQUFRQTs0Q0FDWnNDLE9BQU07NENBQ05DLFdBQVU7NENBQ1ZDLFNBQVE7c0RBRVIsNEVBQUNwQywySEFBT0EsQ0FBQ3FDLE9BQU87Z0RBQUNqQixXQUFVOzBEQUV4QmpCLGlEQUFTQSxDQUFDbUMsR0FBRyxDQUFDLENBQUNDLHVCQUNkLDhEQUFDdkMsMkhBQU9BLENBQUN3QyxNQUFNO3dEQUVicEIsV0FBVztnRUFBQyxFQUFFcUIsTUFBTSxFQUFFO21FQUNwQixpREFFQyxPQURDQSxTQUFTLDJCQUEyQjt3REFDckM7d0RBRUhuQixPQUFPaUI7a0VBRU47Z0VBQUMsRUFBRTlCLFFBQVEsRUFBRTttRUFDWjswRUFDRSw0RUFBQ21CO29FQUFLUixXQUFXLGtCQUEyRCxPQUF6Q1gsV0FBVyxnQkFBZ0I7OEVBQzNEOEIsT0FBT2IsS0FBSzs7Ozs7Ozt3REFFZjt1REFiQ2EsT0FBT2IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQXVCakMsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUNaZixFQUFBQSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1xQyxNQUFNLG1CQUNYLDhEQUFDQzs0QkFBTXZCLFdBQVU7c0NBQ2YsNEVBQUN3QjswQ0FDRUMsZUFBZVAsR0FBRyxDQUFDLENBQUNRLHlCQUNuQiw4REFBQ0M7OzBEQUNDLDhEQUFDQzswREFDQyw0RUFBQ0M7b0RBQUc3QixXQUFVOzhEQUErQzBCLFNBQVNJLEtBQUs7Ozs7Ozs7Ozs7OzBEQUU3RSw4REFBQ0Y7MERBQ0MsNEVBQUNHO29EQUFFL0IsV0FBVTs4REFBNkNmLElBQUksQ0FBQyxFQUFFLENBQUN5QyxTQUFTTSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozt1Q0FMMUVOLFNBQVNNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnZDLEVBQUU7R0E5R1doRDtLQUFBQTtBQWdIYix3RkFBd0Y7QUFDeEYsTUFBTXlDLGlCQUFpQjtJQUNyQjtRQUFFTyxLQUFLO1FBQWtCRixPQUFPO0lBQWtCO0lBQ2xEO1FBQUVFLEtBQUs7UUFBaUJGLE9BQU87SUFBaUI7SUFDaEQ7UUFBRUUsS0FBSztRQUFjRixPQUFPO0lBQWM7SUFDMUM7UUFBRUUsS0FBSztRQUFrQkYsT0FBTztJQUFrQjtJQUNsRDtRQUFFRSxLQUFLO1FBQWlCRixPQUFPO0lBQWlCO0lBQ2hEO1FBQUVFLEtBQUs7UUFBZ0JGLE9BQU87SUFBZ0I7SUFDOUM7UUFBRUUsS0FBSztRQUFlRixPQUFPO0lBQWM7SUFDM0M7UUFBRUUsS0FBSztRQUFjRixPQUFPO0lBQWM7SUFDMUM7UUFBRUUsS0FBSztRQUFVRixPQUFPO0lBQVU7SUFDbEM7UUFBRUUsS0FBSztRQUFlRixPQUFPO0lBQWM7Q0FDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYW5kaW5ncGFnZS9SaXNrY2hlY2tlci50c3g/MGVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgTGlzdGJveCwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdAL3V0aWxzL2h0dHBSZXNxdWVzdCc7XHJcbmltcG9ydCB7IHJpc2tMZXZlbCB9IGZyb20gJ0AvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBSaXNrY2hlY2tlciA9ICgpID0+IHtcclxuICBjb25zdCBbcmlza1Njb3JlLCBzZXRSaXNrU2NvcmVdID0gdXNlU3RhdGUoNyk7XHJcbiAgY29uc3QgW3Jpc2ssIHNldFJpc2tdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKHJpc2tMZXZlbFswXSk7XHJcblxyXG4gIGNvbnN0IGdldFJpc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlUmVxdWVzdChyaXNrU2NvcmUpO1xyXG4gICAgY29uc29sZS5sb2coeyByZXN1bHQ6IHJlc3VsdD8ucmlzayB9KTtcclxuICAgIHNldFJpc2socmVzdWx0Py5yaXNrKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGdldFJpc2soKTtcclxuICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc2Z1bCByZXN1bHQgb3Igc3RhdGUgdXBkYXRlcyBoZXJlXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3Jpc2tTY29yZV0pO1xyXG5cclxuICBjb25zdCBbZnVlbCwgc2V0RnVlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNSc+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtM3hsIHRleHQtd2hpdGUgbWQ6dGV4dC01eGwnPlJpc2sgQ2hlY2tlcjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGJnLWN1c3RvbWdyZWVuIHctZnVsbCBtZDp3LVsxMDAwcHhdIHNlbGYtY2VudGVyIHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy1bNDIwcHhdIGgtWzczcHhdIG1kOmFic29sdXRlIHJvdW5kZWQtMnhsIGJnLWN1c3RvbSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1maXQnPlxyXG4gICAgICAgICAgICA8TGlzdGJveFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGUpOyAvLyBVcGRhdGUgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgc2V0RnVlbChlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFJpc2tTY29yZShOdW1iZXIoc2VsZWN0ZWQudGl0bGUpKSAvLyBVcGRhdGUgdGhlIFVSTCBzZWFyY2ggcGFyYW1ldGVycyBhbmQgbmF2aWdhdGUgdG8gdGhlIG5ldyBVUkxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCB6LTEwJz5cclxuICAgICAgICAgICAgICAgIHsvKiBCdXR0b24gZm9yIHRoZSBsaXN0Ym94ICovfVxyXG4gICAgICAgICAgICAgICAgPExpc3Rib3guQnV0dG9uIGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIG1pbi13LVsxMjdweF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGN1cnNvci1kZWZhdWx0IHJvdW5kZWQtbGcgYmctd2hpdGUgcHktMiBweC0zIHRleHQtbGVmdCBzaGFkb3ctbWQgc206dGV4dC1zbSBib3JkZXInPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Jsb2NrIHRydW5jYXRlIHRleHQtc2xhdGUtODAwJz57c2VsZWN0ZWQudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvc3ZnL2NoZXZyb24tdXAtZG93bi5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC00IG9iamVjdC1jb250YWluJ1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0nY2hldnJvbl91cC1kb3duJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Ym94LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIHsvKiBUcmFuc2l0aW9uIGZvciBkaXNwbGF5aW5nIHRoZSBvcHRpb25zICovfVxyXG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fSAvLyBncm91cCBtdWx0aXBsZSBlbGVtZW50cyB3aXRob3V0IGludHJvZHVjaW5nIGFuIGFkZGl0aW9uYWwgRE9NIG5vZGUgaS5lLiwgPD48Lz5cclxuICAgICAgICAgICAgICAgICAgbGVhdmU9J3RyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDAnXHJcbiAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT0nb3BhY2l0eS0xMDAnXHJcbiAgICAgICAgICAgICAgICAgIGxlYXZlVG89J29wYWNpdHktMCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3Rib3guT3B0aW9ucyBjbGFzc05hbWU9J2Fic29sdXRlIG10LTEgbWF4LWgtNjAgdy1mdWxsIG92ZXJmbG93LWF1dG8gcm91bmRlZC1tZCBiZy13aGl0ZSBweS0xIHRleHQtYmFzZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lIHNtOnRleHQtc20nPlxyXG4gICAgICAgICAgICAgICAgey8qIE1hcCBvdmVyIHRoZSBvcHRpb25zIGFuZCBkaXNwbGF5IHRoZW0gYXMgbGlzdGJveCBvcHRpb25zICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyaXNrTGV2ZWwubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Ym94Lk9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBhY3RpdmUgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgcmVsYXRpdmUgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgcHktMiBweC00ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctYmx1ZS02MDAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTkwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBzZWxlY3RlZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJsb2NrIHRydW5jYXRlICR7c2VsZWN0ZWQgPyAnZm9udC1tZWRpdW0nIDogJ2ZvbnQtbm9ybWFsJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGJveC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdGJveC5PcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpc3Rib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcHgtMiBmbGV4IHctZnVsbCBtZDp3LVs5NTBweF0gaC1hdXRvIG1kOmgtWzMwMHB4XSBtdC02IG1kOm10LTMyIHJvdW5kZWQtdGwtbm9uZSByb3VuZGVkLXRyLW5vbmUgcm91bmRlZC1ici0yeGwgcm91bmRlZC1ibC0yeGwnPlxyXG4gICAgICAgICAge3Jpc2s/Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3ctZnVsbCc+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3Jpc2tQcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17cHJvcGVydHkua2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdmb250LW1lZGl1bSB0ZXh0LWJsYWNrIHRleHQtYmFzZSBtZDp0ZXh0LXhsJz57cHJvcGVydHkubGFiZWx9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ub3JtYWwgdGV4dC1ibGFjayB0ZXh0LXNtIG1kOnRleHQtbGcnPntyaXNrWzBdW3Byb3BlcnR5LmtleV19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRGVmaW5lIGFuIGFycmF5IGZvciByaXNrIHByb3BlcnRpZXMgdG8gYXZvaWQgcmVwZWF0aW5nIHNpbWlsYXIgY29kZSBmb3IgZWFjaCBwcm9wZXJ0eVxyXG5jb25zdCByaXNrUHJvcGVydGllcyA9IFtcclxuICB7IGtleTogJ25pZ2VyaWFuU3RvY2tzJywgbGFiZWw6ICdOaWdlcmlhbiBTdG9ja3MnIH0sXHJcbiAgeyBrZXk6ICdmb3JlaWduU3RvY2tzJywgbGFiZWw6ICdGb3JlaWduIFN0b2NrcycgfSxcclxuICB7IGtleTogJ3RlY2hTdG9ja3MnLCBsYWJlbDogJ1RlY2ggU3RvY2tzJyB9LFxyXG4gIHsga2V5OiAnZW1lcmdpbmdTdG9ja3MnLCBsYWJlbDogJ0VtZXJnaW5nIFN0b2NrcycgfSxcclxuICB7IGtleTogJ25pZ2VyaWFuQm9uZHMnLCBsYWJlbDogJ05pZ2VyaWFuIEJvbmRzJyB9LFxyXG4gIHsga2V5OiAnZm9yZWlnbkJvbmRzJywgbGFiZWw6ICdGb3JlaWduIEJvbmRzJyB9LFxyXG4gIHsga2V5OiAnY29tbW9kaXRpZXMnLCBsYWJlbDogJ0NvbW1vZGl0aWVzJyB9LFxyXG4gIHsga2V5OiAncmVhbEVzdGF0ZScsIGxhYmVsOiAnUmVhbCBFc3RhdGUnIH0sXHJcbiAgeyBrZXk6ICd0QmlsbHMnLCBsYWJlbDogJ1QgQmlsbHMnIH0sXHJcbiAgeyBrZXk6ICdhbHRlcm5hdGl2ZScsIGxhYmVsOiAnQWx0ZXJuYXRpdmUnIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpc3Rib3giLCJUcmFuc2l0aW9uIiwibWFrZVJlcXVlc3QiLCJyaXNrTGV2ZWwiLCJSaXNrY2hlY2tlciIsInJpc2siLCJyaXNrU2NvcmUiLCJzZXRSaXNrU2NvcmUiLCJzZXRSaXNrIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImdldFJpc2siLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEYXRhIiwiZXJyb3IiLCJmdWVsIiwic2V0RnVlbCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJOdW1iZXIiLCJ0aXRsZSIsIkJ1dHRvbiIsInNwYW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImFzIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiT3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsIk9wdGlvbiIsImFjdGl2ZSIsImxlbmd0aCIsInRhYmxlIiwidGJvZHkiLCJyaXNrUHJvcGVydGllcyIsInByb3BlcnR5IiwidHIiLCJ0ZCIsImg0IiwibGFiZWwiLCJwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/landingpage/Riskchecker.tsx\n"));

/***/ })

});