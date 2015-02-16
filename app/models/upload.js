import DS from 'ember-data';

export default DS.Model.extend({
  attachment: DS.attr('file'),
  name: DS.attr('string'),
  filename: DS.attr('string'),
  dateCreated: DS.attr('date'),
  mappingCount: DS.attr('number'),
  productCount: DS.attr('number')
});