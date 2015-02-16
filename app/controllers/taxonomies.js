import Ember from 'ember';
import FileUploadMixin from '../mixins/file-upload';

export default Ember.Controller.extend(FileUploadMixin, {
  actions: {
    delete: function(item) {
      item.destroyRecord();
    }
  }
});
