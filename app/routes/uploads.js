import Ember from 'ember';

// Route for the uploads page
export default Ember.Route.extend({
  model: function() {
    return this.store.find('upload');
  }
});
