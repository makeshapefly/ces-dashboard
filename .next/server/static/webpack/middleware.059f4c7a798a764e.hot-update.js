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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isProtectedRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/dashboard(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)(async (auth, req)=>{\n    if (isProtectedRoute(req)) await auth.protect();\n}));\nconst config = {\n    matcher: [\n        \"/((?!.*\\\\..*|_next).*)\",\n        \"/\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLG1CQUFtQkQsd0VBQWtCQSxDQUFDO0lBQUM7Q0FBaUI7QUFFOUQsaUVBQWVELHFFQUFlQSxDQUFDLE9BQU9HLE1BQU1DO0lBQzFDLElBQUlGLGlCQUFpQkUsTUFBTSxNQUFNRCxLQUFLRSxPQUFPO0FBQy9DLEVBQUU7QUFFSyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7UUFBMEI7UUFBSztLQUFrQjtBQUMvRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVya01pZGRsZXdhcmUsIGNyZWF0ZVJvdXRlTWF0Y2hlciB9IGZyb20gJ0BjbGVyay9uZXh0anMvc2VydmVyJ1xuXG5jb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gY3JlYXRlUm91dGVNYXRjaGVyKFsnL2Rhc2hib2FyZCguKiknXSlcblxuZXhwb3J0IGRlZmF1bHQgY2xlcmtNaWRkbGV3YXJlKGFzeW5jIChhdXRoLCByZXEpID0+IHtcbiAgaWYgKGlzUHJvdGVjdGVkUm91dGUocmVxKSkgYXdhaXQgYXV0aC5wcm90ZWN0KClcbn0pXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgbWF0Y2hlcjogWycvKCg/IS4qXFxcXC4uKnxfbmV4dCkuKiknLCAnLycsICcvKGFwaXx0cnBjKSguKiknXVxufSJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJpc1Byb3RlY3RlZFJvdXRlIiwiYXV0aCIsInJlcSIsInByb3RlY3QiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});