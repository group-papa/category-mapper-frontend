import DS from 'ember-data';

export default DS.Model.extend({
  attachment: DS.attr('file'),
  filename: DS.attr('string'),
  createdAt: DS.attr('date')
});
