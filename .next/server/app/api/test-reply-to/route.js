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
exports.id = "app/api/test-reply-to/route";
exports.ids = ["app/api/test-reply-to/route"];
exports.modules = {

/***/ "(rsc)/./app/api/test-reply-to/route.ts":
/*!****************************************!*\
  !*** ./app/api/test-reply-to/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/.pnpm/resend@4.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/resend/dist/index.mjs\");\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    try {\n        console.log(\"🧪 Testing email with reply-to functionality...\");\n        if (!process.env.RESEND_API_KEY) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"RESEND_API_KEY not found\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"📤 Sending email with reply-to: iopawnshop@gmail.com\");\n        const result = await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: \"dimatsaryuk30@gmail.com\",\n            replyTo: \"iopawnshop@gmail.com\",\n            subject: \"Test Email with Reply-To\",\n            html: `\n        <h1>Test Email</h1>\n        <p>This email is sent from onboarding@resend.dev</p>\n        <p>But replies will go to iopawnshop@gmail.com</p>\n        <p>Try replying to this email to test!</p>\n      `\n        });\n        console.log(\"✅ Email result:\", result);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Test email with reply-to sent\",\n            result: result,\n            from: \"onboarding@resend.dev\",\n            replyTo: \"iopawnshop@gmail.com\"\n        });\n    } catch (error) {\n        console.error(\"❌ Test email failed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Test email failed\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rlc3QtcmVwbHktdG8vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ3hCO0FBRWhDLE1BQU1FLFNBQVMsSUFBSUQsMENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUU3QyxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLElBQUksQ0FBQ04sUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEVBQUU7WUFDL0IsT0FBT0wscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFDdkJDLFNBQVM7Z0JBQ1RDLE9BQU87WUFDVCxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbkI7UUFFQUwsUUFBUUMsR0FBRyxDQUFDO1FBRVosTUFBTUssU0FBUyxNQUFNWixPQUFPYSxNQUFNLENBQUNDLElBQUksQ0FBQztZQUN0Q0MsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLFNBQVM7WUFDVEMsU0FBUztZQUNUQyxNQUFNLENBQUM7Ozs7O01BS1AsQ0FBQztRQUNIO1FBRUFiLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJLO1FBRS9CLE9BQU9kLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVFcsU0FBUztZQUNUUixRQUFRQTtZQUNSRyxNQUFNO1lBQ05FLFNBQVM7UUFDWDtJQUVGLEVBQUUsT0FBT1AsT0FBTztRQUNkSixRQUFRSSxLQUFLLENBQUMsd0JBQXdCQTtRQUV0QyxPQUFPWixxREFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtZQUNFQyxTQUFTO1lBQ1RDLE9BQU87WUFDUFcsU0FBU1gsaUJBQWlCWSxRQUFRWixNQUFNVSxPQUFPLEdBQUc7UUFDcEQsR0FDQTtZQUFFVCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2RteXRyb3RzYXJpdWsvRGVza3RvcC9pb3Bhd24tZWNvbW1lcmNlL2FwcC9hcGkvdGVzdC1yZXBseS10by9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnO1xuXG5jb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwi8J+nqiBUZXN0aW5nIGVtYWlsIHdpdGggcmVwbHktdG8gZnVuY3Rpb25hbGl0eS4uLlwiKTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IFwiUkVTRU5EX0FQSV9LRVkgbm90IGZvdW5kXCJcbiAgICAgIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCLwn5OkIFNlbmRpbmcgZW1haWwgd2l0aCByZXBseS10bzogaW9wYXduc2hvcEBnbWFpbC5jb21cIik7XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206IFwib25ib2FyZGluZ0ByZXNlbmQuZGV2XCIsXG4gICAgICB0bzogXCJkaW1hdHNhcnl1azMwQGdtYWlsLmNvbVwiLFxuICAgICAgcmVwbHlUbzogXCJpb3Bhd25zaG9wQGdtYWlsLmNvbVwiLFxuICAgICAgc3ViamVjdDogXCJUZXN0IEVtYWlsIHdpdGggUmVwbHktVG9cIixcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGgxPlRlc3QgRW1haWw8L2gxPlxuICAgICAgICA8cD5UaGlzIGVtYWlsIGlzIHNlbnQgZnJvbSBvbmJvYXJkaW5nQHJlc2VuZC5kZXY8L3A+XG4gICAgICAgIDxwPkJ1dCByZXBsaWVzIHdpbGwgZ28gdG8gaW9wYXduc2hvcEBnbWFpbC5jb208L3A+XG4gICAgICAgIDxwPlRyeSByZXBseWluZyB0byB0aGlzIGVtYWlsIHRvIHRlc3QhPC9wPlxuICAgICAgYCxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwi4pyFIEVtYWlsIHJlc3VsdDpcIiwgcmVzdWx0KTtcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IFwiVGVzdCBlbWFpbCB3aXRoIHJlcGx5LXRvIHNlbnRcIixcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgZnJvbTogXCJvbmJvYXJkaW5nQHJlc2VuZC5kZXZcIixcbiAgICAgIHJlcGx5VG86IFwiaW9wYXduc2hvcEBnbWFpbC5jb21cIlxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBUZXN0IGVtYWlsIGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgZXJyb3I6IFwiVGVzdCBlbWFpbCBmYWlsZWRcIiwgXG4gICAgICAgIGRldGFpbHM6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCJcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJSZXNlbmQiLCJyZXNlbmQiLCJwcm9jZXNzIiwiZW52IiwiUkVTRU5EX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJzdGF0dXMiLCJyZXN1bHQiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwicmVwbHlUbyIsInN1YmplY3QiLCJodG1sIiwibWVzc2FnZSIsImRldGFpbHMiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/test-reply-to/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-reply-to%2Froute&page=%2Fapi%2Ftest-reply-to%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-reply-to%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-reply-to%2Froute&page=%2Fapi%2Ftest-reply-to%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-reply-to%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dmytrotsariuk_Desktop_iopawn_ecommerce_app_api_test_reply_to_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/test-reply-to/route.ts */ \"(rsc)/./app/api/test-reply-to/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/test-reply-to/route\",\n        pathname: \"/api/test-reply-to\",\n        filename: \"route\",\n        bundlePath: \"app/api/test-reply-to/route\"\n    },\n    resolvedPagePath: \"/Users/dmytrotsariuk/Desktop/iopawn-ecommerce/app/api/test-reply-to/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dmytrotsariuk_Desktop_iopawn_ecommerce_app_api_test_reply_to_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjBfX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0ZXN0LXJlcGx5LXRvJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0ZXN0LXJlcGx5LXRvJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdGVzdC1yZXBseS10byUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRteXRyb3RzYXJpdWslMkZEZXNrdG9wJTJGaW9wYXduLWVjb21tZXJjZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkbXl0cm90c2FyaXVrJTJGRGVza3RvcCUyRmlvcGF3bi1lY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZG15dHJvdHNhcml1ay9EZXNrdG9wL2lvcGF3bi1lY29tbWVyY2UvYXBwL2FwaS90ZXN0LXJlcGx5LXRvL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90ZXN0LXJlcGx5LXRvL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdGVzdC1yZXBseS10b1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGVzdC1yZXBseS10by9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9kbXl0cm90c2FyaXVrL0Rlc2t0b3AvaW9wYXduLWVjb21tZXJjZS9hcHAvYXBpL3Rlc3QtcmVwbHktdG8vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-reply-to%2Froute&page=%2Fapi%2Ftest-reply-to%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-reply-to%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/resend@4.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-reply-to%2Froute&page=%2Fapi%2Ftest-reply-to%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-reply-to%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();