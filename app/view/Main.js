Ext.define('gallery.view.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.tab.Panel',
    'Ext.layout.container.Border'
  ],

  xtype: 'app-main',

  layout: {
    type: 'border'
  },

  items: [{
    region: 'south',
    xtype: 'panel',
    title: 'More Phone Info',
    collapsible: true,
    height: 400,
    items: []
  }, {
    region: 'center',
    xtype: 'tabpanel',
    items: [{
      title: 'Gallery',
      use: 'gallery',
      xtype: 'container',
      autoScroll: true,
    }, {
      title: 'Comparison Grid (0 items selected)',
      count: 0,
      xtype: 'featuresGrid',
      use: 'details',
    }, {
      xtype: 'detail',
      title: 'Detailed View',
      use: 'detailedView'
    }],
    listeners: {
      tabchange: function(tabPanel, newCard, oldCard, eOpts) {
        if (newCard.use === 'details') {
          tabPanel.up('app-main').down('panel[region=east]').collapse();
        } else {
          tabPanel.up('app-main').down('panel[region=east]').expand();
        }
      }
    }
  }, {
    region: 'east',
    width: 300,
    collapsible: true,
    title: 'Filters',
    use: 'filters',
    items: [{
      xtype: 'phonefilters'
    }]
  }]
});
