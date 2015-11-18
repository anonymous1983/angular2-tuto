import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'ot-site'
})
@View({
  template: `
    <div class="ot-site">
      <div class="ot-site--head" head>
        <img class="ot-site--logo" src="https://avatars3.githubusercontent.com/u/6102732?v=3&u=e0f439a4d82a39c752c41cf9312a5aa4352283ea&s=140">
        <ng-content></ng-content>
      </div>
      <div class="ot-site--menu" menu>
        <ng-content select="[menu]"></ng-content>
      </div>
      <div class="ot-site--body" body>
        <ng-content select="[body]"></ng-content>
      </div>
      <div class="ot-site--foot">
        &copy; 2015 OpenTable, Inc.
      </div>
    </div>
  `
})
export class OtSite {
  constructor() {
  }
}