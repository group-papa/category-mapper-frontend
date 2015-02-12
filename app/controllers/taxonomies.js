import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    upload: function() {
      var store = this.store;
      var file = document.getElementById('taxonomy_file').files[0];
      var tmp = store.createRecord('taxonomy', {
        name: document.getElementById('taxonomy_name').value,
      });

      tmp.set('attachment', file);
      console.log(tmp);
      tmp.save();
    }
  }
});
