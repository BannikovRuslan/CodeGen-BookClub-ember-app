import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-book-club-2-1-book', 'Unit | Model | i-i-s-book-club-2-1-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-book-club-2-1-book',
    'model:i-i-s-book-club-2-1-meeting',
    'model:i-i-s-book-club-2-1-presentation',
    'model:i-i-s-book-club-2-1-speaker',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
