import {Component, View, bootstrap} from 'angular2/angular2';
import {
RouteConfig,
ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from 'home/components/home';
import {AboutCmp} from 'about/components/about';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'js/app/resources/views/app.tpl.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp { }