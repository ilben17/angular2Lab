"use strict";
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
var core_1 = require("@angular/core");
var UserPreferences_service_1 = require("../employee/UserPreferences.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userPreferencesService) {
        this._userPreferencesService = _userPreferencesService;
    }
    Object.defineProperty(HomeComponent.prototype, "currentColor", {
        get: function () {
            return this._userPreferencesService.colorPreference;
        },
        set: function (value) {
            this._userPreferencesService.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.component.html'
        }),
        __metadata("design:paramtypes", [UserPreferences_service_1.UserPreferencesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map