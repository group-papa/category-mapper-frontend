import Ember from 'ember';

export default Ember.Component.extend({
  dependentRelationship: null,
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
      var item = this.get('item');
      var dependentRelationship = this.get('dependentRelationship');

      if (dependentRelationship !== null &&
          item._relationships[dependentRelationship]
          .manyArray.get('isLoaded')) {
        item.get(dependentRelationship)
          .toArray()
          .forEach(function(entity) {
              entity.unloadRecord();
          });
      }

      item.destroyRecord();
    }
  }
});
