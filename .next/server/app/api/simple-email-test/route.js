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
exports.id = "app/api/simple-email-test/route";
exports.ids = ["app/api/simple-email-test/route"];
exports.modules = {

/***/ "(rsc)/./app/api/simple-email-test/route.ts":
/*!********************************************!*\
  !*** ./app/api/simple-email-test/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/.pnpm/resend@4.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/resend/dist/index.mjs\");\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    try {\n        console.log(\"🧪 Simple email test...\");\n        if (!process.env.RESEND_API_KEY) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"RESEND_API_KEY not found\"\n            }, {\n                status: 400\n            });\n        }\n        if (!process.env.EMAIL_FROM) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"EMAIL_FROM not found\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"📤 Sending simple test email...\");\n        const result = await resend.emails.send({\n            from: process.env.EMAIL_FROM,\n            to: \"dimatsaryuk30@gmail.com\",\n            subject: \"Simple Test Email\",\n            html: \"<h1>Test Email</h1><p>This is a simple test email from IOPAWN.</p>\"\n        });\n        console.log(\"✅ Simple email result:\", result);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Simple test email sent\",\n            result: result\n        });\n    } catch (error) {\n        console.error(\"❌ Simple email test failed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Simple email test failed\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NpbXBsZS1lbWFpbC10ZXN0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUN4QjtBQUVoQyxNQUFNRSxTQUFTLElBQUlELDBDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFFN0MsZUFBZUMsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGQyxRQUFRQyxHQUFHLENBQUM7UUFFWixJQUFJLENBQUNOLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxFQUFFO1lBQy9CLE9BQU9MLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQ3ZCQyxTQUFTO2dCQUNUQyxPQUFPO1lBQ1QsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ25CO1FBRUEsSUFBSSxDQUFDVixRQUFRQyxHQUFHLENBQUNVLFVBQVUsRUFBRTtZQUMzQixPQUFPZCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUN2QkMsU0FBUztnQkFDVEMsT0FBTztZQUNULEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuQjtRQUVBTCxRQUFRQyxHQUFHLENBQUM7UUFFWixNQUFNTSxTQUFTLE1BQU1iLE9BQU9jLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQ3RDQyxNQUFNZixRQUFRQyxHQUFHLENBQUNVLFVBQVU7WUFDNUJLLElBQUk7WUFDSkMsU0FBUztZQUNUQyxNQUFNO1FBQ1I7UUFFQWIsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQk07UUFFdEMsT0FBT2YscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkMsU0FBUztZQUNUVyxTQUFTO1lBQ1RQLFFBQVFBO1FBQ1Y7SUFFRixFQUFFLE9BQU9ILE9BQU87UUFDZEosUUFBUUksS0FBSyxDQUFDLCtCQUErQkE7UUFFN0MsT0FBT1oscURBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFDRUMsU0FBUztZQUNUQyxPQUFPO1lBQ1BXLFNBQVNYLGlCQUFpQlksUUFBUVosTUFBTVUsT0FBTyxHQUFHO1FBQ3BELEdBQ0E7WUFBRVQsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXl0cm90c2FyaXVrL0Rlc2t0b3AvaW9wYXduLWVjb21tZXJjZS9hcHAvYXBpL3NpbXBsZS1lbWFpbC10ZXN0L3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCLwn6eqIFNpbXBsZSBlbWFpbCB0ZXN0Li4uXCIpO1xuICAgIFxuICAgIGlmICghcHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJSRVNFTkRfQVBJX0tFWSBub3QgZm91bmRcIlxuICAgICAgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXByb2Nlc3MuZW52LkVNQUlMX0ZST00pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJFTUFJTF9GUk9NIG5vdCBmb3VuZFwiXG4gICAgICB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwi8J+TpCBTZW5kaW5nIHNpbXBsZSB0ZXN0IGVtYWlsLi4uXCIpO1xuICAgIFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgICAgdG86IFwiZGltYXRzYXJ5dWszMEBnbWFpbC5jb21cIixcbiAgICAgIHN1YmplY3Q6IFwiU2ltcGxlIFRlc3QgRW1haWxcIixcbiAgICAgIGh0bWw6IFwiPGgxPlRlc3QgRW1haWw8L2gxPjxwPlRoaXMgaXMgYSBzaW1wbGUgdGVzdCBlbWFpbCBmcm9tIElPUEFXTi48L3A+XCIsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIuKchSBTaW1wbGUgZW1haWwgcmVzdWx0OlwiLCByZXN1bHQpO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJTaW1wbGUgdGVzdCBlbWFpbCBzZW50XCIsXG4gICAgICByZXN1bHQ6IHJlc3VsdFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBTaW1wbGUgZW1haWwgdGVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXG4gICAgICAgIGVycm9yOiBcIlNpbXBsZSBlbWFpbCB0ZXN0IGZhaWxlZFwiLCBcbiAgICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIlxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlJlc2VuZCIsInJlc2VuZCIsInByb2Nlc3MiLCJlbnYiLCJSRVNFTkRfQVBJX0tFWSIsIlBPU1QiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsInN0YXR1cyIsIkVNQUlMX0ZST00iLCJyZXN1bHQiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJtZXNzYWdlIiwiZGV0YWlscyIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/simple-email-test/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsimple-email-test%2Froute&page=%2Fapi%2Fsimple-email-test%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsimple-email-test%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsimple-email-test%2Froute&page=%2Fapi%2Fsimple-email-test%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsimple-email-test%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dmytrotsariuk_Desktop_iopawn_ecommerce_app_api_simple_email_test_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/simple-email-test/route.ts */ \"(rsc)/./app/api/simple-email-test/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/simple-email-test/route\",\n        pathname: \"/api/simple-email-test\",\n        filename: \"route\",\n        bundlePath: \"app/api/simple-email-test/route\"\n    },\n    resolvedPagePath: \"/Users/dmytrotsariuk/Desktop/iopawn-ecommerce/app/api/simple-email-test/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dmytrotsariuk_Desktop_iopawn_ecommerce_app_api_simple_email_test_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjBfX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzaW1wbGUtZW1haWwtdGVzdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2ltcGxlLWVtYWlsLXRlc3QlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzaW1wbGUtZW1haWwtdGVzdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRteXRyb3RzYXJpdWslMkZEZXNrdG9wJTJGaW9wYXduLWVjb21tZXJjZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkbXl0cm90c2FyaXVrJTJGRGVza3RvcCUyRmlvcGF3bi1lY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZG15dHJvdHNhcml1ay9EZXNrdG9wL2lvcGF3bi1lY29tbWVyY2UvYXBwL2FwaS9zaW1wbGUtZW1haWwtdGVzdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2ltcGxlLWVtYWlsLXRlc3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zaW1wbGUtZW1haWwtdGVzdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2ltcGxlLWVtYWlsLXRlc3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZG15dHJvdHNhcml1ay9EZXNrdG9wL2lvcGF3bi1lY29tbWVyY2UvYXBwL2FwaS9zaW1wbGUtZW1haWwtdGVzdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsimple-email-test%2Froute&page=%2Fapi%2Fsimple-email-test%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsimple-email-test%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/resend@4.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsimple-email-test%2Froute&page=%2Fapi%2Fsimple-email-test%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsimple-email-test%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();