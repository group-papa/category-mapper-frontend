import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('taxonomy', 'Taxonomy', {
  // Specify the other units that are required for this test.
  needs: ['model:category']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
