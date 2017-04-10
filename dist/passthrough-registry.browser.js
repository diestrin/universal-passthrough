"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UniversalPassthrough browser version - swap server element w/ browser element
 */
var core_1 = require("@angular/core");
var PassthroughRegistry = (function () {
    function PassthroughRegistry() {
    }
    /**
     * Collenct the server elements
     */
    PassthroughRegistry.getServerElements = function () {
        var serverElements = new Map();
        var serverElementsArr = [].slice
            .call(document.querySelectorAll('[universalpassthrough]'));
        serverElementsArr.forEach(function (el) {
            // has universalpassthrough attr and an id w/ suffix '-server'
            if (el.id.match(/-server?/i)) {
                var browserKey = el.id.replace('-server', '-browser');
                serverElements.set(browserKey, el);
            }
        });
        return serverElements;
    };
    /**
     * Initialize the registry with the server elements
     */
    PassthroughRegistry.init = function () {
        PassthroughRegistry.serverElements = PassthroughRegistry.getServerElements();
    };
    /**
     * Check if the browser element is already registered
     */
    PassthroughRegistry.prototype.isRegistered = function (id) {
        return PassthroughRegistry.browserElements.has(id);
    };
    /**
     * Register the browser element
     * Replace it with corresponding server element if found
     */
    PassthroughRegistry.prototype.replaceElement = function (browserId, el) {
        if (PassthroughRegistry.serverElements.has(browserId)) {
            var serverEl_1 = PassthroughRegistry.serverElements.get(browserId);
            if (this.isElement(el) && this.isElement(el.parentNode) && this.isElement(serverEl_1)) {
                window.requestAnimationFrame(function () {
                    var browserElement = serverEl_1.cloneNode(true);
                    el.parentNode.replaceChild(browserElement, el);
                    PassthroughRegistry.serverElements.delete(browserId);
                });
            }
        }
    };
    /**
     * Removes the element from DOM
     */
    PassthroughRegistry.prototype.detach = function (id, el) {
        var serverEl = PassthroughRegistry.serverElements.get(id);
        el.removeChild(serverEl);
    };
    /**
     * Adds the element to DOM
     */
    PassthroughRegistry.prototype.reattach = function (id, el) {
        var serverEl = PassthroughRegistry.serverElements.get(id);
        el.appendChild(serverEl);
    };
    PassthroughRegistry.prototype.isElement = function (el) {
        return (el != null)
            && (typeof el === 'object')
            && (el.nodeType === Node.ELEMENT_NODE)
            && (typeof el.style === 'object')
            && (typeof el.ownerDocument === 'object');
    };
    return PassthroughRegistry;
}());
PassthroughRegistry.serverElements = new Map();
PassthroughRegistry.browserElements = new Map();
PassthroughRegistry.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PassthroughRegistry.ctorParameters = function () { return []; };
exports.PassthroughRegistry = PassthroughRegistry;
//# sourceMappingURL=passthrough-registry.browser.js.map