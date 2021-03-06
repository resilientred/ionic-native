"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ionic-native/core");
var core_2 = require("@angular/core");
/**
 * @name Autostart
 * @description
 * This plugin will start automatically your Android app after the every boot or the auto-update of your application.
 * You can enable or disable the autostart function in your app.
 *
 * @usage
 * ```typescript
 * import { Autostart } from '@ionic-native/autostart';
 *
 *
 * constructor(private autostart: Autostart) { }
 *
 * ...
 *
 * this.autostart.enable();
 *
 * this.autostart.disable();
 *
 * ```
 */
var Autostart = (function (_super) {
    __extends(Autostart, _super);
    function Autostart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enable the automatic startup after the boot
     */
    Autostart.prototype.enable = function () { };
    /**
     * Disable the automatic startup after the boot
     */
    Autostart.prototype.disable = function () { };
    return Autostart;
}(core_1.IonicNativePlugin));
Autostart.decorators = [
    { type: core_2.Injectable },
];
/** @nocollapse */
Autostart.ctorParameters = function () { return []; };
__decorate([
    core_1.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Autostart.prototype, "enable", null);
__decorate([
    core_1.Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Autostart.prototype, "disable", null);
Autostart = __decorate([
    core_1.Plugin({
        pluginName: 'Autostart',
        plugin: 'cordova-plugin-autostart',
        pluginRef: 'cordova.plugins.autoStart',
        repo: 'https://github.com/ToniKorin/cordova-plugin-autostart',
        platforms: ['Android']
    })
], Autostart);
exports.Autostart = Autostart;
//# sourceMappingURL=index.js.map