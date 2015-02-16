import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('transform:parts', 'PartsTransform', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('#serialize', function() {
  var transform = this.subject();

  deepEqual(transform.serialize(['a','b','c']), ['a','b','c']);
  deepEqual(transform.serialize('1,2,3'), ['1','2','3']);
  deepEqual(transform.serialize('1, 2, 3'), ['1','2','3']);
});

test('#deserialize', function() {
  var transform = this.subject();

  deepEqual(transform.deserialize(['a','b','c']), ['a','b','c']);
});
