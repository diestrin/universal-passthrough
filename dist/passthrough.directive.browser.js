"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var passthrough_registry_browser_1 = require("./passthrough-registry.browser");
var UniversalPassthrough = (function () {
    function UniversalPassthrough(id, passthroughRegistry, elementRef, cdRef) {
        this.id = id;
        this.passthroughRegistry = passthroughRegistry;
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        if (this.passthroughRegistry.isRegistered(id)) {
            this.passthroughRegistry.reattach(id, this.elementRef.nativeElement);
        }
        else {
            this.passthroughRegistry.replaceElement(id, this.elementRef.nativeElement);
        }
        cdRef.detach();
    }
    UniversalPassthrough.prototype.ngOnDestroy = function () {
        this.passthroughRegistry.detach(this.id, this.elementRef.nativeElement);
    };
    return UniversalPassthrough;
}());
UniversalPassthrough.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[universalPassthrough]'
            },] },
];
/** @nocollapse */
UniversalPassthrough.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Attribute, args: ['id',] },] },
    { type: passthrough_registry_browser_1.PassthroughRegistry, },
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.UniversalPassthrough = UniversalPassthrough;
//# sourceMappingURL=passthrough.directive.browser.js.map