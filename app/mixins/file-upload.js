import Ember from 'ember';

/*
 * Use this mixin with a controller that should handle file uploads
 */

export default Ember.Mixin.create({
  actions: {
    upload: function(files) {
      var store = this.store;
      var modelName = this.model.type.typeKey;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var record = store.createRecord(modelName, {
          attachment: file
        });

        var uploadName = this.get('uploadName');

        if (uploadName !== undefined) {
          if (uploadName === '') {
            uploadName = file.name;
          }

          record.set('name', uploadName);
        }

        this.set('uploadName', '');

        record.save();
      }
    }
  }
});
