import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  classNames: ['file-input'],
  attributeBindings: ['type', 'value'],
  type: 'file',
  value: "",

  fileTypes: [],

  bindHandlers: function() {
    this.$().on('change', this.handleFile.bind(this));
  }.on('didInsertElement'),

  handleFile: function() {
    var elem = this.$()[0];
    this.sendAction('action', elem.files);
    elem.value = "";
  }

});
