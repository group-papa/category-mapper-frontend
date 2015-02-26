import Ember from 'ember';
import $ from 'jquery';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  currentTaxonomy: null,
  currentUpload: null,
  downloadAddress: null,
  trainCountManual: null,
  trainCountClassifier: null,
  currentProduct: null,
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
            'mappings': product['mappings'],
            'origin': product['productOriginalCategory']['parts']
          };
          this_.products.pushObject(record);
        });
        this_.set('downloadAddress', '/api/downloads/' + data['downloadId']);
      });
    },
    train: function() {
      var this_ = this;
      $.ajax('/api/train', {
        data: JSON.stringify({
          'upload[id]' : this.get('currentUpload'),
          'taxonomy[id]' : this.get('currentTaxonomy'),
          'addToManualMappings' : true,
          'addToTrainingSet': true
        }),
        contentType: 'application/json',
        type: 'POST'
      }).done(function(data){
        this_.set('trainCountManual', data['trainCountManual']);
        this_.set('trainCountClassifier', data['trainCountClassifier']);
      });
    },
    showMeta: function(product) {
      this.set('currentProduct', product);
    }
  }
});
