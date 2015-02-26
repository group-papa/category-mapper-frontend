import Ember from 'ember';
import FileUploadMixin from '../mixins/file-upload';
import SelectableMixin from '../mixins/selectable';

export default Ember.Controller.extend(
  SelectableMixin,
  FileUploadMixin,

  {
    uploadName: ''
  }
);
