Ext.define('gallery.Application', {
  name: 'gallery',

  extend: 'Ext.app.Application',
  //requires:['/resources/ux/Animated'],
  requires: ['gallery.model.features'],

  views: [
    'gallery.view.phoneGallery',
    'phoneGrid',
    'detail',
    'featuresGrid',
    'phonefilters'
  ],
  controllers: [],
  stores: [],

  launch: function() {
    var flat = {};
    var flatter = {};
    var phoneFields = [];
    var first = json[Object.keys(json)[0]];
    //get all the phoneFields for a model
    for (var key in first) {
      phoneFields.push({
        name: key
      });
    }
    //create a phone model
    var phone = Ext.define('phone', {
      extend: 'Ext.data.Model',
      fields: phoneFields,
    });

    var store = Ext.create('Ext.data.Store', {
      storeId: 'phoneStore',
      model: phone,
      //create an assoication with features
      associations: [{
        type: 'hasMany',
        model: 'features',
        name: 'features'
      }]
    });

    var grid = Ext.create('gallery.view.phoneGrid', {
      store: store
    });
    //quick add of grid to south region
    Ext.ComponentQuery.query('panel[region=south]')[0].add(grid);

    
    var view = {
      xtype: 'container',
      title: 'gallery',
      items: [{
          xtype: 'dataview',
          title: 'dataview',
          id: 'images-view',
          store: store,
          //a nice template which is part of HTML5 spec
          tpl: [
          //for each item of store
            '<tpl for=".">',
            '<div class="thumb-wrap">',
            '<div class="thumb">',
            '<img src="http://vodafone.ie/{imageFront}" /> <br>',
            '</div>',
            '{description}<br>',
            '{priceFrom:usMoney} ( Rating : {rating})',
            //only show if price is > 1 but messed with layout
            // '<tpl if="priceFrom &gt; 1">{priceFrom:usMoney} </tpl>',
            // '<tpl if="rating &gt; 1">( Rating : {rating}) </tpl>',
            '</div>',
            '</tpl>',
            '<div class="x-clear"></div>'
          ],
          plugins: [
            //buggy third party library but looks nice
            // Ext.create('Ext.ux.DataView.Animated', {
            //   duration: 550,
            //   idProperty: 'id'
            // })
          ],

          multiSelect: true,
          height: 'auto',
          autoScroll: true,
          trackOver: true,
          overItemCls: 'x-item-over',
          itemSelector: 'div.thumb-wrap',
          emptyText: 'No results to display',
          listeners: {
            itemclick: function(view, record, item, index, e, eOpts) {
              var phoneFeatures = record.get(
                'filterfeatures');
              phoneFeatures.description = record.get('description');
              phoneFeatures.productid = record.get('productid');
              var featuresGrid = this.up('tabpanel').down(
                  'featuresGrid')
                //if not in the store add it
              if (featuresGrid.store.find('productid', record.get(
                  'productid')) === -1) {
                featuresGrid.store.add(
                  phoneFeatures
                );
                this.up('tabpanel').down('panel[use=details]').setTitle(
                  'Comparison Grid (' +
                  featuresGrid.store.getCount() +
                  ' items selected)')
              }
            }
          }
        },

      ]
    };
    //quick add
    Ext.ComponentQuery.query('tabpanel')[0].down('container[use=gallery]')
      .add(view);

    //add each phone to the store, removing if number key
    Ext.each(json, function(phone) {
      for (key in phone) {
        store.add(phone[key]);
      }
    });

  },


});
