import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function() {
      this.sendAction('delete', this.get('item'));
    }
  }
});
