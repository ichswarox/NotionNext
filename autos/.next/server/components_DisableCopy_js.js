"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_DisableCopy_js";
exports.ids = ["components_DisableCopy_js"];
exports.modules = {

/***/ "./components/DisableCopy.js":
/*!***********************************!*\
  !*** ./components/DisableCopy.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisableCopy)\n/* harmony export */ });\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config */ \"./lib/config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/**\n * 禁止用户拷贝文章的插件\n */ function DisableCopy() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!JSON.parse((0,_lib_config__WEBPACK_IMPORTED_MODULE_0__.siteConfig)(\"CAN_COPY\"))) {\n            // 全栈添加禁止复制的样式\n            document.getElementsByTagName(\"html\")[0].classList.add(\"forbid-copy\");\n            // 监听复制事件\n            document.addEventListener(\"copy\", function(event) {\n                event.preventDefault() // 阻止默认复制行为\n                ;\n                alert(\"抱歉，本网页内容不可复制！\");\n            });\n        }\n    }, []);\n    return null;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rpc2FibGVDb3B5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDUjtBQUVqQzs7Q0FFQyxHQUNjLFNBQVNFO0lBQ3RCRCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ0UsS0FBS0MsS0FBSyxDQUFDSix1REFBVUEsQ0FBQyxjQUFjO1lBQ3ZDLGNBQWM7WUFDZEssU0FBU0Msb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDdkQsU0FBUztZQUNUSCxTQUFTSSxnQkFBZ0IsQ0FBQyxRQUFRLFNBQVVDLEtBQUs7Z0JBQy9DQSxNQUFNQyxjQUFjLEdBQUcsV0FBVzs7Z0JBQ2xDQyxNQUFNO1lBQ1I7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi1uZXh0Ly4vY29tcG9uZW50cy9EaXNhYmxlQ29weS5qcz9hZjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpdGVDb25maWcgfSBmcm9tICdAL2xpYi9jb25maWcnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiDnpoHmraLnlKjmiLfmi7fotJ3mlofnq6DnmoTmj5Lku7ZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzYWJsZUNvcHkoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFKU09OLnBhcnNlKHNpdGVDb25maWcoJ0NBTl9DT1BZJykpKSB7XG4gICAgICAvLyDlhajmoIjmt7vliqDnpoHmraLlpI3liLbnmoTmoLflvI9cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uY2xhc3NMaXN0LmFkZCgnZm9yYmlkLWNvcHknKVxuICAgICAgLy8g55uR5ZCs5aSN5Yi25LqL5Lu2XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb3B5JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8g6Zi75q2i6buY6K6k5aSN5Yi26KGM5Li6XG4gICAgICAgIGFsZXJ0KCfmirHmrYnvvIzmnKznvZHpobXlhoXlrrnkuI3lj6/lpI3liLbvvIEnKVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiBudWxsXG59XG4iXSwibmFtZXMiOlsic2l0ZUNvbmZpZyIsInVzZUVmZmVjdCIsIkRpc2FibGVDb3B5IiwiSlNPTiIsInBhcnNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DisableCopy.js\n");

/***/ })

};
;