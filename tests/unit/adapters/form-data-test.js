import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:form-data', 'FormDataAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var adapter = this.subject();
  ok(adapter);
});

test('it correctly formats formData', function() {
  var adapter = this.subject();

  window.FormData = function() {
    this.data = [];
    this.append = function(key, value) {
      var object = {};
      object[key] = value;
      this.data.push(object);
    };
  };

  var testFormData = new window.FormData();

  testFormData.append('taxonomy[id]', 1);
  testFormData.append('taxonomy[name]', 'Google');

  var options = {
    data: {
      taxonomy: {
        id: 1,
        name: 'Google'
      }
    }
  };

  var hash = adapter.ajaxOptions('/', 'POST', options);

  deepEqual(hash.data, testFormData);
});
