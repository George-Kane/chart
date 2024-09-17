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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/.pnpm/react-chartjs-2@5.2.0_chart.js@4.4.4_react@18.3.1/node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/.pnpm/chart.js@4.4.4/node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _utils_downsample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/downsample */ \"(app-pages-browser)/./src/utils/downsample.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_3__.Filler);\nconst App = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [downsampledData, setDownsampledData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [updateInterval, setUpdateInterval] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);\n    const [updateStep, setUpdateStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [aggregates, setAggregates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        min: 0,\n        max: 0,\n        average: 0,\n        variance: 0\n    });\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId;\n        if (isPlaying) {\n            intervalId = setInterval(()=>{\n                setStartIndex((prevIndex)=>Math.min(prevIndex + updateStep, data.length - windowSize));\n            }, updateInterval);\n        }\n        return ()=>clearInterval(intervalId);\n    }, [\n        isPlaying,\n        updateInterval,\n        updateStep,\n        data.length,\n        windowSize\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data.length > 0) {\n            const sampled = (0,_utils_downsample__WEBPACK_IMPORTED_MODULE_2__.downsampleData)(data.slice(startIndex, startIndex + windowSize), 1000);\n            setDownsampledData(sampled);\n            calculateAggregates();\n        }\n    }, [\n        data,\n        startIndex,\n        windowSize\n    ]);\n    const handleFileUpload = (event)=>{\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        reader.onload = (e)=>{\n            const content = e.target.result;\n            const parsedData = parseCSV(content);\n            setData(parsedData);\n            setStartIndex(0);\n        };\n        reader.readAsText(file);\n    };\n    const parseCSV = (content)=>{\n        const lines = content.split(\"\\n\");\n        const data = [];\n        for(let i = 0; i < lines.length; i++){\n            const [x, y] = lines[i].split(\",\");\n            if (x && y) {\n                data.push({\n                    x: parseFloat(x),\n                    y: parseFloat(y)\n                });\n            }\n        }\n        if (data.length > 100000000) return alert(\"Too many points\");\n        return data;\n    };\n    const calculateAggregates = ()=>{\n        const windowData = data.slice(startIndex, startIndex + windowSize);\n        const yValues = windowData.map((point)=>point.y);\n        const min = Math.min(...yValues);\n        const max = Math.max(...yValues);\n        const average = yValues.reduce((sum, val)=>sum + val, 0) / yValues.length;\n        const variance = yValues.reduce((sum, val)=>sum + Math.pow(val - average, 2), 0) / yValues.length;\n        setAggregates({\n            min,\n            max,\n            average,\n            variance\n        });\n    };\n    const chartData = {\n        labels: downsampledData.slice(startIndex, startIndex + windowSize).map((point)=>point.x),\n        datasets: [\n            {\n                label: \"Data Series\",\n                data: downsampledData.slice(startIndex, startIndex + windowSize).map((point)=>point.y),\n                borderColor: \"rgb(75, 192, 192)\",\n                tension: 0.1\n            },\n            {\n                label: \"Upper Error Margin\",\n                data: visibleData.map((point)=>point.y + Math.sqrt(aggregates.variance)),\n                borderColor: \"transparent\",\n                backgroundColor: \"rgba(75, 192, 192, 0.2)\",\n                pointRadius: 0,\n                fill: \"+1\"\n            },\n            {\n                label: \"Lower Error Margin\",\n                data: visibleData.map((point)=>point.y - Math.sqrt(aggregates.variance)),\n                borderColor: \"transparent\",\n                backgroundColor: \"rgba(75, 192, 192, 0.2)\",\n                pointRadius: 0,\n                fill: false\n            }\n        ]\n    };\n    const chartOptions = {\n        scales: {\n            x: {\n                type: \"linear\",\n                position: \"bottom\"\n            },\n            y: {\n                type: \"linear\",\n                position: \"left\"\n            }\n        },\n        plugins: {\n            legend: {\n                display: true\n            },\n            errorMarginPlugin: {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                ref: fileInputRef,\n                onChange: handleFileUpload,\n                accept: \".csv\"\n            }, void 0, false, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 166,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Window Size: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: windowSize,\n                        onChange: (e)=>setWindowSize(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 172,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Start Index: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: startIndex,\n                        onChange: (e)=>setStartIndex(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 182,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 180,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Update Interval (ms): \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 189,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: updateInterval,\n                        onChange: (e)=>setUpdateInterval(Number(e.target.value)),\n                        min: \"16\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 190,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 188,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Update Step: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 198,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: updateStep,\n                        onChange: (e)=>setUpdateStep(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 199,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 197,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsPlaying(!isPlaying),\n                children: isPlaying ? \"Stop\" : \"Start\"\n            }, void 0, false, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 205,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                data: chartData,\n                options: chartOptions\n            }, void 0, false, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 208,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Aggregates:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 210,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Min: \",\n                            aggregates.min.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 211,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Max: \",\n                            aggregates.max.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 212,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Average: \",\n                            aggregates.average.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 213,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Variance: \",\n                            aggregates.variance.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                        lineNumber: 214,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n                lineNumber: 209,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gk/Desktop/Dev/testing/chart/src/app/page.tsx\",\n        lineNumber: 165,\n        columnNumber: 3\n    }, undefined);\n};\n_s(App, \"Uh5n8Gbyjt+ms+3e2WeNeve8tG0=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ2hCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNpQjt3QkFDQVAsTUFBSzt3QkFDTFcsT0FBTzFFO3dCQUNQd0UsVUFBVSxDQUFDNUMsSUFBTTNCLGNBQWMwRSxPQUFPL0MsRUFBRUwsTUFBTSxDQUFDbUQsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUd0RCw4REFBQ0U7Z0JBQU9DLFNBQVMsSUFBTTFFLGFBQWEsQ0FBQ0Q7MEJBQ25DQSxZQUFZLFNBQVM7Ozs7OzswQkFFdkIsOERBQUMxQixpREFBSUE7Z0JBQUNjLE1BQU00RDtnQkFBVzRCLFNBQVNqQjs7Ozs7OzBCQUNoQyw4REFBQ1E7O2tDQUNBLDhEQUFDVTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7NEJBQUU7NEJBQU01RSxXQUFXRSxHQUFHLENBQUMyRSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ2hDLDhEQUFDRDs7NEJBQUU7NEJBQU01RSxXQUFXRyxHQUFHLENBQUMwRSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ2hDLDhEQUFDRDs7NEJBQUU7NEJBQVU1RSxXQUFXSSxPQUFPLENBQUN5RSxPQUFPLENBQUM7Ozs7Ozs7a0NBQ3hDLDhEQUFDRDs7NEJBQUU7NEJBQVc1RSxXQUFXSyxRQUFRLENBQUN3RSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0E1TE01RjtLQUFBQTtBQThMTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IHtcblx0Q2hhcnQgYXMgQ2hhcnRKUyxcblx0Q2F0ZWdvcnlTY2FsZSxcblx0TGluZWFyU2NhbGUsXG5cdFBvaW50RWxlbWVudCxcblx0TGluZUVsZW1lbnQsXG5cdFRpdGxlLFxuXHRUb29sdGlwLFxuXHRMZWdlbmQsXG5cdEZpbGxlcixcbn0gZnJvbSAnY2hhcnQuanMnO1xuXG5pbXBvcnQgeyBkb3duc2FtcGxlRGF0YSB9IGZyb20gJ0AvdXRpbHMvZG93bnNhbXBsZSc7XG5pbXBvcnQgeyBlcnJvck1hcmdpblBsdWdpbiB9IGZyb20gJ0AvdXRpbHMvZXJyb3JNYXJnaW5QbHVnaW4nO1xuXG5DaGFydEpTLnJlZ2lzdGVyKFxuXHRDYXRlZ29yeVNjYWxlLFxuXHRMaW5lYXJTY2FsZSxcblx0UG9pbnRFbGVtZW50LFxuXHRMaW5lRWxlbWVudCxcblx0VGl0bGUsXG5cdFRvb2x0aXAsXG5cdExlZ2VuZCxcblx0RmlsbGVyXG4pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoMTAwKTtcblx0Y29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtkb3duc2FtcGxlZERhdGEsIHNldERvd25zYW1wbGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFt1cGRhdGVJbnRlcnZhbCwgc2V0VXBkYXRlSW50ZXJ2YWxdID0gdXNlU3RhdGUoNTAwKTtcblx0Y29uc3QgW3VwZGF0ZVN0ZXAsIHNldFVwZGF0ZVN0ZXBdID0gdXNlU3RhdGUoMTApO1xuXHRjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbYWdncmVnYXRlcywgc2V0QWdncmVnYXRlc10gPSB1c2VTdGF0ZSh7XG5cdFx0bWluOiAwLFxuXHRcdG1heDogMCxcblx0XHRhdmVyYWdlOiAwLFxuXHRcdHZhcmlhbmNlOiAwLFxuXHR9KTtcblxuXHRjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgaW50ZXJ2YWxJZDtcblx0XHRpZiAoaXNQbGF5aW5nKSB7XG5cdFx0XHRpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRzZXRTdGFydEluZGV4KChwcmV2SW5kZXgpID0+XG5cdFx0XHRcdFx0TWF0aC5taW4ocHJldkluZGV4ICsgdXBkYXRlU3RlcCwgZGF0YS5sZW5ndGggLSB3aW5kb3dTaXplKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgdXBkYXRlSW50ZXJ2YWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcblx0fSwgW2lzUGxheWluZywgdXBkYXRlSW50ZXJ2YWwsIHVwZGF0ZVN0ZXAsIGRhdGEubGVuZ3RoLCB3aW5kb3dTaXplXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBzYW1wbGVkID0gZG93bnNhbXBsZURhdGEoXG5cdFx0XHRcdGRhdGEuc2xpY2Uoc3RhcnRJbmRleCwgc3RhcnRJbmRleCArIHdpbmRvd1NpemUpLFxuXHRcdFx0XHQxMDAwXG5cdFx0XHQpO1xuXHRcdFx0c2V0RG93bnNhbXBsZWREYXRhKHNhbXBsZWQpO1xuXHRcdFx0Y2FsY3VsYXRlQWdncmVnYXRlcygpO1xuXHRcdH1cblx0fSwgW2RhdGEsIHN0YXJ0SW5kZXgsIHdpbmRvd1NpemVdKTtcblxuXHRjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdDtcblx0XHRcdGNvbnN0IHBhcnNlZERhdGEgPSBwYXJzZUNTVihjb250ZW50KTtcblx0XHRcdHNldERhdGEocGFyc2VkRGF0YSk7XG5cdFx0XHRzZXRTdGFydEluZGV4KDApO1xuXHRcdH07XG5cdFx0cmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG5cdH07XG5cblx0Y29uc3QgcGFyc2VDU1YgPSAoY29udGVudCkgPT4ge1xuXHRcdGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG5cdFx0Y29uc3QgZGF0YSA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IFt4LCB5XSA9IGxpbmVzW2ldLnNwbGl0KCcsJyk7XG5cdFx0XHRpZiAoeCAmJiB5KSB7XG5cdFx0XHRcdGRhdGEucHVzaCh7IHg6IHBhcnNlRmxvYXQoeCksIHk6IHBhcnNlRmxvYXQoeSkgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkYXRhLmxlbmd0aCA+IDEwMDAwMDAwMCkgcmV0dXJuIGFsZXJ0KCdUb28gbWFueSBwb2ludHMnKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblxuXHRjb25zdCBjYWxjdWxhdGVBZ2dyZWdhdGVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd0RhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyB3aW5kb3dTaXplKTtcblx0XHRjb25zdCB5VmFsdWVzID0gd2luZG93RGF0YS5tYXAoKHBvaW50KSA9PiBwb2ludC55KTtcblx0XHRjb25zdCBtaW4gPSBNYXRoLm1pbiguLi55VmFsdWVzKTtcblx0XHRjb25zdCBtYXggPSBNYXRoLm1heCguLi55VmFsdWVzKTtcblx0XHRjb25zdCBhdmVyYWdlID1cblx0XHRcdHlWYWx1ZXMucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKSAvIHlWYWx1ZXMubGVuZ3RoO1xuXHRcdGNvbnN0IHZhcmlhbmNlID1cblx0XHRcdHlWYWx1ZXMucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgTWF0aC5wb3codmFsIC0gYXZlcmFnZSwgMiksIDApIC9cblx0XHRcdHlWYWx1ZXMubGVuZ3RoO1xuXG5cdFx0c2V0QWdncmVnYXRlcyh7IG1pbiwgbWF4LCBhdmVyYWdlLCB2YXJpYW5jZSB9KTtcblx0fTtcblxuXHRjb25zdCBjaGFydERhdGEgPSB7XG5cdFx0bGFiZWxzOiBkb3duc2FtcGxlZERhdGFcblx0XHRcdC5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgd2luZG93U2l6ZSlcblx0XHRcdC5tYXAoKHBvaW50KSA9PiBwb2ludC54KSxcblx0XHRkYXRhc2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ0RhdGEgU2VyaWVzJyxcblx0XHRcdFx0ZGF0YTogZG93bnNhbXBsZWREYXRhXG5cdFx0XHRcdFx0LnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyB3aW5kb3dTaXplKVxuXHRcdFx0XHRcdC5tYXAoKHBvaW50KSA9PiBwb2ludC55KSxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoNzUsIDE5MiwgMTkyKScsXG5cdFx0XHRcdHRlbnNpb246IDAuMSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnVXBwZXIgRXJyb3IgTWFyZ2luJyxcblx0XHRcdFx0ZGF0YTogdmlzaWJsZURhdGEubWFwKFxuXHRcdFx0XHRcdChwb2ludCkgPT4gcG9pbnQueSArIE1hdGguc3FydChhZ2dyZWdhdGVzLnZhcmlhbmNlKVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuXHRcdFx0XHRwb2ludFJhZGl1czogMCxcblx0XHRcdFx0ZmlsbDogJysxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnTG93ZXIgRXJyb3IgTWFyZ2luJyxcblx0XHRcdFx0ZGF0YTogdmlzaWJsZURhdGEubWFwKFxuXHRcdFx0XHRcdChwb2ludCkgPT4gcG9pbnQueSAtIE1hdGguc3FydChhZ2dyZWdhdGVzLnZhcmlhbmNlKVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuXHRcdFx0XHRwb2ludFJhZGl1czogMCxcblx0XHRcdFx0ZmlsbDogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH07XG5cblx0Y29uc3QgY2hhcnRPcHRpb25zID0ge1xuXHRcdHNjYWxlczoge1xuXHRcdFx0eDoge1xuXHRcdFx0XHR0eXBlOiAnbGluZWFyJyxcblx0XHRcdFx0cG9zaXRpb246ICdib3R0b20nLFxuXHRcdFx0fSxcblx0XHRcdHk6IHtcblx0XHRcdFx0dHlwZTogJ2xpbmVhcicsXG5cdFx0XHRcdHBvc2l0aW9uOiAnbGVmdCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGx1Z2luczoge1xuXHRcdFx0bGVnZW5kOiB7XG5cdFx0XHRcdGRpc3BsYXk6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3JNYXJnaW5QbHVnaW46IHt9LFxuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0cmVmPXtmaWxlSW5wdXRSZWZ9XG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfVxuXHRcdFx0XHRhY2NlcHQ9XCIuY3N2XCJcblx0XHRcdC8+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8bGFiZWw+V2luZG93IFNpemU6IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdHZhbHVlPXt3aW5kb3dTaXplfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2luZG93U2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGxhYmVsPlN0YXJ0IEluZGV4OiA8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHR2YWx1ZT17c3RhcnRJbmRleH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFN0YXJ0SW5kZXgoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxsYWJlbD5VcGRhdGUgSW50ZXJ2YWwgKG1zKTogPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0dmFsdWU9e3VwZGF0ZUludGVydmFsfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlSW50ZXJ2YWwoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG5cdFx0XHRcdFx0bWluPVwiMTZcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8bGFiZWw+VXBkYXRlIFN0ZXA6IDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdHZhbHVlPXt1cGRhdGVTdGVwfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlU3RlcChOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyl9PlxuXHRcdFx0XHR7aXNQbGF5aW5nID8gJ1N0b3AnIDogJ1N0YXJ0J31cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PExpbmUgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXtjaGFydE9wdGlvbnN9IC8+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDM+QWdncmVnYXRlczo8L2gzPlxuXHRcdFx0XHQ8cD5NaW46IHthZ2dyZWdhdGVzLm1pbi50b0ZpeGVkKDIpfTwvcD5cblx0XHRcdFx0PHA+TWF4OiB7YWdncmVnYXRlcy5tYXgudG9GaXhlZCgyKX08L3A+XG5cdFx0XHRcdDxwPkF2ZXJhZ2U6IHthZ2dyZWdhdGVzLmF2ZXJhZ2UudG9GaXhlZCgyKX08L3A+XG5cdFx0XHRcdDxwPlZhcmlhbmNlOiB7YWdncmVnYXRlcy52YXJpYW5jZS50b0ZpeGVkKDIpfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5lIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJGaWxsZXIiLCJkb3duc2FtcGxlRGF0YSIsInJlZ2lzdGVyIiwiQXBwIiwiZGF0YSIsInNldERhdGEiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInN0YXJ0SW5kZXgiLCJzZXRTdGFydEluZGV4IiwiZG93bnNhbXBsZWREYXRhIiwic2V0RG93bnNhbXBsZWREYXRhIiwidXBkYXRlSW50ZXJ2YWwiLCJzZXRVcGRhdGVJbnRlcnZhbCIsInVwZGF0ZVN0ZXAiLCJzZXRVcGRhdGVTdGVwIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiYWdncmVnYXRlcyIsInNldEFnZ3JlZ2F0ZXMiLCJtaW4iLCJtYXgiLCJhdmVyYWdlIiwidmFyaWFuY2UiLCJmaWxlSW5wdXRSZWYiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJNYXRoIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNhbXBsZWQiLCJzbGljZSIsImNhbGN1bGF0ZUFnZ3JlZ2F0ZXMiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImNvbnRlbnQiLCJyZXN1bHQiLCJwYXJzZWREYXRhIiwicGFyc2VDU1YiLCJyZWFkQXNUZXh0IiwibGluZXMiLCJzcGxpdCIsImkiLCJ4IiwieSIsInB1c2giLCJwYXJzZUZsb2F0IiwiYWxlcnQiLCJ3aW5kb3dEYXRhIiwieVZhbHVlcyIsIm1hcCIsInBvaW50IiwicmVkdWNlIiwic3VtIiwidmFsIiwicG93IiwiY2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwidGVuc2lvbiIsInZpc2libGVEYXRhIiwic3FydCIsImJhY2tncm91bmRDb2xvciIsInBvaW50UmFkaXVzIiwiZmlsbCIsImNoYXJ0T3B0aW9ucyIsInNjYWxlcyIsInR5cGUiLCJwb3NpdGlvbiIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwiZXJyb3JNYXJnaW5QbHVnaW4iLCJkaXYiLCJpbnB1dCIsInJlZiIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwidmFsdWUiLCJOdW1iZXIiLCJidXR0b24iLCJvbkNsaWNrIiwib3B0aW9ucyIsImgzIiwicCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});