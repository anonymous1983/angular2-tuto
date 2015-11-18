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
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeitas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelectHero = function (hero) {
        this.selectHero = hero;
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            styles: ["\n\t\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t\t.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t\t.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t\t.heroes .badge {\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.1em 0.7em;\n\t\tbackground-color: #369;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -1px;\n\t\t}\n\t\t.selected { background-color: #EEE; color: #369; }\n  \t"],
            selector: 'my-app',
            templateUrl: 'app/page.tpl.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map