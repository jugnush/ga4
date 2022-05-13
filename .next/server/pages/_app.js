/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-L9YFBCXFC1';\nconst GA_TRACKING_ID = \"GTM-MMHJWSQ\";\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = (action, label, category, value)=>{\n    window.gtag(\"event\", action, {\n        event_label: label,\n        event_category: category,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxpRkFBaUY7QUFDMUUsTUFBTUEsY0FBYyxHQUFHLGFBQWE7QUFHM0MsNEVBQTRFO0FBQ3JFLE1BQU1DLFFBQVEsR0FBRyxDQUFDQyxHQUFHLEdBQUs7SUFDL0JDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsRUFBRUosY0FBYyxFQUFFO1FBQ3BDSyxTQUFTLEVBQUVILEdBQUc7S0FDZixDQUFDLENBQUM7Q0FDSixDQUFDO0FBRUYsNkVBQTZFO0FBQ3RFLE1BQU1JLEtBQUssR0FBRyxDQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEdBQU07SUFDekRQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRUcsTUFBTSxFQUFFO1FBQzNCSSxXQUFXLEVBQUVILEtBQUs7UUFDbEJJLGNBQWMsRUFBRUgsUUFBUTtRQUN4QkMsS0FBSyxFQUFFQSxLQUFLO0tBQ2IsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhLTQvLi9saWIvZ3RhZy5qcz9mZjU4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9JRCB8fCAnRy1MOVlGQkNYRkMxJztcclxuZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gJ0dUTS1NTUhKV1NRJ1xyXG5cclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICBwYWdlX3BhdGg6IHVybCxcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXHJcbmV4cG9ydCBjb25zdCBldmVudCA9ICggYWN0aW9uLCBsYWJlbCwgY2F0ZWdvcnksIHZhbHVlICkgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKFwiZXZlbnRcIiwgYWN0aW9uLCB7XHJcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXHJcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICB2YWx1ZTogdmFsdWUsXHJcbiAgfSk7XHJcbn07Il0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwidmFsdWUiLCJldmVudF9sYWJlbCIsImV2ZW50X2NhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_5__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_5__.GA_TRACKING_ID}`\n            }, void 0, false, {\n                fileName: \"/Users/jugsharm/Documents/ga4git4/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"gtag_script\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_5__.GA_TRACKING_ID}', {\n              page_path: window.location.pathname,\n            });\n          `\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jugsharm/Documents/ga4git4/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jugsharm/Documents/ga4git4/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNJO0FBQ0Y7QUFFUTtBQUNKO0FBRXBDLFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQkYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBVyxHQUFLO1lBQ3pDTiwrQ0FBYSxDQUFDTSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNERixNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFSixpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELE9BQU8sSUFBTTtZQUNYRCxNQUFNLENBQUNJLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHFCQUFxQixFQUFFTCxpQkFBaUIsQ0FBQyxDQUFDO1NBQzdELENBQUM7S0FDSCxFQUFFO1FBQUNELE1BQU0sQ0FBQ0ksTUFBTTtLQUFDLENBQUMsQ0FBQztJQUVwQixxQkFDRTs7MEJBRUUsOERBQUNWLG9EQUFNO2dCQUNMYSxRQUFRLEVBQUMsa0JBQWtCO2dCQUMzQkMsR0FBRyxFQUFFLENBQUMsNENBQTRDLEVBQUVaLHFEQUFtQixDQUFDLENBQUM7Ozs7O29CQUN6RTswQkFDRiw4REFBQ0Ysb0RBQU07Z0JBQ0xnQixFQUFFLEVBQUMsYUFBYTtnQkFDaEJILFFBQVEsRUFBQyxrQkFBa0I7Z0JBQzNCSSx1QkFBdUIsRUFBRTtvQkFDdkJDLE1BQU0sRUFBRSxDQUFDOzs7OzRCQUlTLEVBQUVoQixxREFBbUIsQ0FBQzs7O1VBR3hDLENBQUM7aUJBQ0Y7Ozs7O29CQUNEOzBCQUVBLDhEQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOztvQkFDN0IsQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYS00Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiLi4vbGliL2d0YWdcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgZ3RhZy5wYWdldmlldyh1cmwpO1xuICAgIH07XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEdsb2JhbCBTaXRlIFRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzICovfVxuICAgICAgPFNjcmlwdFxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z3RhZy5HQV9UUkFDS0lOR19JRH1gfVxuICAgICAgLz5cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgaWQ9XCJndGFnX3NjcmlwdFwiXG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtndGFnLkdBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2NyaXB0IiwidXNlUm91dGVyIiwiZ3RhZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwic3RyYXRlZ3kiLCJzcmMiLCJHQV9UUkFDS0lOR19JRCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();