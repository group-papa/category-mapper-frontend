import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  attachment: DS.attr('file'),
  dateCreated: DS.attr('date'),
  categories: DS.hasMany('category')
});
