import * as angular from 'angular';
import coreConstants from './core.constants';
import coreFilters from './core.filters';
import authInterceptor from './interceptor.factory';
import 'ngstorage';
import 'angular-resource';
import 'angular-messages';
// SVC
import {PostServiceModule} from '../services/post.service';

// directives
import repeateDone from './repeatDone.directive';

// LIB non injectable
import '../../../node_modules/animate.css/animate.css';
import '../../../node_modules/font-awesome/scss/font-awesome.scss';
import '../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import '../../../node_modules/angular-toastr/dist/angular-toastr.tpls.js';
import '../../../node_modules/angular-toastr/dist/angular-toastr.css';
let Masonry = require('masonry-layout');
window['Masonry'] = Masonry;

export default angular.module('app.core', [
  'ngResource',
  'ngMessages',
  'ngStorage',
  'toastr',
  coreConstants,
  coreFilters,
  authInterceptor,
  PostServiceModule,
  repeateDone
])
.name;
