Ext.define('gallery.view.phonefilters', {
  extend: 'Ext.form.Panel',
  alias: 'widget.phonefilters',
  items: [{
    xtype: 'form',
    items: [{
      xtype: 'textfield',
      name: 'description',
      fieldLabel: 'Description',
    }, {
      name: 'priceFrom',
      fieldLabel: 'Price',
      xtype: 'numberfield',
      minValue: 0,
    }, {
      name: 'rating',
      fieldLabel: 'Rating',
      xtype: 'numberfield',
      minValue: 0,
      maxValue: 5
    }, {
      xtype : 'combo',
    fieldLabel: 'Manufacturer',
    name: 'manufacturer',
    store: Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"name":"Apple"},
        {"name":"Alcatel"},
        {"name":"Doro"},
        {"name":"HTC"},
        {"name":"Huawei"},
        {"name":"Microsoft"},
        {"name":"Samsung"},
        {"name":"Sony"},
        {"name":"Vodafone"},
        ]}),
    queryMode: 'local',
    displayField: 'name',
    valueField: 'name',
  },{
    xtype : 'multislider',
    name : 'slider',
    hideLabel: false,
    margin : '10 0 10 0',
      width: 250,
      fieldLabel: "Price",
      minValue: 0,
      maxValue: 400,
      values: [0, 400],

      listeners: {
        change: {
          buffer: 70,
          fn: function(slider) {
      var values = slider.getValues();

var store = Ext.getStore('phoneStore');
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
        }
      }
  },{
      xtype: 'button',
      text: 'Apply Filters',
      handler: function(btn) {
        var store = Ext.getStore('phoneStore');
        var values = this.up('form').getValues();
        console.log(values);
        delete values.slider;
        store.clearFilter(true);
        var filters = [];
        var performFilter = false;
        for (prop in values) {
          if (values.hasOwnProperty(prop)) {
            if (values[prop].length > 0) {
              filters.push({
                property: prop,
                value: values[prop]
              })
              performFilter = true;
            }
          }
        }
        if (performFilter) {
          store.filter(filters)
        }
      }
    }, {
      xtype: 'button',
      text: 'Clear Filters',
      handler: function() {
        var store = Ext.getStore('phoneStore');
        store.clearFilter();
      }
    }]
  }]
})
