import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      return Ember.RSVP.hash({
          taxonomies: this.store.find('taxonomy'),
          uploads: this.store.find('upload')
      });
  }
});
