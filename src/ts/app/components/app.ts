import { Component, ViewEncapsulation } from 'angular2/angular2';

import { 
  RouteConfig, 
  ROUTER_DIRECTIVES 
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

//import {HomeCmp} from '../../home/components/home';
//import {AboutCmp} from '../../about/components/about';
//import {NameList} from '../../services/name_list';

@Component({
  selector: 'app',
  //viewProviders: [NameList],
  templateUrl: './app/components/resources/views/app.tpl.html',
  //styleUrls: ['./app/components/resources/app.css'],
  //encapsulation: ViewEncapsulation.None,
  //directives: [ROUTER_DIRECTIVES]
})
/*@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' }
])*/

export class AppCmp {
  constructor() {

  }
}
