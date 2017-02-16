Ext.define('gallery.view.detail', {
  alias: 'widget.detail',
  extend: 'Ext.panel.Panel',
  items: [{
      xtype: 'image',
      use: 'detailedView',
      src: ''
    }, {
      xtype: 'image',
      use: 'detailedBackView',
      src: ''
    }, {
      xtype: 'container',
      use: 'text',
      title: 'Details',
      items: []
    }

  ],
  loadImage: function(url,handsetcode) {
    this.down('image[use=detailedView]').setSrc(
      'https://www.vodafone.ie/' +
      url);
    this.down('image[use=detailedBackView]').setSrc(
      'https://www.vodafone.ie/image/' + handsetcode +'_BACK.img');
  },
  writeInfo: function(record) {
    console.log(record);
    var container = this.down('container[use=text]');
    container.removeAll();
    container.add(this.addLabel('productDescription', record.get(
      'productDescription')));
  },

  addLabel: function(name, text) {
    return {
      xtype: 'label',
      name: name,
      text: text
    };
  }
});
