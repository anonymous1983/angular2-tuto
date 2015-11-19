import {bootstrap, Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {Hero} from 'hero';
import {OtSite} from 'app/ot-site';

var HEROES: Hero[] = [
{"id":11, "name": "Mr. Nice"},
{"id":12, "name": "Narco"},
{"id":13, "name": "Bombasto"},
{"id":14, "name": "Celeitas"},
{"id":15, "name": "Magneta"},
{"id":16, "name": "RubberMan"},
{"id":17, "name": "Dynama"}
];

@Component({
	selector: 'my-app'
})

@View({
	styles:[`
	.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
	.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
	.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
	.heroes .badge {
		font-size: small;
		color: white;
		padding: 0.1em 0.7em;
		background-color: #369;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -1px;
	}
	.selected { background-color: #EEE; color: #369; }
	`],
	//encapsulation: ViewEncapsulation.Emulated, // Don't provide any template or style encapsulation.
	//templateUrl: 'app/page.tpl.html',
	template: `<ot-site>
      <div head>I render in head.</div>
      <div menu>I render in menu.</div>
      <div body>I render in body.</div>
   </ot-site>`
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, OtSite]
})

// test commont
export class AppComponent {

	public title = 'Tour of Heroes';

	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};

	public heroes = HEROES;

	public selectHero: Hero;

	onSelectHero(hero: Hero) {
		this.selectHero = hero;
	}

	getSelectedClass(hero: Hero){
		return { 'selected': hero === this.selectHero }
	}

}
bootstrap(AppComponent);