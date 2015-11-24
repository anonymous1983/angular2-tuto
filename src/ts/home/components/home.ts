import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'home'
})
@View({
  template: '<div>Home</div>',
  directives: [CORE_DIRECTIVES]
})
export class HomeCmp { }