import {Component, View, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {OtSite} from 'ot-site';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS  
} from 'angular2/router';

@Component({
  selector: 'app'
})
@View({
  template: `
   <ot-site>
      <div head>I render in head.</div>
      <div menu>I render in menu.</div>
      <div body>I render in body.</div>
   </ot-site>
  `,
  directives: [OtSite]
})
export class App {

  constructor() {
  }
}

bootstrap(App);
