import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("uploads");
  this.route("taxonomies");

  this.route("run-job");
});

export default Router;
