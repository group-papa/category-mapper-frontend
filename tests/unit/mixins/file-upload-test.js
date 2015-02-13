import Ember from 'ember';
import FileUploadMixin from 'category-mapper/mixins/file-upload';

module('FileUploadMixin');

// Replace this with your real tests.
test('it works', function() {
  var FileUploadObject = Ember.Object.extend(FileUploadMixin);
  var subject = FileUploadObject.create();
  ok(subject);
});
