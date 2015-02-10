import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("uploads", function() {
    this.route("new");
  });
  this.route("taxonomies");
});

export default Router;
