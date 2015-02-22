import Ember from 'ember';
import $ from 'jquery';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  currentTaxonomy: null,
  currentUpload: null,
  queryParams: ["page", "perPage"],
  page: 1,
  pagedContent: pagedArray(
    'products',
    {
      pageBinding: "page"
    }
  ),
  products: Ember.A([]),
  actions: {
    classify: function() {
      this.set('products', Ember.A([]));
      var this_ = this;
      $.ajax('/api/classify', {
        data: JSON.stringify({
          'upload[id]': this.get('currentUpload'),
          'taxonomy[id]': this.get('currentTaxonomy')
        }),
        contentType: 'application/json',
        type: 'POST'
      }).done(function(data){
        data['products'].forEach(function(product){
          var record = {
            'id': product['productId'],
            'name': product['productName'],
            'mappings': product['mappings']
          };
          this_.products.pushObject(record);
        });
      });
    }
  }
});
