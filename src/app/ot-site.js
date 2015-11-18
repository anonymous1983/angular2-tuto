var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var OtSite = (function () {
    function OtSite() {
    }
    OtSite = __decorate([
        angular2_1.Component({
            selector: 'ot-site'
        }),
        angular2_1.View({
            template: "\n    <div class=\"ot-site\">\n      <div class=\"ot-site--head\" head>\n        <img class=\"ot-site--logo\" src=\"//guestcenter.opentable.com/Content/img/icons/icon/2x/ot-logo-2x.png\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"ot-site--menu\" menu>\n        <ng-content select=\"[menu]\"></ng-content>\n      </div>\n      <div class=\"ot-site--body\" body>\n        <ng-content select=\"[body]\"></ng-content>\n      </div>\n      <div class=\"ot-site--foot\">\n        &copy; 2015 OpenTable, Inc.\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OtSite);
    return OtSite;
})();
exports.OtSite = OtSite;
//# sourceMappingURL=ot-site.js.map