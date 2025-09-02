"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_AOSAnimation_js";
exports.ids = ["components_AOSAnimation_js"];
exports.modules = {

/***/ "./components/AOSAnimation.js":
/*!************************************!*\
  !*** ./components/AOSAnimation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AOSAnimation)\n/* harmony export */ });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import AOS from 'aos'\n/**\n * 加载滚动动画\n * 改从外部CDN读取\n * https://michalsnik.github.io/aos/\n */ function AOSAnimation() {\n    const initAOS = ()=>{\n        Promise.all([\n            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.loadExternalResource)(\"/js/aos.js\", \"js\"),\n            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__.loadExternalResource)(\"/css/aos.css\", \"css\")\n        ]).then(()=>{\n            if (window.AOS) {\n                window.AOS.init();\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initAOS();\n    }, []);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FPU0FuaW1hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ2pCO0FBQ2pDLHdCQUF3QjtBQUV4Qjs7OztDQUlDLEdBQ2MsU0FBU0U7SUFDdEIsTUFBTUMsVUFBVTtRQUNkQyxRQUFRQyxHQUFHLENBQUM7WUFDVkwsZ0VBQW9CQSxDQUFDLGNBQWM7WUFDbkNBLGdFQUFvQkEsQ0FBQyxnQkFBZ0I7U0FDdEMsRUFBRU0sSUFBSSxDQUFDO1lBQ04sSUFBSUMsT0FBT0MsR0FBRyxFQUFFO2dCQUNkRCxPQUFPQyxHQUFHLENBQUNDLElBQUk7WUFDakI7UUFDRjtJQUNGO0lBQ0FSLGdEQUFTQSxDQUFDO1FBQ1JFO0lBQ0YsR0FBRyxFQUFFO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24tbmV4dC8uL2NvbXBvbmVudHMvQU9TQW5pbWF0aW9uLmpzPzE2NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEV4dGVybmFsUmVzb3VyY2UgfSBmcm9tICdAL2xpYi91dGlscydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IEFPUyBmcm9tICdhb3MnXG5cbi8qKlxuICog5Yqg6L295rua5Yqo5Yqo55S7XG4gKiDmlLnku47lpJbpg6hDRE7or7vlj5ZcbiAqIGh0dHBzOi8vbWljaGFsc25pay5naXRodWIuaW8vYW9zL1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBT1NBbmltYXRpb24oKSB7XG4gIGNvbnN0IGluaXRBT1MgPSAoKSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgbG9hZEV4dGVybmFsUmVzb3VyY2UoJy9qcy9hb3MuanMnLCAnanMnKSxcbiAgICAgIGxvYWRFeHRlcm5hbFJlc291cmNlKCcvY3NzL2Fvcy5jc3MnLCAnY3NzJylcbiAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuQU9TKSB7XG4gICAgICAgIHdpbmRvdy5BT1MuaW5pdCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRBT1MoKVxuICB9LCBbXSlcbn1cbiJdLCJuYW1lcyI6WyJsb2FkRXh0ZXJuYWxSZXNvdXJjZSIsInVzZUVmZmVjdCIsIkFPU0FuaW1hdGlvbiIsImluaXRBT1MiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsIndpbmRvdyIsIkFPUyIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AOSAnimation.js\n");

/***/ })

};
;