import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  formDataTypes: ['POST', 'PUT', 'PATCH'],

  ajaxOptions: function(url, type, options) {
    var data;

    if (options && 'data' in options) { data = options.data; }

    var hash = this._super.apply(this, arguments);

    if (typeof FormData === 'function' && data && this.formDataTypes.contains(type)) {
      var formData = new FormData();
      var root = Ember.keys(data)[0];

      console.log(data);

      Ember.keys(data[root]).forEach(function(key) {
        if (data[root][key]) {
          formData.append(root + "[" + key + "]", data[root][key]);
        }
      });

      hash.processData = false;
      hash.contentType = false;
      hash.data = formData;
    }

    return hash;
  },
});
