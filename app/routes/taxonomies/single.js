import Ember from 'ember';

// Route for displaying info about a single taxonomy
export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('taxonomy', params.taxonomy_id);
  }
});
