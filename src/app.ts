import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Ben Teichman';
    config.map([
      { route: ['', 'about'], name: 'about', moduleId: 'about', nav: true, title: 'about' },
      { route: 'projects', name: 'projects', moduleId: 'projects', nav: true, title: 'projects' },
      { route: 'experience', name: 'experience', moduleId: 'experience', nav: true, title: 'experience' }
    ]);

    this.router = router;
  }
}
