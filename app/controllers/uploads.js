import Ember from 'ember';
import FileUploadMixin from '../mixins/file-upload';
import SelectableMixin from '../mixins/selectable';

// Uploads controller

export default Ember.Controller.extend(FileUploadMixin, {
  SelectableMixin,
  FileUploadMixin,
});
