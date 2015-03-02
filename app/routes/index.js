import Ember from 'ember';

//Route to transition us to taxonomies on loading the home page
export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('taxonomies');
  }
});
