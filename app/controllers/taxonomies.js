import Ember from 'ember';
import FileUploadMixin from '../mixins/file-upload';
import SelectableMixin from '../mixins/selectable';

// Taxonomies controller

export default Ember.Controller.extend(
  SelectableMixin,
  FileUploadMixin,

  {
    uploadName: ''
  }
);
