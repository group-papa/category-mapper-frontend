import Ember from 'ember';

// Route for the taxonomies page
export default Ember.Route.extend({
  model: function() {
    return this.store.find('taxonomy');
  }
});
