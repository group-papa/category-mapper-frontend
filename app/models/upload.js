import DS from 'ember-data';

export default DS.Model.extend({
  attachment: DS.attr('file'),
  filename: DS.attr('string'),
  dateCreated: DS.attr('date')
});
