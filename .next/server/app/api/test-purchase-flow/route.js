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
exports.id = "app/api/test-purchase-flow/route";
exports.ids = ["app/api/test-purchase-flow/route"];
exports.modules = {

/***/ "(rsc)/./app/api/test-purchase-flow/route.ts":
/*!*********************************************!*\
  !*** ./app/api/test-purchase-flow/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mail */ \"(rsc)/./lib/mail.ts\");\n\n\nasync function POST(req) {\n    try {\n        console.log(\"🧪 Testing complete purchase flow...\");\n        // Simulate order data that would come from a real purchase\n        const testOrderData = {\n            email: \"dimatsaryuk30@gmail.com\",\n            orderId: \"TESTFLOW123\",\n            orderItems: [\n                {\n                    name: \"Test Product 1\",\n                    quantity: 2,\n                    price: 2500,\n                    productId: \"test-product-1\"\n                },\n                {\n                    name: \"Test Product 2\",\n                    quantity: 1,\n                    price: 1500,\n                    productId: \"test-product-2\"\n                }\n            ],\n            totalCents: 6500 // $65.00\n        };\n        console.log(\"📧 Testing email with order data:\", testOrderData);\n        await (0,_lib_mail__WEBPACK_IMPORTED_MODULE_1__.sendOrderConfirmation)(testOrderData.email, testOrderData.orderId, testOrderData.orderItems, testOrderData.totalCents);\n        console.log(\"✅ Purchase flow test email sent successfully\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Purchase flow test completed\",\n            details: {\n                email: testOrderData.email,\n                orderId: testOrderData.orderId,\n                itemsCount: testOrderData.orderItems.length,\n                total: `$${(testOrderData.totalCents / 100).toFixed(2)}`\n            }\n        });\n    } catch (error) {\n        console.error(\"❌ Purchase flow test failed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Purchase flow test failed\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rlc3QtcHVyY2hhc2UtZmxvdy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDTDtBQUU1QyxlQUFlRSxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLDJEQUEyRDtRQUMzRCxNQUFNQyxnQkFBZ0I7WUFDcEJDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxZQUFZO2dCQUNWO29CQUNFQyxNQUFNO29CQUNOQyxVQUFVO29CQUNWQyxPQUFPO29CQUNQQyxXQUFXO2dCQUNiO2dCQUNBO29CQUNFSCxNQUFNO29CQUNOQyxVQUFVO29CQUNWQyxPQUFPO29CQUNQQyxXQUFXO2dCQUNiO2FBQ0Q7WUFDREMsWUFBWSxLQUFLLFNBQVM7UUFDNUI7UUFFQVYsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ0M7UUFFakQsTUFBTUwsZ0VBQXFCQSxDQUN6QkssY0FBY0MsS0FBSyxFQUNuQkQsY0FBY0UsT0FBTyxFQUNyQkYsY0FBY0csVUFBVSxFQUN4QkgsY0FBY1EsVUFBVTtRQUcxQlYsUUFBUUMsR0FBRyxDQUFDO1FBRVosT0FBT0wscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUN2QkMsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLFNBQVM7Z0JBQ1BYLE9BQU9ELGNBQWNDLEtBQUs7Z0JBQzFCQyxTQUFTRixjQUFjRSxPQUFPO2dCQUM5QlcsWUFBWWIsY0FBY0csVUFBVSxDQUFDVyxNQUFNO2dCQUMzQ0MsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDZixjQUFjUSxVQUFVLEdBQUcsR0FBRSxFQUFHUSxPQUFPLENBQUMsSUFBSTtZQUMxRDtRQUNGO0lBRUYsRUFBRSxPQUFPQyxPQUFPO1FBQ2RuQixRQUFRbUIsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBT3ZCLHFEQUFZQSxDQUFDZSxJQUFJLENBQ3RCO1lBQ0VDLFNBQVM7WUFDVE8sT0FBTztZQUNQTCxTQUFTSyxpQkFBaUJDLFFBQVFELE1BQU1OLE9BQU8sR0FBRztRQUNwRCxHQUNBO1lBQUVRLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvZG15dHJvdHNhcml1ay9EZXNrdG9wL2lvcGF3bi1lY29tbWVyY2UvYXBwL2FwaS90ZXN0LXB1cmNoYXNlLWZsb3cvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgc2VuZE9yZGVyQ29uZmlybWF0aW9uIH0gZnJvbSBcIkAvbGliL21haWxcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwi8J+nqiBUZXN0aW5nIGNvbXBsZXRlIHB1cmNoYXNlIGZsb3cuLi5cIik7XG4gICAgXG4gICAgLy8gU2ltdWxhdGUgb3JkZXIgZGF0YSB0aGF0IHdvdWxkIGNvbWUgZnJvbSBhIHJlYWwgcHVyY2hhc2VcbiAgICBjb25zdCB0ZXN0T3JkZXJEYXRhID0ge1xuICAgICAgZW1haWw6IFwiZGltYXRzYXJ5dWszMEBnbWFpbC5jb21cIiwgLy8gWW91ciBlbWFpbCBmb3IgdGVzdGluZ1xuICAgICAgb3JkZXJJZDogXCJURVNURkxPVzEyM1wiLFxuICAgICAgb3JkZXJJdGVtczogW1xuICAgICAgICB7IFxuICAgICAgICAgIG5hbWU6IFwiVGVzdCBQcm9kdWN0IDFcIiwgXG4gICAgICAgICAgcXVhbnRpdHk6IDIsIFxuICAgICAgICAgIHByaWNlOiAyNTAwLCAvLyAkMjUuMDBcbiAgICAgICAgICBwcm9kdWN0SWQ6IFwidGVzdC1wcm9kdWN0LTFcIlxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIG5hbWU6IFwiVGVzdCBQcm9kdWN0IDJcIiwgXG4gICAgICAgICAgcXVhbnRpdHk6IDEsIFxuICAgICAgICAgIHByaWNlOiAxNTAwLCAvLyAkMTUuMDBcbiAgICAgICAgICBwcm9kdWN0SWQ6IFwidGVzdC1wcm9kdWN0LTJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdG90YWxDZW50czogNjUwMCAvLyAkNjUuMDBcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCLwn5OnIFRlc3RpbmcgZW1haWwgd2l0aCBvcmRlciBkYXRhOlwiLCB0ZXN0T3JkZXJEYXRhKTtcbiAgICBcbiAgICBhd2FpdCBzZW5kT3JkZXJDb25maXJtYXRpb24oXG4gICAgICB0ZXN0T3JkZXJEYXRhLmVtYWlsLFxuICAgICAgdGVzdE9yZGVyRGF0YS5vcmRlcklkLFxuICAgICAgdGVzdE9yZGVyRGF0YS5vcmRlckl0ZW1zLFxuICAgICAgdGVzdE9yZGVyRGF0YS50b3RhbENlbnRzXG4gICAgKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIuKchSBQdXJjaGFzZSBmbG93IHRlc3QgZW1haWwgc2VudCBzdWNjZXNzZnVsbHlcIik7XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiBcIlB1cmNoYXNlIGZsb3cgdGVzdCBjb21wbGV0ZWRcIixcbiAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgZW1haWw6IHRlc3RPcmRlckRhdGEuZW1haWwsXG4gICAgICAgIG9yZGVySWQ6IHRlc3RPcmRlckRhdGEub3JkZXJJZCxcbiAgICAgICAgaXRlbXNDb3VudDogdGVzdE9yZGVyRGF0YS5vcmRlckl0ZW1zLmxlbmd0aCxcbiAgICAgICAgdG90YWw6IGAkJHsodGVzdE9yZGVyRGF0YS50b3RhbENlbnRzIC8gMTAwKS50b0ZpeGVkKDIpfWBcbiAgICAgIH1cbiAgICB9KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgUHVyY2hhc2UgZmxvdyB0ZXN0IGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgZXJyb3I6IFwiUHVyY2hhc2UgZmxvdyB0ZXN0IGZhaWxlZFwiLCBcbiAgICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3JcIlxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInNlbmRPcmRlckNvbmZpcm1hdGlvbiIsIlBPU1QiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwidGVzdE9yZGVyRGF0YSIsImVtYWlsIiwib3JkZXJJZCIsIm9yZGVySXRlbXMiLCJuYW1lIiwicXVhbnRpdHkiLCJwcmljZSIsInByb2R1Y3RJZCIsInRvdGFsQ2VudHMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkZXRhaWxzIiwiaXRlbXNDb3VudCIsImxlbmd0aCIsInRvdGFsIiwidG9GaXhlZCIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/test-purchase-flow/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mail.ts":
/*!*********************!*\
  !*** ./lib/mail.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendOrderConfirmation: () => (/* binding */ sendOrderConfirmation)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/.pnpm/resend@4.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/resend/dist/index.mjs\");\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\n// Validate environment variables\nif (!process.env.RESEND_API_KEY) {\n    console.warn('⚠️ RESEND_API_KEY not found. Email functionality will be disabled.');\n}\nif (!process.env.EMAIL_FROM) {\n    console.warn('⚠️ EMAIL_FROM not found. Email functionality will be disabled.');\n}\nasync function sendOrderConfirmation(email, orderId, items, totalCents) {\n    // Check if email service is configured\n    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) {\n        console.warn('⚠️ Email service not configured. Skipping email send.');\n        return;\n    }\n    const html = `\n    <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;\">\n      <div style=\"text-align: center; margin-bottom: 30px;\">\n        <h1 style=\"color: #4d6aff; margin: 0;\">IOPAWN</h1>\n        <p style=\"color: #666; margin: 5px 0;\">Fine Jewellery</p>\n      </div>\n      \n      <div style=\"background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;\">\n        <h2 style=\"color: #333; margin: 0 0 10px 0;\">Thank you for your order!</h2>\n        <p style=\"color: #666; margin: 0;\">Your order has been confirmed and is being processed.</p>\n      </div>\n      \n      <div style=\"background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 20px;\">\n        <h3 style=\"color: #333; margin: 0 0 15px 0;\">Order Details</h3>\n        <p style=\"margin: 5px 0;\"><strong>Order ID:</strong> <span style=\"color: #4d6aff;\">#${orderId.toUpperCase()}</span></p>\n        <p style=\"margin: 5px 0;\"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>\n      </div>\n      \n      <div style=\"background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 20px;\">\n        <h3 style=\"color: #333; margin: 0 0 15px 0;\">Items Ordered</h3>\n        ${items.map((item)=>`\n          <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f0f0f0;\">\n            <div>\n              <p style=\"margin: 0; font-weight: 500;\">${item.name}</p>\n              <p style=\"margin: 5px 0 0 0; color: #666; font-size: 14px;\">Quantity: ${item.quantity}</p>\n            </div>\n            <div style=\"text-align: right;\">\n              <p style=\"margin: 0; font-weight: 500;\">$${(item.price / 100).toFixed(2)}</p>\n            </div>\n          </div>\n        `).join(\"\")}\n        <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-top: 2px solid #e0e0e0; margin-top: 10px;\">\n          <p style=\"margin: 0; font-weight: bold; font-size: 18px;\">Total</p>\n          <p style=\"margin: 0; font-weight: bold; font-size: 18px; color: #4d6aff;\">$${(totalCents / 100).toFixed(2)}</p>\n        </div>\n      </div>\n      \n      <div style=\"background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;\">\n        <h3 style=\"color: #333; margin: 0 0 15px 0;\">What's Next?</h3>\n        <ul style=\"margin: 0; padding-left: 20px; color: #666;\">\n          <li>We'll process your order within 24 hours</li>\n          <li>You'll receive shipping confirmation with tracking details</li>\n          <li>Estimated delivery: 3-5 business days</li>\n        </ul>\n      </div>\n      \n      <div style=\"text-align: center; color: #666; font-size: 14px;\">\n        <p>If you have any questions, please contact us at support@iopawn.com</p>\n        <p>Thank you for choosing IOPAWN!</p>\n      </div>\n    </div>\n  `;\n    await resend.emails.send({\n        from: process.env.EMAIL_FROM,\n        to: email,\n        subject: `Order Confirmation - #${orderId.toUpperCase()}`,\n        html\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWFpbC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQUUvQixNQUFNQyxTQUFTLElBQUlELDBDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFFcEQsaUNBQWlDO0FBQ2pDLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEVBQUU7SUFDL0JDLFFBQVFDLElBQUksQ0FBQztBQUNmO0FBRUEsSUFBSSxDQUFDSixRQUFRQyxHQUFHLENBQUNJLFVBQVUsRUFBRTtJQUMzQkYsUUFBUUMsSUFBSSxDQUFDO0FBQ2Y7QUFFTyxlQUFlRSxzQkFBc0JDLEtBQWEsRUFBRUMsT0FBZSxFQUFFQyxLQUFZLEVBQUVDLFVBQWtCO0lBQzFHLHVDQUF1QztJQUN2QyxJQUFJLENBQUNWLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxJQUFJLENBQUNGLFFBQVFDLEdBQUcsQ0FBQ0ksVUFBVSxFQUFFO1FBQzFERixRQUFRQyxJQUFJLENBQUM7UUFDYjtJQUNGO0lBQ0EsTUFBTU8sT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs0RkFjNEUsRUFBRUgsUUFBUUksV0FBVyxHQUFHO3lEQUMzRCxFQUFFLElBQUlDLE9BQU9DLGtCQUFrQixHQUFHOzs7OztRQUtuRixFQUFFTCxNQUFNTSxHQUFHLENBQUNDLENBQUFBLE9BQVEsQ0FBQzs7O3NEQUd5QixFQUFFQSxLQUFLQyxJQUFJLENBQUM7b0ZBQ2tCLEVBQUVELEtBQUtFLFFBQVEsQ0FBQzs7O3VEQUc3QyxFQUFFLENBQUNGLEtBQUtHLEtBQUssR0FBRyxHQUFFLEVBQUdDLE9BQU8sQ0FBQyxHQUFHOzs7UUFHL0UsQ0FBQyxFQUFFQyxJQUFJLENBQUMsSUFBSTs7O3FGQUdpRSxFQUFFLENBQUNYLGFBQWEsR0FBRSxFQUFHVSxPQUFPLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JuSCxDQUFDO0lBRUQsTUFBTXJCLE9BQU91QixNQUFNLENBQUNDLElBQUksQ0FBQztRQUN2QkMsTUFBTXhCLFFBQVFDLEdBQUcsQ0FBQ0ksVUFBVTtRQUM1Qm9CLElBQUlsQjtRQUNKbUIsU0FBUyxDQUFDLHNCQUFzQixFQUFFbEIsUUFBUUksV0FBVyxJQUFJO1FBQ3pERDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbXl0cm90c2FyaXVrL0Rlc2t0b3AvaW9wYXduLWVjb21tZXJjZS9saWIvbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnXG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpXG5cbi8vIFZhbGlkYXRlIGVudmlyb25tZW50IHZhcmlhYmxlc1xuaWYgKCFwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSkge1xuICBjb25zb2xlLndhcm4oJ+KaoO+4jyBSRVNFTkRfQVBJX0tFWSBub3QgZm91bmQuIEVtYWlsIGZ1bmN0aW9uYWxpdHkgd2lsbCBiZSBkaXNhYmxlZC4nKVxufVxuXG5pZiAoIXByb2Nlc3MuZW52LkVNQUlMX0ZST00pIHtcbiAgY29uc29sZS53YXJuKCfimqDvuI8gRU1BSUxfRlJPTSBub3QgZm91bmQuIEVtYWlsIGZ1bmN0aW9uYWxpdHkgd2lsbCBiZSBkaXNhYmxlZC4nKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE9yZGVyQ29uZmlybWF0aW9uKGVtYWlsOiBzdHJpbmcsIG9yZGVySWQ6IHN0cmluZywgaXRlbXM6IGFueVtdLCB0b3RhbENlbnRzOiBudW1iZXIpIHtcbiAgLy8gQ2hlY2sgaWYgZW1haWwgc2VydmljZSBpcyBjb25maWd1cmVkXG4gIGlmICghcHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkgfHwgIXByb2Nlc3MuZW52LkVNQUlMX0ZST00pIHtcbiAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBFbWFpbCBzZXJ2aWNlIG5vdCBjb25maWd1cmVkLiBTa2lwcGluZyBlbWFpbCBzZW5kLicpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMjBweDtcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDMwcHg7XCI+XG4gICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiAjNGQ2YWZmOyBtYXJnaW46IDA7XCI+SU9QQVdOPC9oMT5cbiAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzY2NjsgbWFyZ2luOiA1cHggMDtcIj5GaW5lIEpld2VsbGVyeTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2Y4ZjlmYTsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogOHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxuICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogIzMzMzsgbWFyZ2luOiAwIDAgMTBweCAwO1wiPlRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciE8L2gyPlxuICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjNjY2OyBtYXJnaW46IDA7XCI+WW91ciBvcmRlciBoYXMgYmVlbiBjb25maXJtZWQgYW5kIGlzIGJlaW5nIHByb2Nlc3NlZC48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOyBib3JkZXItcmFkaXVzOiA4cHg7IHBhZGRpbmc6IDIwcHg7IG1hcmdpbi1ib3R0b206IDIwcHg7XCI+XG4gICAgICAgIDxoMyBzdHlsZT1cImNvbG9yOiAjMzMzOyBtYXJnaW46IDAgMCAxNXB4IDA7XCI+T3JkZXIgRGV0YWlsczwvaDM+XG4gICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiA1cHggMDtcIj48c3Ryb25nPk9yZGVyIElEOjwvc3Ryb25nPiA8c3BhbiBzdHlsZT1cImNvbG9yOiAjNGQ2YWZmO1wiPiMke29yZGVySWQudG9VcHBlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogNXB4IDA7XCI+PHN0cm9uZz5EYXRlOjwvc3Ryb25nPiAke25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDsgYm9yZGVyLXJhZGl1czogOHB4OyBwYWRkaW5nOiAyMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxuICAgICAgICA8aDMgc3R5bGU9XCJjb2xvcjogIzMzMzsgbWFyZ2luOiAwIDAgMTVweCAwO1wiPkl0ZW1zIE9yZGVyZWQ8L2gzPlxuICAgICAgICAke2l0ZW1zLm1hcChpdGVtID0+IGBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAxMHB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDA7IGZvbnQtd2VpZ2h0OiA1MDA7XCI+JHtpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogNXB4IDAgMCAwOyBjb2xvcjogIzY2NjsgZm9udC1zaXplOiAxNHB4O1wiPlF1YW50aXR5OiAke2l0ZW0ucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwOyBmb250LXdlaWdodDogNTAwO1wiPiQkeyhpdGVtLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKS5qb2luKFwiXCIpfVxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAxNXB4IDA7IGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTBlMGUwOyBtYXJnaW4tdG9wOiAxMHB4O1wiPlxuICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4O1wiPlRvdGFsPC9wPlxuICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogIzRkNmFmZjtcIj4kJHsodG90YWxDZW50cyAvIDEwMCkudG9GaXhlZCgyKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZjhmOWZhOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7XCI+XG4gICAgICAgIDxoMyBzdHlsZT1cImNvbG9yOiAjMzMzOyBtYXJnaW46IDAgMCAxNXB4IDA7XCI+V2hhdCdzIE5leHQ/PC9oMz5cbiAgICAgICAgPHVsIHN0eWxlPVwibWFyZ2luOiAwOyBwYWRkaW5nLWxlZnQ6IDIwcHg7IGNvbG9yOiAjNjY2O1wiPlxuICAgICAgICAgIDxsaT5XZSdsbCBwcm9jZXNzIHlvdXIgb3JkZXIgd2l0aGluIDI0IGhvdXJzPC9saT5cbiAgICAgICAgICA8bGk+WW91J2xsIHJlY2VpdmUgc2hpcHBpbmcgY29uZmlybWF0aW9uIHdpdGggdHJhY2tpbmcgZGV0YWlsczwvbGk+XG4gICAgICAgICAgPGxpPkVzdGltYXRlZCBkZWxpdmVyeTogMy01IGJ1c2luZXNzIGRheXM8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNjY2OyBmb250LXNpemU6IDE0cHg7XCI+XG4gICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSBjb250YWN0IHVzIGF0IHN1cHBvcnRAaW9wYXduLmNvbTwvcD5cbiAgICAgICAgPHA+VGhhbmsgeW91IGZvciBjaG9vc2luZyBJT1BBV04hPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcblxuICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX0ZST00hLFxuICAgIHRvOiBlbWFpbCxcbiAgICBzdWJqZWN0OiBgT3JkZXIgQ29uZmlybWF0aW9uIC0gIyR7b3JkZXJJZC50b1VwcGVyQ2FzZSgpfWAsXG4gICAgaHRtbCxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJSZXNlbmQiLCJyZXNlbmQiLCJwcm9jZXNzIiwiZW52IiwiUkVTRU5EX0FQSV9LRVkiLCJjb25zb2xlIiwid2FybiIsIkVNQUlMX0ZST00iLCJzZW5kT3JkZXJDb25maXJtYXRpb24iLCJlbWFpbCIsIm9yZGVySWQiLCJpdGVtcyIsInRvdGFsQ2VudHMiLCJodG1sIiwidG9VcHBlckNhc2UiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwidG9GaXhlZCIsImpvaW4iLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwic3ViamVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mail.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-purchase-flow%2Froute&page=%2Fapi%2Ftest-purchase-flow%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-purchase-flow%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-purchase-flow%2Froute&page=%2Fapi%2Ftest-purchase-flow%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-purchase-flow%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dmytrotsariuk_Desktop_iopawn_ecommerce_app_api_test_purchase_flow_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/test-purchase-flow/route.ts */ \"(rsc)/./app/api/test-purchase-flow/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/test-purchase-flow/route\",\n        pathname: \"/api/test-purchase-flow\",\n        filename: \"route\",\n        bundlePath: \"app/api/test-purchase-flow/route\"\n    },\n    resolvedPagePath: \"/Users/dmytrotsariuk/Desktop/iopawn-ecommerce/app/api/test-purchase-flow/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dmytrotsariuk_Desktop_iopawn_ecommerce_app_api_test_purchase_flow_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMF9yZWFjdEAxOS4xLjBfX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0ZXN0LXB1cmNoYXNlLWZsb3clMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRlc3QtcHVyY2hhc2UtZmxvdyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRlc3QtcHVyY2hhc2UtZmxvdyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRteXRyb3RzYXJpdWslMkZEZXNrdG9wJTJGaW9wYXduLWVjb21tZXJjZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkbXl0cm90c2FyaXVrJTJGRGVza3RvcCUyRmlvcGF3bi1lY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZG15dHJvdHNhcml1ay9EZXNrdG9wL2lvcGF3bi1lY29tbWVyY2UvYXBwL2FwaS90ZXN0LXB1cmNoYXNlLWZsb3cvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Rlc3QtcHVyY2hhc2UtZmxvdy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Rlc3QtcHVyY2hhc2UtZmxvd1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGVzdC1wdXJjaGFzZS1mbG93L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2RteXRyb3RzYXJpdWsvRGVza3RvcC9pb3Bhd24tZWNvbW1lcmNlL2FwcC9hcGkvdGVzdC1wdXJjaGFzZS1mbG93L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-purchase-flow%2Froute&page=%2Fapi%2Ftest-purchase-flow%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-purchase-flow%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/resend@4.7.0_react-dom@19.1.0_react@19.1.0__react@19.1.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftest-purchase-flow%2Froute&page=%2Fapi%2Ftest-purchase-flow%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest-purchase-flow%2Froute.ts&appDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdmytrotsariuk%2FDesktop%2Fiopawn-ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();