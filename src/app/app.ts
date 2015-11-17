import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

class Hero {
  id: number;
  name: string;
}
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
    selector: 'my-app',
    template: `
			<h1>{{title}}</h1>
			<div *ng-if="selectHero">
				<h2>{{selectHero.name}} details!</h2>
				<div>
					<label>id: </label>{{selectHero.id}}
				</div>
				<div>
					<label>name: </label>
					<div>
						<input [(ng-model)]="selectHero.name" placeholder="name">
					</div>
				</div>
			</div>
			<h2>My Heroes</h2>
			<ul class="heroes">
				<li 
					*ng-for="#hero of heroes; #i = index" 
					(click)="onSelectHero(hero)"
					[ng-class]="getSelectedClass(hero)">
					{{i + 1}} - <span class="badge">{{hero.id}}</span> {{hero.name}}
					<!-- each hero goes here -->
				</li>
			</ul>
			`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})



// test commont
class AppComponent {
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