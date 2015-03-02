import Ember from 'ember';

// Route for the run-job page
export default Ember.Route.extend({
  model: function() {
    //return this.store.find('product');
    return Ember.RSVP.hash({
      taxonomies: this.store.find('taxonomy'),
      uploads: this.store.find('upload')
    });
  }
});
