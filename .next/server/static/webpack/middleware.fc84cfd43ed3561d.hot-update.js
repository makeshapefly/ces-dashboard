"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isProtectedRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, req)=>{\n    if (isProtectedRoute(req)) auth().protect();\n}));\nconst config = {\n    matcher: [\n        \"/((?!.*\\\\..*|_next).*)\",\n        \"/\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR2dDO0FBSTlCLE1BQU1FLG1CQUFtQkQsd0VBQWtCQSxDQUFDO0lBQzFDO0NBQ0Q7QUFFRCxpRUFBZUQscUVBQWVBLENBQUMsQ0FBQ0csTUFBTUM7SUFDcEMsSUFBSUYsaUJBQWlCRSxNQUFNRCxPQUFPRSxPQUFPO0FBQzNDLEVBQUUsRUFBQztBQUVJLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUEwQjtRQUFLO0tBQWtCO0FBQzdELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgY2xlcmtNaWRkbGV3YXJlLFxuICAgIGNyZWF0ZVJvdXRlTWF0Y2hlclxuICB9IGZyb20gJ0BjbGVyay9uZXh0anMvc2VydmVyJztcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcic7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbiAgY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9IGNyZWF0ZVJvdXRlTWF0Y2hlcihbXG4gICAgJy8oLiopJyxcbiAgXSk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjbGVya01pZGRsZXdhcmUoKGF1dGgsIHJlcSkgPT4ge1xuICAgIGlmIChpc1Byb3RlY3RlZFJvdXRlKHJlcSkpIGF1dGgoKS5wcm90ZWN0KCk7XG4gIH0pO1xuICBcbiAgZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtYXRjaGVyOiBbJy8oKD8hLipcXFxcLi4qfF9uZXh0KS4qKScsICcvJywgJy8oYXBpfHRycGMpKC4qKSddLFxuICB9OyJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJpc1Byb3RlY3RlZFJvdXRlIiwiYXV0aCIsInJlcSIsInByb3RlY3QiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});