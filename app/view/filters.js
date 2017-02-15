Ext.define('gallery.view.filters', {
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
      xtype: 'button',
      text: 'Apply Filters',
      handler: function(btn) {
        var store = Ext.getStore('phoneStore');
        var values = this.up('form').getValues();
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
