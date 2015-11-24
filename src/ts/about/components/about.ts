import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'about'
})
@View({
  template: '<div>About</div>',
  directives: [CORE_DIRECTIVES]
})

export class AboutCmp { }