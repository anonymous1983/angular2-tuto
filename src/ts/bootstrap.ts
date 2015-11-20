import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppCmp} from './app/components/app';

bootstrap(AppCmp, [
	ROUTER_PROVIDERS
]);