import Ember from 'ember';
import $ from 'jquery';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

// Controller for run-job page. Handles classification, training, correction.

export default Ember.Controller.extend({
  filterContent: function(){
    return true;
  },
  currentTaxonomy: null,
  currentUpload: null,
  downloadAddress: null,
  downloadID: null,
  trainCountManual: null,
  editingMapping: false,
  newCategory: null,
  trainCountClassifier: null,
  currentProduct: null,
  addToManualMappings: true,
  addToTrainingSet: true,
  haveTrained: false,
  queryParams: ["page", "perPage"],
  page: 1,
  pagedContent: pagedArray(
    'products',
    {
      pageBinding: "page"
    }
  ),
  products: Ember.A([]),
  categories: Ember.A([]),
  actions: {
    // Called when classifying a product
    // Makes a POST request to /api/classify, with upload id and taxonomy id in payload
    // Response is mappings; this are pushed into an array called products one by one
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
        this_.set('downloadID', data['downloadId']);
      });
    },
    // Called when the 'train' button is pressed
    // Makes a POST request to /api/train with upload, taxonomy and settings from the new-job form
    // Returns training counts which are displayed in sidebar
    train: function() {
      var this_ = this;
      $.ajax('/api/train', {
        data: JSON.stringify({
          'upload[id]' : this.get('currentUpload'),
          'taxonomy[id]' : this.get('currentTaxonomy'),
          'addToManualMappings' : this.get('addToManualMappings'),
          'addToTrainingSet': this.get('addToTrainingSet')
        }),
        contentType: 'application/json',
        type: 'POST'
      }).done(function(data){
        this_.set('trainCountManual', data['trainCountManual']);
        this_.set('trainCountClassifier', data['trainCountClassifier']);
        this_.set('haveTrained', true);
      });
    },
    // Called when 'Manually Map' butotn is pressed.
    // Edits state and sends GET request for category list, adds to this.categories
    editMapping: function() {
      var this_ = this;
      this_.set('editingMapping', !this.get('editingMapping'));
      var ajaxUrl = '/api/taxonomies/' + this_.get('currentTaxonomy');
      console.log(ajaxUrl);
      $.ajax(ajaxUrl, {
        contentType: 'application/json',
        type: 'GET'
      }).done(function(data){
          data['categories'].forEach(function(category) {
            var record = {
              'id': category['id'],
              'parts': category['parts']
            };
            this_.categories.pushObject(record);
          });
      });
    },
    // Called when saving a manual mapping, sends a post request to /api/correct
    // TODO refresh the current product info to save having to reclassify to see result of manual mapping
    saveMapping: function() {
      var this_ = this;
      var newCategory = this_.get('newCategory');
      this_.set('editingMapping', !this.get('editingMapping'));
      $.ajax('/api/correct', {
        data: JSON.stringify({
          'download[id]': this.get('downloadID'),
          'product[id]': this.get('currentProduct.id'),
          'category[id]': newCategory,
          'addToManualMappings': true,
          'addToTrainingSet': true
        }),
        contentType: 'application/json',
        type: 'POST'
      }).done(function(data){
      });
    },
    showMeta: function(product) {
      this.set('currentProduct', product);
    }
  }
});
