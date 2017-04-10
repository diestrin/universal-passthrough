/**
 * UniversalPassthrough server version, no-op.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PassthroughRegistry = (function () {
    function PassthroughRegistry() {
    }
    /**
     * Initialize the registry with the server elements
     */
    PassthroughRegistry.init = function () { };
    /**
     * Check if the browser element is already registered
     */
    PassthroughRegistry.prototype.isRegistered = function (id) { return true; };
    /**
     * Register the browser element
     * Replace it with corresponding server element if found
     */
    PassthroughRegistry.prototype.replaceElement = function (browserId, el) { };
    /**
     * Removes the element from DOM
     */
    PassthroughRegistry.prototype.detach = function (id, el) { };
    /**
     * Adds the element to DOM
     */
    PassthroughRegistry.prototype.reattach = function (id, el) { };
    return PassthroughRegistry;
}());
exports.PassthroughRegistry = PassthroughRegistry;
//# sourceMappingURL=passthrough-registry.server.js.map