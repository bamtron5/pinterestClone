import * as angular from 'angular';
import config from './app.config';
import run from './app.run';
import core from './core/core.module';
import 'angular-ui-router';
import {SessionServiceModule} from './services/session.service';
import {UserServiceModule} from './services/user.service';

import LayoutComponent from './layout/layout.module';
import HomeComponent from './home/home.module';
import AuthComponent from './auth/auth.module';

// LOW LEVEL COMPONENTS
import NewPostComponent from './newPost/newPost.module';
import postDirective from './post/post.module';

const name = 'app';
const dependencies = [
  'ui.router',
  SessionServiceModule,
  core, // YOUR CORE DEPENDENCIES
  HomeComponent,
  LayoutComponent,
  AuthComponent,
  UserServiceModule,
  NewPostComponent,
  postDirective
];

angular.module(name, dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], { strictDi: true });
