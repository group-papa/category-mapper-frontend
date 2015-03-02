import DS from 'ember-data';

// Taxonomy model
// Categories is marked {async:true} as there's so many otherwise Ember doesn't think they're loaded in time when requesting them

export default DS.Model.extend({
  name: DS.attr('string'),
  attachment: DS.attr('file'),
  dateCreated: DS.attr('date'),
  categories: DS.hasMany({async: true}, 'category')
});
