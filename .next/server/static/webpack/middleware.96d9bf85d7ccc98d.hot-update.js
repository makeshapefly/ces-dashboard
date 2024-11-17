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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isProtectedRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/dashboard(.*)\",\n    \"/forum(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)(async (auth, req)=>{\n    if (isProtectedRoute(req)) await auth.protect();\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLG1CQUFtQkQsd0VBQWtCQSxDQUFDO0lBQUM7SUFBa0I7Q0FBYTtBQUU1RSxpRUFBZUQscUVBQWVBLENBQUMsT0FBT0csTUFBTUM7SUFDMUMsSUFBSUYsaUJBQWlCRSxNQUFNLE1BQU1ELEtBQUtFLE9BQU87QUFDL0MsRUFBRTtBQUVLLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFDUCw2RUFBNkU7UUFDN0U7UUFDQSw0QkFBNEI7UUFDNUI7S0FDRDtBQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZXJrTWlkZGxld2FyZSwgY3JlYXRlUm91dGVNYXRjaGVyIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXG5cbmNvbnN0IGlzUHJvdGVjdGVkUm91dGUgPSBjcmVhdGVSb3V0ZU1hdGNoZXIoWycvZGFzaGJvYXJkKC4qKScsICcvZm9ydW0oLiopJ10pXG5cbmV4cG9ydCBkZWZhdWx0IGNsZXJrTWlkZGxld2FyZShhc3luYyAoYXV0aCwgcmVxKSA9PiB7XG4gIGlmIChpc1Byb3RlY3RlZFJvdXRlKHJlcSkpIGF3YWl0IGF1dGgucHJvdGVjdCgpXG59KVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbXG4gICAgLy8gU2tpcCBOZXh0LmpzIGludGVybmFscyBhbmQgYWxsIHN0YXRpYyBmaWxlcywgdW5sZXNzIGZvdW5kIGluIHNlYXJjaCBwYXJhbXNcbiAgICAnLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopJyxcbiAgICAvLyBBbHdheXMgcnVuIGZvciBBUEkgcm91dGVzXG4gICAgJy8oYXBpfHRycGMpKC4qKScsXG4gIF0sXG59Il0sIm5hbWVzIjpbImNsZXJrTWlkZGxld2FyZSIsImNyZWF0ZVJvdXRlTWF0Y2hlciIsImlzUHJvdGVjdGVkUm91dGUiLCJhdXRoIiwicmVxIiwicHJvdGVjdCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});