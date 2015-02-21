import Ember from 'ember';

export default Ember.Controller.extend({
  staticLinks: Ember.A([
    {
      title: 'Taxonomies',
      route: 'taxonomies'
    },
    {
      title: 'Uploads',
      route: 'uploads'
    },
    {
      title: 'Run Job',
      route: 'run-job'
    }
  ])
});
