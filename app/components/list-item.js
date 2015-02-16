import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    var item = this.get('item');
    var current = item.get('isSelected');
    if (current !== true) {
      item.set('isSelected', true);
    } else {
      item.set('isSelected', false);
    }
  },
  actions: {
    delete: function() {
      this.get('item').destroyRecord();
    }
  }
});
