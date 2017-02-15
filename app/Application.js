Ext.define('gallery.Application', {
  name: 'gallery',

  extend: 'Ext.app.Application',
  //requires:['/resources/ux/Animated'],
  requires: ['gallery.model.features'],

  views: [
    'gallery.view.phoneGallery',
    'phoneGrid',
    'detail'
  ],

  controllers: [],

  stores: [],

  launch: function() {
    var flat = {};
    var flatter = {};
    var phoneFields = [];
    var first = json[Object.keys(json)[0]];
    for (var key in first) {
      phoneFields.push({
        name: key
      });
    }
    phoneFields.push({
      name: 'Android',
      mapping: 'filterfeatures.Android'
    })

    var phone = Ext.define('phone', {
      extend: 'Ext.data.Model',
      fields: phoneFields,
    });
    var store = Ext.create('Ext.data.Store', {
      storeId: 'phoneStore',
      model: phone,
      associations: [{
        type: 'hasMany',
        model: 'features',
        name: 'features'
      }]
    });

    var grid = Ext.create('gallery.view.phoneGrid', {
      store: store
    });
    Ext.ComponentQuery.query('panel[region=south]')[0].add(grid);

    function filterData(slider) {
      var values = slider.getValues();

      var test = [];

      //TODO: the suspend/resume hack can be removed once Filtering has been updated
      store.suspendEvents();
      store.clearFilter();
      store.resumeEvents();
      store.filter([{
        fn: function(record) {
          return record.get('priceFrom') >= values[0] && record.get(
            'priceFrom') <= values[1];
        }
      }]);

      store.sort('name', 'ASC');
    }

    var phoneSlider = Ext.create('Ext.slider.Multi', {
      hideLabel: false,
      width: 300,
      fieldLabel: "Price",
      minValue: 0,
      maxValue: 500,
      values: [0, 700],

      listeners: {
        change: {
          buffer: 70,
          fn: filterData
        }
      }
    });

    var view = {
      xtype: 'container',
      title: 'gallery',
      items: [{
          xtype: 'dataview',
          title: 'dataview',
          id: 'images-view',
          store: store,
          tpl: [
            '<tpl for=".">',
            '<div class="thumb-wrap">',
            '<div class="thumb">',
            '<img src="http://vodafone.ie/{imageFront}" /> <br>',
            '</div>',
            '{description}<br>',
            '{priceFrom:usMoney} ( Rating : {rating})',
            // '<tpl if="priceFrom &gt; 1">{priceFrom:usMoney} </tpl>',
            // '<tpl if="rating &gt; 1">( Rating : {rating}) </tpl>',
            '</div>',
            '</tpl>',
            '<div class="x-clear"></div>'
          ],
          plugins: [
            //buggy but looks nice
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
            afterrender: function() {
              console.log('AF', this);
            },
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
    Ext.ComponentQuery.query('tabpanel')[0].down('container[use=gallery]')
      .add(view);



    Ext.each(json, function(phone) {
      for (key in phone) {
        store.add(phone[key]);
      }
    });
    console.log(store);

  },


});
