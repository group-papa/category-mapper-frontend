import Ember from 'ember';

// Component to handle file input

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['file-input'],
  text: 'Upload File',

  bindHandlers: function() {
    this.$('input').on('change', this.handleFile.bind(this));
  }.on('didInsertElement'),

  handleFile: function() {
    var elem = this.$('input')[0];
    this.sendAction('action', elem.files);
    elem.value = "";
  }

});
