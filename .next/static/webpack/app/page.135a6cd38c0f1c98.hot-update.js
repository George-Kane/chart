"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/.pnpm/react-chartjs-2@5.2.0_chart.js@4.4.4_react@18.3.1/node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/.pnpm/chart.js@4.4.4/node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _utils_downsample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/downsample */ \"(app-pages-browser)/./src/utils/downsample.ts\");\n/* harmony import */ var _utils_errorMarginPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/errorMarginPlugin */ \"(app-pages-browser)/./src/utils/errorMarginPlugin.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_4__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.Title, chart_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_4__.Legend, _utils_errorMarginPlugin__WEBPACK_IMPORTED_MODULE_3__.errorMarginPlugin);\nconst App = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [downsampledData, setDownsampledData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [updateInterval, setUpdateInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);\n    const [updateStep, setUpdateStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [aggregates, setAggregates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        min: 0,\n        max: 0,\n        average: 0,\n        variance: 0\n    });\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId;\n        if (isPlaying) {\n            intervalId = setInterval(()=>{\n                setStartIndex((prevIndex)=>Math.min(prevIndex + updateStep, data.length - windowSize));\n            }, updateInterval);\n        }\n        return ()=>clearInterval(intervalId);\n    }, [\n        isPlaying,\n        updateInterval,\n        updateStep,\n        data.length,\n        windowSize\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data.length > 0) {\n            const sampled = (0,_utils_downsample__WEBPACK_IMPORTED_MODULE_2__.downsampleData)(data.slice(startIndex, startIndex + windowSize), 1000);\n            setDownsampledData(sampled);\n            calculateAggregates();\n        }\n    }, [\n        data,\n        startIndex,\n        windowSize\n    ]);\n    const handleFileUpload = (event)=>{\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        reader.onload = (e)=>{\n            const content = e.target.result;\n            const parsedData = parseCSV(content);\n            setData(parsedData);\n            setStartIndex(0);\n        };\n        reader.readAsText(file);\n    };\n    const parseCSV = (content)=>{\n        const lines = content.split(\"\\n\");\n        const data = [];\n        for(let i = 0; i < lines.length; i++){\n            const [x, y] = lines[i].split(\",\");\n            if (x && y) {\n                data.push({\n                    x: parseFloat(x),\n                    y: parseFloat(y)\n                });\n            }\n        }\n        if (data.length > 100000000) return alert(\"Too many points\");\n        return data;\n    };\n    const calculateAggregates = ()=>{\n        const windowData = data.slice(startIndex, startIndex + windowSize);\n        const yValues = windowData.map((point)=>point.y);\n        const min = Math.min(...yValues);\n        const max = Math.max(...yValues);\n        const average = yValues.reduce((sum, val)=>sum + val, 0) / yValues.length;\n        const variance = yValues.reduce((sum, val)=>sum + Math.pow(val - average, 2), 0) / yValues.length;\n        setAggregates({\n            min,\n            max,\n            average,\n            variance\n        });\n    };\n    const chartData = {\n        labels: downsampledData.slice(startIndex, startIndex + windowSize).map((point)=>point.x),\n        datasets: [\n            {\n                label: \"Data Series\",\n                data: downsampledData.slice(startIndex, startIndex + windowSize).map((point)=>point.y),\n                borderColor: \"rgb(75, 192, 192)\",\n                tension: 0.1\n            },\n            {\n                label: \"Error Margin\",\n                data: data.slice(startIndex, startIndex + windowSize).map((point)=>({\n                        x: point.x,\n                        y: point.y - Math.sqrt(aggregates.variance),\n                        y1: point.y + Math.sqrt(aggregates.variance)\n                    })),\n                backgroundColor: \"rgba(75, 192, 192, 0.2)\",\n                borderColor: \"transparent\",\n                pointRadius: 0,\n                fill: true,\n                tension: 0.1\n            }\n        ]\n    };\n    const chartOptions = {\n        scales: {\n            x: {\n                type: \"linear\",\n                position: \"bottom\"\n            },\n            y: {\n                type: \"linear\",\n                position: \"left\"\n            }\n        },\n        plugins: {\n            legend: {\n                display: true\n            },\n            errorMarginPlugin: {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                ref: fileInputRef,\n                onChange: handleFileUpload,\n                accept: \".csv\"\n            }, void 0, false, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 160,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Window Size: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: windowSize,\n                        onChange: (e)=>setWindowSize(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 166,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Start Index: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: startIndex,\n                        onChange: (e)=>setStartIndex(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 174,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Update Interval (ms): \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: updateInterval,\n                        onChange: (e)=>setUpdateInterval(Number(e.target.value)),\n                        min: \"16\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 184,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 182,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Update Step: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: updateStep,\n                        onChange: (e)=>setUpdateStep(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 191,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsPlaying(!isPlaying),\n                children: isPlaying ? \"Stop\" : \"Start\"\n            }, void 0, false, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 199,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Line, {\n                data: chartData,\n                options: chartOptions\n            }, void 0, false, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 202,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Aggregates:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 204,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Min: \",\n                            aggregates.min.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 205,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Max: \",\n                            aggregates.max.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 206,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Average: \",\n                            aggregates.average.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 207,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Variance: \",\n                            aggregates.variance.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 208,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 203,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n        lineNumber: 159,\n        columnNumber: 3\n    }, undefined);\n};\n_s(App, \"Uh5n8Gbyjt+ms+3e2WeNeve8tG0=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7a0NBQ1AsOERBQUNnQjt3QkFDQU4sTUFBSzt3QkFDTFUsT0FBT3pFO3dCQUNQdUUsVUFBVSxDQUFDM0MsSUFBTTNCLGNBQWN5RSxPQUFPOUMsRUFBRUwsTUFBTSxDQUFDa0QsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUd0RCw4REFBQ0U7Z0JBQU9DLFNBQVMsSUFBTXpFLGFBQWEsQ0FBQ0Q7MEJBQ25DQSxZQUFZLFNBQVM7Ozs7OzswQkFFdkIsOERBQUMxQixpREFBSUE7Z0JBQUNjLE1BQU00RDtnQkFBVzJCLFNBQVNoQjs7Ozs7OzBCQUNoQyw4REFBQ087O2tDQUNBLDhEQUFDVTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7NEJBQUU7NEJBQU0zRSxXQUFXRSxHQUFHLENBQUMwRSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ2hDLDhEQUFDRDs7NEJBQUU7NEJBQU0zRSxXQUFXRyxHQUFHLENBQUN5RSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ2hDLDhEQUFDRDs7NEJBQUU7NEJBQVUzRSxXQUFXSSxPQUFPLENBQUN3RSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ3hDLDhEQUFDRDs7NEJBQUU7NEJBQVczRSxXQUFXSyxRQUFRLENBQUN1RSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0F2TE0zRjtLQUFBQTtBQXlMTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IHtcblx0Q2hhcnQgYXMgQ2hhcnRKUyxcblx0Q2F0ZWdvcnlTY2FsZSxcblx0TGluZWFyU2NhbGUsXG5cdFBvaW50RWxlbWVudCxcblx0TGluZUVsZW1lbnQsXG5cdFRpdGxlLFxuXHRUb29sdGlwLFxuXHRMZWdlbmQsXG59IGZyb20gJ2NoYXJ0LmpzJztcblxuaW1wb3J0IHsgZG93bnNhbXBsZURhdGEgfSBmcm9tICdAL3V0aWxzL2Rvd25zYW1wbGUnO1xuaW1wb3J0IHsgZXJyb3JNYXJnaW5QbHVnaW4gfSBmcm9tICdAL3V0aWxzL2Vycm9yTWFyZ2luUGx1Z2luJztcblxuQ2hhcnRKUy5yZWdpc3Rlcihcblx0Q2F0ZWdvcnlTY2FsZSxcblx0TGluZWFyU2NhbGUsXG5cdFBvaW50RWxlbWVudCxcblx0TGluZUVsZW1lbnQsXG5cdFRpdGxlLFxuXHRUb29sdGlwLFxuXHRMZWdlbmQsXG5cdGVycm9yTWFyZ2luUGx1Z2luXG4pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoMTAwKTtcblx0Y29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtkb3duc2FtcGxlZERhdGEsIHNldERvd25zYW1wbGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFt1cGRhdGVJbnRlcnZhbCwgc2V0VXBkYXRlSW50ZXJ2YWxdID0gdXNlU3RhdGUoNTAwKTtcblx0Y29uc3QgW3VwZGF0ZVN0ZXAsIHNldFVwZGF0ZVN0ZXBdID0gdXNlU3RhdGUoMTApO1xuXHRjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbYWdncmVnYXRlcywgc2V0QWdncmVnYXRlc10gPSB1c2VTdGF0ZSh7XG5cdFx0bWluOiAwLFxuXHRcdG1heDogMCxcblx0XHRhdmVyYWdlOiAwLFxuXHRcdHZhcmlhbmNlOiAwLFxuXHR9KTtcblxuXHRjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgaW50ZXJ2YWxJZDtcblx0XHRpZiAoaXNQbGF5aW5nKSB7XG5cdFx0XHRpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRzZXRTdGFydEluZGV4KChwcmV2SW5kZXgpID0+XG5cdFx0XHRcdFx0TWF0aC5taW4ocHJldkluZGV4ICsgdXBkYXRlU3RlcCwgZGF0YS5sZW5ndGggLSB3aW5kb3dTaXplKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgdXBkYXRlSW50ZXJ2YWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcblx0fSwgW2lzUGxheWluZywgdXBkYXRlSW50ZXJ2YWwsIHVwZGF0ZVN0ZXAsIGRhdGEubGVuZ3RoLCB3aW5kb3dTaXplXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBzYW1wbGVkID0gZG93bnNhbXBsZURhdGEoXG5cdFx0XHRcdGRhdGEuc2xpY2Uoc3RhcnRJbmRleCwgc3RhcnRJbmRleCArIHdpbmRvd1NpemUpLFxuXHRcdFx0XHQxMDAwXG5cdFx0XHQpO1xuXHRcdFx0c2V0RG93bnNhbXBsZWREYXRhKHNhbXBsZWQpO1xuXHRcdFx0Y2FsY3VsYXRlQWdncmVnYXRlcygpO1xuXHRcdH1cblx0fSwgW2RhdGEsIHN0YXJ0SW5kZXgsIHdpbmRvd1NpemVdKTtcblxuXHRjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdDtcblx0XHRcdGNvbnN0IHBhcnNlZERhdGEgPSBwYXJzZUNTVihjb250ZW50KTtcblx0XHRcdHNldERhdGEocGFyc2VkRGF0YSk7XG5cdFx0XHRzZXRTdGFydEluZGV4KDApO1xuXHRcdH07XG5cdFx0cmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG5cdH07XG5cblx0Y29uc3QgcGFyc2VDU1YgPSAoY29udGVudCkgPT4ge1xuXHRcdGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG5cdFx0Y29uc3QgZGF0YSA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IFt4LCB5XSA9IGxpbmVzW2ldLnNwbGl0KCcsJyk7XG5cdFx0XHRpZiAoeCAmJiB5KSB7XG5cdFx0XHRcdGRhdGEucHVzaCh7IHg6IHBhcnNlRmxvYXQoeCksIHk6IHBhcnNlRmxvYXQoeSkgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkYXRhLmxlbmd0aCA+IDEwMDAwMDAwMCkgcmV0dXJuIGFsZXJ0KCdUb28gbWFueSBwb2ludHMnKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblxuXHRjb25zdCBjYWxjdWxhdGVBZ2dyZWdhdGVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd0RhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyB3aW5kb3dTaXplKTtcblx0XHRjb25zdCB5VmFsdWVzID0gd2luZG93RGF0YS5tYXAoKHBvaW50KSA9PiBwb2ludC55KTtcblx0XHRjb25zdCBtaW4gPSBNYXRoLm1pbiguLi55VmFsdWVzKTtcblx0XHRjb25zdCBtYXggPSBNYXRoLm1heCguLi55VmFsdWVzKTtcblx0XHRjb25zdCBhdmVyYWdlID1cblx0XHRcdHlWYWx1ZXMucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKSAvIHlWYWx1ZXMubGVuZ3RoO1xuXHRcdGNvbnN0IHZhcmlhbmNlID1cblx0XHRcdHlWYWx1ZXMucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgTWF0aC5wb3codmFsIC0gYXZlcmFnZSwgMiksIDApIC9cblx0XHRcdHlWYWx1ZXMubGVuZ3RoO1xuXG5cdFx0c2V0QWdncmVnYXRlcyh7IG1pbiwgbWF4LCBhdmVyYWdlLCB2YXJpYW5jZSB9KTtcblx0fTtcblxuXHRjb25zdCBjaGFydERhdGEgPSB7XG5cdFx0bGFiZWxzOiBkb3duc2FtcGxlZERhdGFcblx0XHRcdC5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgd2luZG93U2l6ZSlcblx0XHRcdC5tYXAoKHBvaW50KSA9PiBwb2ludC54KSxcblx0XHRkYXRhc2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ0RhdGEgU2VyaWVzJyxcblx0XHRcdFx0ZGF0YTogZG93bnNhbXBsZWREYXRhXG5cdFx0XHRcdFx0LnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyB3aW5kb3dTaXplKVxuXHRcdFx0XHRcdC5tYXAoKHBvaW50KSA9PiBwb2ludC55KSxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoNzUsIDE5MiwgMTkyKScsXG5cdFx0XHRcdHRlbnNpb246IDAuMSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnRXJyb3IgTWFyZ2luJyxcblx0XHRcdFx0ZGF0YTogZGF0YVxuXHRcdFx0XHRcdC5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgd2luZG93U2l6ZSlcblx0XHRcdFx0XHQubWFwKChwb2ludCkgPT4gKHtcblx0XHRcdFx0XHRcdHg6IHBvaW50LngsXG5cdFx0XHRcdFx0XHR5OiBwb2ludC55IC0gTWF0aC5zcXJ0KGFnZ3JlZ2F0ZXMudmFyaWFuY2UpLFxuXHRcdFx0XHRcdFx0eTE6IHBvaW50LnkgKyBNYXRoLnNxcnQoYWdncmVnYXRlcy52YXJpYW5jZSksXG5cdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG5cdFx0XHRcdGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRwb2ludFJhZGl1czogMCxcblx0XHRcdFx0ZmlsbDogdHJ1ZSxcblx0XHRcdFx0dGVuc2lvbjogMC4xLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9O1xuXG5cdGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcblx0XHRzY2FsZXM6IHtcblx0XHRcdHg6IHtcblx0XHRcdFx0dHlwZTogJ2xpbmVhcicsXG5cdFx0XHRcdHBvc2l0aW9uOiAnYm90dG9tJyxcblx0XHRcdH0sXG5cdFx0XHR5OiB7XG5cdFx0XHRcdHR5cGU6ICdsaW5lYXInLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2xlZnQnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBsdWdpbnM6IHtcblx0XHRcdGxlZ2VuZDoge1xuXHRcdFx0XHRkaXNwbGF5OiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdGVycm9yTWFyZ2luUGx1Z2luOiB7fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR0eXBlPVwiZmlsZVwiXG5cdFx0XHRcdHJlZj17ZmlsZUlucHV0UmVmfVxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRmlsZVVwbG9hZH1cblx0XHRcdFx0YWNjZXB0PVwiLmNzdlwiXG5cdFx0XHQvPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGxhYmVsPldpbmRvdyBTaXplOiA8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHR2YWx1ZT17d2luZG93U2l6ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFdpbmRvd1NpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxsYWJlbD5TdGFydCBJbmRleDogPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0dmFsdWU9e3N0YXJ0SW5kZXh9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTdGFydEluZGV4KE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8bGFiZWw+VXBkYXRlIEludGVydmFsIChtcyk6IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdHZhbHVlPXt1cGRhdGVJbnRlcnZhbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVwZGF0ZUludGVydmFsKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuXHRcdFx0XHRcdG1pbj1cIjE2XCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGxhYmVsPlVwZGF0ZSBTdGVwOiA8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHR2YWx1ZT17dXBkYXRlU3RlcH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVwZGF0ZVN0ZXAoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpfT5cblx0XHRcdFx0e2lzUGxheWluZyA/ICdTdG9wJyA6ICdTdGFydCd9XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxMaW5lIGRhdGE9e2NoYXJ0RGF0YX0gb3B0aW9ucz17Y2hhcnRPcHRpb25zfSAvPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPkFnZ3JlZ2F0ZXM6PC9oMz5cblx0XHRcdFx0PHA+TWluOiB7YWdncmVnYXRlcy5taW4udG9GaXhlZCgyKX08L3A+XG5cdFx0XHRcdDxwPk1heDoge2FnZ3JlZ2F0ZXMubWF4LnRvRml4ZWQoMil9PC9wPlxuXHRcdFx0XHQ8cD5BdmVyYWdlOiB7YWdncmVnYXRlcy5hdmVyYWdlLnRvRml4ZWQoMil9PC9wPlxuXHRcdFx0XHQ8cD5WYXJpYW5jZToge2FnZ3JlZ2F0ZXMudmFyaWFuY2UudG9GaXhlZCgyKX08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGluZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiZG93bnNhbXBsZURhdGEiLCJlcnJvck1hcmdpblBsdWdpbiIsInJlZ2lzdGVyIiwiQXBwIiwiZGF0YSIsInNldERhdGEiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInN0YXJ0SW5kZXgiLCJzZXRTdGFydEluZGV4IiwiZG93bnNhbXBsZWREYXRhIiwic2V0RG93bnNhbXBsZWREYXRhIiwidXBkYXRlSW50ZXJ2YWwiLCJzZXRVcGRhdGVJbnRlcnZhbCIsInVwZGF0ZVN0ZXAiLCJzZXRVcGRhdGVTdGVwIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiYWdncmVnYXRlcyIsInNldEFnZ3JlZ2F0ZXMiLCJtaW4iLCJtYXgiLCJhdmVyYWdlIiwidmFyaWFuY2UiLCJmaWxlSW5wdXRSZWYiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJNYXRoIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNhbXBsZWQiLCJzbGljZSIsImNhbGN1bGF0ZUFnZ3JlZ2F0ZXMiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImNvbnRlbnQiLCJyZXN1bHQiLCJwYXJzZWREYXRhIiwicGFyc2VDU1YiLCJyZWFkQXNUZXh0IiwibGluZXMiLCJzcGxpdCIsImkiLCJ4IiwieSIsInB1c2giLCJwYXJzZUZsb2F0IiwiYWxlcnQiLCJ3aW5kb3dEYXRhIiwieVZhbHVlcyIsIm1hcCIsInBvaW50IiwicmVkdWNlIiwic3VtIiwidmFsIiwicG93IiwiY2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwidGVuc2lvbiIsInNxcnQiLCJ5MSIsImJhY2tncm91bmRDb2xvciIsInBvaW50UmFkaXVzIiwiZmlsbCIsImNoYXJ0T3B0aW9ucyIsInNjYWxlcyIsInR5cGUiLCJwb3NpdGlvbiIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwiZGl2IiwiaW5wdXQiLCJyZWYiLCJvbkNoYW5nZSIsImFjY2VwdCIsInZhbHVlIiwiTnVtYmVyIiwiYnV0dG9uIiwib25DbGljayIsIm9wdGlvbnMiLCJoMyIsInAiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});