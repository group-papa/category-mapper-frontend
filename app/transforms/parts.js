import DS from 'ember-data';
import Ember from 'ember';
import jQuery from 'jquery';

// Transform to serialize/deserialize our category parts

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (Ember.typeOf(serialized) === "array") {
      return serialized;
    } else {
      console.error(
        'Failed to deserialize as parts:', serialized);
      return null;
    }
  },

  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);

    if (type === 'array') {
      return deserialized;
    } else if (type === 'string') {
      return deserialized.split(',').map(function(item) {
        return jQuery.trim(item);
      });
    } else {
      console.error(
        'Failed to serialize as parts:', deserialized);
      return null;
    }
  }
});
