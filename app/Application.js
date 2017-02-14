Ext.define('gallery.Application', {
  name: 'gallery',

  extend: 'Ext.app.Application',

  views: [
    // TODO: add views here
  ],

  controllers: [
    // TODO: add controllers here
  ],

  stores: [
    // TODO: add stores here
  ],

  launch: function() {
    console.log('launched');
    var flat = {};
    var flatter = {};
    var phoneFields = []
    iterate(json['1483045'], "", flat);
    for (var key in flat) {
      console.log(key);
      phoneFields.push[key];
    }
    console.log(phoneFields)
    var phone = Ext.create('Ext.data.Model', {
      fields: phoneFields,
    });
    var store = Ext.create('Ext.data.Store', {
      model: phone,
    })

    Ext.each(json, function(phone) {
      var obj = {};
      iterate(phone, "", obj);
      store.add(obj)
    })
    console.log(store);

    console.log('flater', flatter);
    console.log('single', flat);

  }
});
