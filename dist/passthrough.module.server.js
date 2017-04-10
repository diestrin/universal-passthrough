"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var passthrough_registry_server_1 = require("./passthrough-registry.server");
var passthrough_directive_server_1 = require("./passthrough.directive.server");
var UniversalPassthroughModule = (function () {
    function UniversalPassthroughModule() {
    }
    return UniversalPassthroughModule;
}());
UniversalPassthroughModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [
                    passthrough_registry_server_1.PassthroughRegistry
                ],
                declarations: [
                    passthrough_directive_server_1.UniversalPassthrough
                ],
                exports: [
                    passthrough_directive_server_1.UniversalPassthrough
                ]
            },] },
];
/** @nocollapse */
UniversalPassthroughModule.ctorParameters = function () { return []; };
exports.UniversalPassthroughModule = UniversalPassthroughModule;
//# sourceMappingURL=passthrough.module.server.js.map