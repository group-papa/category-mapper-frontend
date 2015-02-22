import DS from 'ember-data';

var Job = DS.Model.extend({
  taxonomy: DS.belongsTo('taxonomy'),
  upload: DS.belongsTo('upload'),
  task: DS.attr('string')
});

Job.reopenClass({
  FIXTURES: [

  ]
});


export default Job;
